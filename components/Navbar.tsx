import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '../lib/context'
import styles from '../styles/Navbar.module.scss'

const Navbar: React.FC = () => {
  const { user } = useContext(UserContext)

  return <nav className={styles.navbar}>
    <div className={styles['navbar__logo']}>
      <Link href="/">UltraColors</Link></div>
    <div className={styles['navbar__actions']}>
      <div className="navbar__units">Hex</div>
      <div className="navbar__language">English</div>
      <div className="navbar__account">
        {user && <Link href="/profile/:userId">Profile</Link>}
        {!user && <Link href="/sign-in">Sign in</Link>}
      </div>
    </div>
  </nav>
}

export default Navbar