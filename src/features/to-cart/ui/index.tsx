import React from 'react';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import styles from './styles.module.scss';

const ToCart = () => {
  return (
    <Link to={baseRoutes.CART}>
      <div className={styles.to__cart}>
        <div className={styles.container}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.52084 2.97925L4.42751 3.30925L5.31026 13.8262C5.34417 14.24 5.53287 14.6259 5.8387 14.9067C6.14454 15.1876 6.54503 15.3428 6.96026 15.3414H16.9611C17.3587 15.3419 17.7431 15.1987 18.0435 14.9383C18.344 14.678 18.5403 14.3179 18.5964 13.9242L19.4673 7.91275C19.4905 7.75287 19.4819 7.58999 19.4422 7.43341C19.4024 7.27684 19.3321 7.12964 19.2354 7.00023C19.1387 6.87083 19.0174 6.76175 18.8785 6.67925C18.7396 6.59675 18.5858 6.54244 18.4259 6.51941C18.3673 6.513 4.73368 6.50841 4.73368 6.50841"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.9479 9.89551H15.4899"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={styles.basket__bottom}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.55786 18.5195C6.62508 18.5166 6.69219 18.5274 6.75515 18.5511C6.81811 18.5748 6.87562 18.6111 6.9242 18.6576C6.97279 18.7042 7.01145 18.7601 7.03787 18.822C7.06428 18.8838 7.0779 18.9504 7.0779 19.0177C7.0779 19.085 7.06428 19.1516 7.03787 19.2135C7.01145 19.2754 6.97279 19.3313 6.9242 19.3778C6.87562 19.4243 6.81811 19.4606 6.75515 19.4843C6.69219 19.5081 6.62508 19.5188 6.55786 19.5159C6.42942 19.5104 6.30808 19.4555 6.21914 19.3627C6.13021 19.2699 6.08057 19.1463 6.08057 19.0177C6.08057 18.8892 6.13021 18.7656 6.21914 18.6727C6.30808 18.5799 6.42942 18.525 6.55786 18.5195Z"
              fill="#272343"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={styles.basket__bottom}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.8988 18.5195C17.0312 18.5195 17.1583 18.5722 17.252 18.6659C17.3457 18.7595 17.3983 18.8866 17.3983 19.0191C17.3983 19.1516 17.3457 19.2787 17.252 19.3724C17.1583 19.4661 17.0312 19.5187 16.8988 19.5187C16.7663 19.5187 16.6392 19.4661 16.5455 19.3724C16.4518 19.2787 16.3992 19.1516 16.3992 19.0191C16.3992 18.8866 16.4518 18.7595 16.5455 18.6659C16.6392 18.5722 16.7663 18.5195 16.8988 18.5195Z"
              fill="#272343"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={styles.title}>Cart</div>
          <div className={styles.count}>2</div>
        </div>
      </div>
    </Link>
  );
};

export default ToCart;
