import React from 'react';
import cn from 'classnames';
import { ProductTag } from 'shared/ui';
import { AddCartButton, FavoriteButton } from '../buttons';
import styles from './styles.module.scss';

type CardProps = {
  image: string;
  title: string;
  price: number;
  prevPrice?: number;
  newest?: boolean;
};

const Card: React.FC<CardProps> = ({ image, title, price, prevPrice, newest }) => {
  const tagCheck = (newest?: boolean, prevPrice?: number) => {
    return (prevPrice && 'sales') || (newest && 'new');
  };

  return (
    <div className={cn(styles.container)}>
      <div className={styles.tag}>
        <ProductTag tag={tagCheck(newest, prevPrice)} />
      </div>

      <div className={styles.image}>
        <img className={styles.background} src={image} alt="product-background" />
      </div>

      <div className={styles.favorite}>
        <FavoriteButton />
      </div>

      <div className={styles.bottom}>
        <div className={styles.product__info}>
          <p className={styles.text}>{title}</p>

          <div className={styles.prices}>
            <span className={styles.current__price}>${price}</span>
            <span className={styles.prev__price}>{prevPrice && '$' + prevPrice}</span>
          </div>
        </div>

        <div className={styles.cart}>
          <AddCartButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
