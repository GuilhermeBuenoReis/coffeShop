import styles from './Header.module.css';
import logo from '../assets/logo.jpg';
import { Search, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <div className={styles.container}>
      <a href="#">
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
        />
      </a>

      <ul className={styles.list}>
        <li className={styles.items}>
          <a href="#" className={styles.links} >About us</a>
        </li>
        <li className={styles.items}>
          <a href="#" className={styles.links}>Our Product</a>
        </li>
        <li className={styles.items}>
          <a href="#" className={styles.links}>Delivery</a>
        </li>
      </ul>

      <div className={styles.search}>
        <a href="#" className={styles.icon}>
          <Search />
        </a>
        <input type="search" className={styles.searchInput} placeholder='Search' />
      </div>

      <a href="#" className={styles.cart}>
        <ShoppingCart />
      </a>

      <button className={styles.buttonCart}>
        Carrinho
      </button>
    </div >
  );
}