import { collectionGroup, getDocs, limit as limitQuery, query, where } from 'firebase/firestore';

import Banner from '../components/home/Banner';
import PaletteCard from '../components/PaletteCard';
import { PostNormalized } from '../lib/converters/PostConverter';
import { firestore, postToJSON } from '../lib/firebase';
import { usePosts } from '../lib/usePosts';
import styles from '../styles/Home.module.scss';

import type { NextPage } from 'next';
interface Props {
  posts: Array<PostNormalized>;
}

const LIMIT = 20;

export async function getServerSideProps() {
  const postsQuery = query(
    collectionGroup(firestore, 'posts'),
    where('published', '==', true),
    // orderBy('createdAt', 'desc'),
    limitQuery(LIMIT)
  );
  const querySnapshot = await getDocs(postsQuery);
  const posts = querySnapshot.docs.map(postToJSON);

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

const Home: NextPage<Props> = (props) => {
  const postsInstance = usePosts({ posts: props.posts, limit: LIMIT });

  return (
    <main className={styles.home}>
      <div className={styles['home__container']}>
        <Banner />
        {postsInstance.hasPosts ? (
          <div className={styles['home__container__grid']}>
            {postsInstance.posts?.map((post, index) => (
              <PaletteCard
                key={index}
                paletteData={{
                  paletteName: post.title,
                  authorId: '123',
                  authorName: post.user.displayName ?? '',
                  colors: ['#f6e58d', '#f9ca24', '#ffbe76'],
                }}
              />
            ))}
          </div>
        ) : (
          <div>No posts yet</div>
        )}
        {!postsInstance.loading && postsInstance.hasMorePosts && (
          <button onClick={() => postsInstance.getMorePosts()}>
            Load more
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
