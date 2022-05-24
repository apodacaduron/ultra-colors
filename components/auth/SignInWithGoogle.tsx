import { useAuthentication } from "../../lib/useAuthentication";

// Sign in with Google button
const SignInWithGoogle: React.FC<{ children?: React.ReactNode; }> = (props) => {
  const authInstance = useAuthentication()

  return (
    <button className="btn-google" onClick={authInstance.signInWithGoogle}>
      {props.children}
    </button>
  );
}

export default SignInWithGoogle