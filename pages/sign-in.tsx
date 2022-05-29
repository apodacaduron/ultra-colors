import { NextPage } from 'next';
import SignInWithGoogle from '../components/auth/SignInWithGoogle';
import styles from '../styles/Auth.module.scss';

const SignIn: NextPage = () => (
  <div className={styles.auth}>
    <div className="auth__container">
      Sign in
      <div className="auth__container__social">
        <SignInWithGoogle>Sign in with Google</SignInWithGoogle>
      </div>
    </div>
  </div>
);

export default SignIn;
