import styles from '../../styles/Create.module.scss';

interface Props {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const TopToolbar: React.FC<Props> = (props) => {
  return (
    <div className={styles['top-toolbar']}>
      <div className={styles['top-toolbar__box']}>
        <div className={styles['top-toolbar__box__left']}>{props.left}</div>
        <div className={styles['top-toolbar__box__center']}>{props.center}</div>
        <div className={styles['top-toolbar__box__right']}>{props.right}</div>
      </div>
    </div>
  );
};

export default TopToolbar;
