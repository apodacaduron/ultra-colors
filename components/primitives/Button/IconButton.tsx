import classnames from 'classnames';
import styles from '../../../styles/Primitives.module.scss';
import { ButtonSize, buttonSizes } from './types';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}
const defaultProps: Partial<Props> = {
  size: 'md',
};

const DIconButton: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  const classNames = classnames({
    [styles['icon-button']]: true,
    [styles[`icon-button--size-${props.size}`]]:
      props.size && buttonSizes.includes(props.size),
  });

  return (
    <button {...restProps} className={classNames}>
      {props.children}
    </button>
  );
};

DIconButton.defaultProps = defaultProps;

export default DIconButton;
