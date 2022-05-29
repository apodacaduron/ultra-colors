import { CSSProperties } from 'react';
import { useColor } from '../../../lib/useColor';
import styles from '../../../styles/Primitives.module.scss';

interface Props {
  text?: string | null;
  src?: string | null;
  alt?: string | null;
  size?: number;
  borderRadius?: number;
}

const DAvatar: React.FC<Props> = (props) => {
  const { stringToHexColor, getFontColor } = useColor();
  const backgroundColor = stringToHexColor(props.text || '');

  const avatarStyles: CSSProperties = {
    width: props.size ?? '2rem',
    height: props.size ?? '2rem',
    backgroundColor,
    borderRadius: props.borderRadius ?? '50%',
    color: getFontColor(backgroundColor),
  };

  return (
    <div style={avatarStyles} className={styles['avatar']}>
      {props.src ? (
        <img src={props.src} alt={props.alt || undefined} />
      ) : (
        props.text?.charAt(0)
      )}
    </div>
  );
};

export default DAvatar;
