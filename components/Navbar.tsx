import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { useAuthentication } from '../lib/useAuthentication';
import styles from '../styles/Navbar.module.scss';
import { DMenu, DMenuButton, DPopover } from './primitives';
import { DAvatar } from './primitives/Avatar';

const Navbar: React.FC = () => {
  const { user } = useContext(UserContext);
  const authInstance = useAuthentication();
  const profileOptions = [
    {
      content: 'Profile',
      action: () => console.log('Profile'),
    },
    {
      content: 'Log out',
      action: () => authInstance.signOut(),
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar__logo']}>
        <Link href="/">UltraColors</Link>
      </div>
      <div className={styles['navbar__actions']}>
        <div className="navbar__actions__units">Hex</div>
        <div className="navbar__actions__language">English</div>
        <div className="navbar__actions__account">
          {user && (
            <DMenu options={profileOptions}>
              <DMenuButton>
                <div
                  className={styles['navbar__actions__account__profile-menu']}
                >
                  <DAvatar text={user.displayName} src={user.photoURL} />
                  {user.displayName}
                </div>
              </DMenuButton>
            </DMenu>
          )}
          {!user && (
            <DPopover buttonText="Sign in">
              <div className={styles['navbar__actions__account__popover']}>
                <div
                  className={styles['navbar__actions__account__popover__title']}
                >
                  Log in
                </div>
                <div
                  className={
                    styles['navbar__actions__account__popover__description']
                  }
                >
                  Welcome back, please sign in with your account
                </div>

                <a onClick={authInstance.signInWithGoogle}>
                  <img
                    src="/assets/png/btn_google_signin_light_normal_web@2x.png"
                    className={
                      styles['navbar__actions__account__popover__sign-in']
                    }
                  />
                </a>
              </div>
            </DPopover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
