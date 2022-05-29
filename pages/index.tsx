import type { NextPage } from 'next';
import Banner from '../components/home/Banner';
import PaletteCard from '../components/PaletteCard';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => (
  <div className={styles.home}>
    <Banner />
    <div className={styles['home__grid']}>
      {Array.from({ length: 20 }).map(() => (
        <PaletteCard
          paletteData={{
            paletteName: 'Volcanic orange',
            authorId: '123',
            authorName: 'Daniel',
            colors: ['#f6e58d', '#f9ca24', '#ffbe76'],
          }}
        />
      ))}
    </div>
  </div>
);

export default Home;
