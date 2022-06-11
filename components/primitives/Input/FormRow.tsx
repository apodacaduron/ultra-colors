import { prependOnceListener } from 'process';
import { CSSProperties } from 'react';
import styles from '../../../styles/Primitives.module.scss';

interface Props {
  children: React.ReactNode;
  gap?: CSSProperties['gap'];
  flexDirection?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
}

const DFormRow: React.FC<Props> = (props) => {
  return (
    <div
      className={styles['form-row']}
      style={{
        gap: props.gap,
        flexDirection: props.flexDirection,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
      }}
    >
      {props.children}
    </div>
  );
};

export default DFormRow;
