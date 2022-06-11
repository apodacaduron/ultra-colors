import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from '../../../styles/Primitives.module.scss';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const DInput: React.FC<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={styles['input']}>
      <input {...restProps} className={styles['input__field']} />
    </div>
  );
};

export default DInput;
