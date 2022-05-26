import styles from '../../styles/Home.module.scss'

const Banner: React.FC = () => {
  return <div className={styles.banner}>
    <div className={styles['banner__logo']}>UltraColors</div>
    <div className={styles['banner__text']}><b>Use and share</b> <br /> your favorite palettes</div>
    <div className={styles['banner__color-count']}><b>0</b> colors created</div>
  </div>
}

export default Banner