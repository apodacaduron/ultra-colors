import { signInWithPopup, signOut as signOutFirebase } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { errorHandler } from "./errorHandler"
import { auth, googleAuthProvider } from "./firebase"

export const useAuthentication = () => {
  const [user] = useAuthState(auth)

  // Handlers
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleAuthProvider)
    } catch (err) {
      errorHandler(err)
    }
  }
  function signOut() {
    return signOutFirebase(auth)
  }

  return {
    user,
    signInWithGoogle,
    signOut,
  }
}