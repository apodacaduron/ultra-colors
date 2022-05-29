import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '../lib/context'
import { useAuthentication } from '../lib/useAuthentication'
import styles from '../styles/Navbar.module.scss'
import { DMenu, DMenuButton, DPopover } from './primitives'

const Navbar: React.FC = () => {
  const { user } = useContext(UserContext)
  const authInstance = useAuthentication()
  const profileOptions = [
    {
      content: 'Profile',
      action: () => console.log('Profile'),
    },
    {
      content: 'Log out',
      action: () => authInstance.signOut(),
    },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar__logo']}>
        <Link href="/">UltraColors</Link>
      </div>
      <div className={styles['navbar__actions']}>
        <div className="navbar__units">Hex</div>
        <div className="navbar__language">English</div>
        <div className="navbar__account">
          {user && (
            <DMenu options={profileOptions}>
              <DMenuButton>{user.displayName}</DMenuButton>
            </DMenu>
          )}
          {!user && (
            <Link href="/sign-in">
              <DPopover />
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
