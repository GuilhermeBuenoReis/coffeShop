import { Header } from "./Header";
import styles from './Home.module.css';
import coffe from '../assets/coffe.jpg';
import { ShoppingCart } from 'lucide-react';

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <aside className={styles.content}>
          <h1>
            Come enjoy the best <span>coffe</span> to start your day off right
          </h1>
          <p>
            Boost your productivity with the best coffee on the market
          </p>

          <div className={styles.containerButtons}>
            <button className={styles.buttonCart}>
              Order Now
              <ShoppingCart />
            </button>
            <button className={styles.button}>
              More menu
            </button>
          </div>
        </aside>
        <aside className={styles.imageContent}>
          <img src={coffe} alt="coffe" />
        </aside>
      </main>
    </>
  );
}