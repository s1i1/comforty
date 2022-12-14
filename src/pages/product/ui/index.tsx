import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useGetTopCategoriesQuery } from 'shared/api';
import { useAppDispatch, baseRoutes, useAppSelector } from 'shared/lib';
import { CategoryCard } from 'shared/ui';
import { categoriesModel } from 'features/categories';
import { headerModel } from 'widgets/header';
import styles from './styles.module.scss';

export const ProductPage = () => {
  const dispatch = useAppDispatch();

  const { data: products } = useGetTopCategoriesQuery({ limit: 6, pageNumber: 1 });

  const { scroll } = useAppSelector(headerModel.selectHeader);

  const handlerClickCategory = (categoryName: string) => {
    categoriesModel.categoryNames.forEach((obj) => {
      if (obj.title === categoryName) {
        dispatch(categoriesModel.setCurrentCategory(obj));
      }
    });
  };

  return (
    <div className={cn('_container', styles.container, scroll >= 48 && styles.with__scroll)}>
      <h2 className={styles.header}>Our Categories</h2>
      <ul className={styles.list}>
        {products?.map((product) => (
          <li
            key={product.id}
            className={styles.list__item}
            onClick={() => handlerClickCategory(product.category)}>
            <Link to={baseRoutes.SHOP}>
              <CategoryCard {...product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
