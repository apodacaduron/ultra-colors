import SignInWithGoogle from '../components/auth/SignInWithGoogle';
import { useAuthentication } from '../lib/useAuthentication';
import styles from'../styles/Auth.module.scss';

const SignIn: React.FC = () => {
  return <div className={styles['auth']}>
    <div className="auth__container">
      Sign in
      <div className="auth__container__social">
        <SignInWithGoogle>Sign in with Google</SignInWithGoogle>
      </div>
    </div>
  </div>
}

export default SignIn