import React from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { CategoriesModalItem } from 'shared/ui';
import { CategoriesButton } from 'shared/ui/buttons';
import { CategoryItems } from 'features/categories/model';
import { categoriesModel } from 'features/categories';
import styles from './styles.module.scss';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();

  const { currentCategory } = useAppSelector(categoriesModel.selectCategories);

  const categoryItems = [
    { title: 'All Categories', category: '' },
    { title: 'Sofa', category: 'sofa-category' },
    { title: 'Armchair', category: 'armchair-category' },
    { title: 'Wing Chair', category: 'wing-chair-category' },
    { title: 'Desk Chair', category: 'desk-chair-category' },
    { title: 'Wooden Chair', category: 'wooden-chair-category' },
    { title: 'Park Bench', category: 'park-bench-category' },
  ];

  // const [currentCategory, setCurrentCategory] = React.useState({
  //   title: 'All Categories',
  //   category: '',
  // });
  const [showModal, setShowModal] = React.useState(false);

  const refContainer = React.useRef<HTMLDivElement>(null);

  const handlerClick = (categoryObj: CategoryItems) => {
    dispatch(categoriesModel.setCurrentCategory(categoryObj));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  React.useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const refCurrent = refContainer.current;
        const target = e.target.closest(`.${refCurrent?.getAttribute('class')}`);

        if (target !== refCurrent) {
          setShowModal(false);
        }
      }
    };

    document.body.addEventListener('click', closePopup);

    return () => {
      document.body.removeEventListener('click', closePopup);
    };
  }, []);

  return (
    <div ref={refContainer} className={styles.container} onClick={toggleModal}>
      <CategoriesButton currentCategory={currentCategory.title} isActive={showModal} />
      <div className={styles.modal}>
        {showModal && (
          <ul className={styles.modal__list}>
            {categoryItems.map((obj, index) => (
              <li key={index} onClick={() => handlerClick(obj)}>
                <CategoriesModalItem
                  title={obj.title}
                  isActive={obj.title === currentCategory.title && true}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Categories;
