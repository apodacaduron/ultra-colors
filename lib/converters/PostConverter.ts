import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
  WithFieldValue,
} from 'firebase/firestore';

export type PostNormalized = {
  title: string,
  slug: string,
  authorId: string,
  authorName: string,
  published: boolean,
  colors: Array<string>,
  likeCount: number,
  viewCount: number,
  createdAt?: number,
  updatedAt?: number
}

export class Post {
  constructor(
    readonly title: string,
    readonly slug: string,
    readonly authorId: string,
    readonly authorName: string,
    readonly published: boolean,
    readonly colors: Array<string>,
    readonly likeCount: number,
    readonly viewCount: number,
    readonly createdAt?: Timestamp,
    readonly updatedAt?: Timestamp
  ) { }

  toString(): string {
    return `Title: ${this.title}, AuthorName: ${this.authorName}, Published: ${this.published}, Colors: ${this.colors}`;
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
      data.slug,
      data.authorId,
      data.authorName,
      data.published,
      data.colors,
      data.likeCount,
      data.viewCount,
      data.createdAt?.toMillis(),
      data.updatedAt?.toMillis()
    );
  },
};
