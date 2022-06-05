import classnames from 'classnames';
import styles from '../styles/Palette.module.scss';
import { XIcon } from '@heroicons/react/outline';
import React, { RefObject } from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  background?: string;
  stroke?: 'none' | 'line' | 'dashed';
  actionIcon?: React.ReactNode;
  showAction?: boolean;
}

const defaultProps = {
  showAction: true,
  stroke: 'none',
  background: 'transparent',
} as const;

const CircularColor: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { showAction, actionIcon, background, stroke, ...restProps } = props;
  const classNames = classnames({
    [styles['circular-color__button']]: true,
    [styles[`circular-color__button--stroke-${props.stroke}`]]: true,
  });

  return (
    <div ref={ref} className={styles['circular-color']}>
      {props.showAction && (
        <button className={styles['circular-color__action']}>
          {props.actionIcon ?? (
            <XIcon className={styles['circular-color__action__icon']} />
          )}
        </button>
      )}
      <button {...restProps} className={classNames}>
        {props.children}
      </button>
    </div>
  );
});

CircularColor.defaultProps = defaultProps;

export default CircularColor;
