import Link from 'next/link';
import { useContext } from 'react';

import { PlusSmIcon } from '@heroicons/react/solid';

import { UserContext } from '../lib/context';
import { useAuthentication } from '../lib/useAuthentication';
import styles from '../styles/Navbar.module.scss';
import { DIconLinkButton, DMenu, DMenuButton, DPopover } from './primitives';
import { DAvatar } from './primitives/Avatar';
import { DSpinner } from './primitives/Spinner';

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

  const renderSignInPopover = !authInstance.userLoading ? (
    <DPopover buttonText="Sign in" placement="bottom-end">
      <div className={styles['navbar__container__actions__account__popover']}>
        <div
          className={
            styles['navbar__container__actions__account__popover__title']
          }
        >
          Log in
        </div>
        <div
          className={
            styles['navbar__container__actions__account__popover__description']
          }
        >
          Welcome back, please sign in with your account
        </div>

        <a onClick={authInstance.signInWithGoogle}>
          <img
            src="/assets/png/btn_google_signin_light_normal_web@2x.png"
            className={
              styles['navbar__container__actions__account__popover__sign-in']
            }
          />
        </a>
      </div>
    </DPopover>
  ) : (
    <DSpinner />
  );

  const renderUserMenu = (
    <DMenu options={profileOptions}>
      <DMenuButton>
        <div
          className={
            styles['navbar__container__actions__account__profile-menu']
          }
        >
          <DAvatar text={user?.displayName} src={user?.photoURL} />
        </div>
      </DMenuButton>
    </DMenu>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar__container']}>
        <div className={styles['navbar__container__logo']}>
          <Link href="/">UltraColors</Link>
        </div>
        <div className={styles['navbar__container__actions']}>
          <div className={styles['navbar__container__actions__add']}>
            <DIconLinkButton href={'/create'}>
              <PlusSmIcon className="h-5 w-5" />
            </DIconLinkButton>
          </div>
          <div className="navbar__container__actions__account">
            {user ? renderUserMenu : renderSignInPopover}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
