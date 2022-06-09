import classnames from 'classnames';

import styles from '../../../styles/Primitives.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
}

const defaultProps: Partial<Props> = {
  variant: 'contained',
};

const DButton: React.FC<Props> = (props) => {
  const { className, variant, ...restProps } = props;

  const classNames = classnames({
    [styles['button']]: true,
    [styles[`button--${props.variant}`]]: true,
  });
  return (
    <button className={classNames} {...restProps}>
      {props.children}
    </button>
  );
};

DButton.defaultProps = defaultProps;

export default DButton;
