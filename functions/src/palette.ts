import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { isColorList } from './utils/typeGuards';

export const createPost = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        'unauthenticated',
        'The function must be called while authenticated.',
    );
  }

  const currentAuthUser = await admin.auth().getUser(context.auth.uid);
  const postsRef =
    admin.firestore().collection(`users/${context.auth.uid}/posts`);

  if (!isColorList(data)) {
    throw new functions.https.HttpsError(
        'failed-precondition',
        'The submitted data is not a color list',
    );
  }

  await postsRef.add({
    title: 'Hello World',
    published: true,
    deleted: false,
    heartCount: 0,
    viewCount: 0,
    palette: data,
    user: {
      uid: context.auth.uid,
      displayName: currentAuthUser.displayName ?? null,
      avatar: currentAuthUser.photoURL ?? null,
    },
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
});
