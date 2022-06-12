import {
    collectionGroup, getDocs, limit as limitQuery, query, startAfter, Timestamp, where
} from 'firebase/firestore';
import React, { useState } from 'react';
import { useHttpsCallable } from 'react-firebase-hooks/functions';
import toast from 'react-hot-toast';

import { postConverter } from './converters/PostConverter';
import { firestore, functions, postToJSON } from './firebase';
import { PostNormalized } from './utils/types';

type UsePostsOptions = {
  posts: Array<PostNormalized>
  limit: number
}
export const usePosts = (options?: UsePostsOptions) => {
  // State
  const limit = options?.limit ?? 20;
  const [posts, setPosts] = useState<Array<PostNormalized>>(options?.posts ?? []);
  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState((options?.posts.length ?? 0) >= limit);
  const hasPosts = Boolean(posts?.length);

  // Callable functions
  const [createPostCF, createPostLoadingCF, createPostErrorCF] = useHttpsCallable(functions, 'createPost');
  React.useEffect(() => {
    if (createPostErrorCF?.message) toast.error(createPostErrorCF.message)
  }, [createPostErrorCF?.message])

  // Handlers
  async function getMorePosts() {
    if (!posts) return console.error("Can't fetch more posts");
    const lastPost = posts[posts.length - 1];
    const cursor =
      typeof lastPost.createdAt === 'number'
        ? Timestamp.fromMillis(lastPost.createdAt)
        : lastPost.createdAt;

    const postsQuery = query(
      collectionGroup(firestore, 'posts'),
      where('published', '==', true),
      // orderBy('createdAt', 'desc'),
      startAfter(cursor),
      limitQuery(limit)
    ).withConverter(postConverter);
    const querySnapshot = await getDocs(postsQuery);
    const newPosts = querySnapshot.docs.map(postToJSON);

    setPosts(posts.concat((newPosts as unknown) as PostNormalized));
    setLoading(false);

    if (newPosts.length < limit) {
      setHasMorePosts(false);
    }
    return querySnapshot;
  }

  return {
    // State
    hasPosts,
    limit,
    posts,
    loading,
    hasMorePosts,

    // Callable functions
    createPostCF,
    createPostLoadingCF,
    createPostErrorCF,

    // Handlers
    setPosts,
    getMorePosts,
  };
};

