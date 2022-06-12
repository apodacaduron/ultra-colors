import {
    DocumentData, QueryDocumentSnapshot, SnapshotOptions, Timestamp, WithFieldValue
} from 'firebase/firestore';

import { ColorList } from '../utils/types';

export class Post {
  constructor(
    readonly title: string,
    readonly published: boolean,
    readonly deleted: boolean,
    readonly heartCount: number,
    readonly viewCount: number,
    readonly palette: ColorList,
    readonly user: {
      uid: string
      displayName: string | null
      avatar: string | null
    },
    readonly createdAt?: Timestamp,
    readonly updatedAt?: Timestamp
  ) { }

  toString(): string {
    return `Title: ${this.title}, AuthorName: ${this.user.displayName}, Published: ${this.published}, Colors: ${this.palette}`;
  }
}

export const postConverter = {
  toFirestore(post: WithFieldValue<Post>): DocumentData {
    return { ...post };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Post {
    const data = snapshot.data(options)!;
    return new Post(
      data.title,
      data.published,
      data.deleted,
      data.heartCount,
      data.viewCount,
      data.palette,
      data.user,
      data.createdAt?.toMillis(),
      data.updatedAt?.toMillis()
    );
  },
};
