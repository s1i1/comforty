import React from 'react';
import cn from 'classnames';
import arrowPath from './assets/arrow.svg';
import styles from './styles.module.scss';

type ButtonProps = {
  title: string;
  isArrow?: boolean;
  isLarge?: boolean;
  isTitleCenter?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, isArrow, isLarge, isTitleCenter }) => {
  return (
    <div className={styles.button}>
      <div
        className={cn(
          styles.container,
          isLarge && styles.largeButton,
          isTitleCenter && styles.title__center,
        )}>
        <div className={styles.title}>{title}</div>
        {isArrow && <img className={styles.image} src={arrowPath} alt="arrow" />}
      </div>
    </div>
  );
};

export default Button;
