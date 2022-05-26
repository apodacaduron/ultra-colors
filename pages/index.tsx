import type { NextPage } from 'next'
import Banner from '../components/home/Banner'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Banner />
    </div>
  )
}

export default Home
