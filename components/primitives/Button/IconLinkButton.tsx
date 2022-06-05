import classnames from 'classnames';
import Link, { LinkProps } from 'next/link';
import styles from '../../../styles/Primitives.module.scss';
import { ButtonSize, buttonSizes } from './types';

interface Props extends LinkProps {
  children: React.ReactNode;
  size?: ButtonSize;
}
const defaultProps: Partial<Props> = {
  size: 'md',
};

const DIconLinkButton: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  const classNames = classnames({
    [styles['icon-button']]: true,
    [styles[`icon-button--size-${props.size}`]]:
      props.size && buttonSizes.includes(props.size),
  });

  return (
    <Link {...restProps}>
      <a className={classNames}>{props.children}</a>
    </Link>
  );
};

DIconLinkButton.defaultProps = defaultProps;

export default DIconLinkButton;
