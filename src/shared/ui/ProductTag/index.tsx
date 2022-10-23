import React from 'react';
import cn from 'classnames';
import styles from './ProductTag.module.scss';

type ProductTagProps = {
  isSales?: boolean;
};

export const ProductTag: React.FC<ProductTagProps> = ({ isSales }) => {
  const checkIsSales = isSales ? styles.sales : styles.new;
  const title = isSales ? 'Sales' : 'New';

  return (
    <div>
      <div className={cn(styles.container, checkIsSales)}>
        <div className={styles.text}>{title}</div>
      </div>
    </div>
  );
};
