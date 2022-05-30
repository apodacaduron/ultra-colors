import { signInWithPopup, signOut as signOutFirebase } from "firebase/auth"
import { httpsCallable } from "firebase/functions"
import { useAuthState } from "react-firebase-hooks/auth"
import { errorHandler } from "./errorHandler"
import { auth, functions, googleAuthProvider } from "./firebase"

export const useAuthentication = () => {
  // State
  const [user] = useAuthState(auth)

  // Callable functions
  const onSignUp = httpsCallable(functions, 'onSignUp')

  // Handlers
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleAuthProvider)
      await onSignUp()
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