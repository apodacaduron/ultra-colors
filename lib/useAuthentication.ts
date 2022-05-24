import { signInWithPopup, signOut as signOutFirebase } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, googleAuthProvider } from "./firebase"

export const useAuthentication = () => {
  const [user] = useAuthState(auth)

  // Handlers
  function signInWithGoogle() {
    return signInWithPopup(auth, googleAuthProvider)
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