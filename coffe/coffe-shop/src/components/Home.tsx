import { Header } from "./Header";
import styles from '../styles/Home.module.css';
import coffe from '../assets/img-hero.png';
import { ShoppingCart } from 'lucide-react';
import { Card } from './Card';


export function Home() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
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
              <button className={styles.btn_menu}>
                More menu
              </button>
            </div>
          </aside>
          <aside className={styles.imageContent}>
            <img src={coffe} alt="coffe" className={styles.img_coffe} />
          </aside>


        </main>
        <Card />

        <footer>
          <aside>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ad cumque ratione nisi. Tenetur, nam nostrum! Magni quod cum quasi molestias eaque tenetur atque magnam vel? Quo laudantium odit provident.
              Cumque aut repellendus sint unde vero nulla totam officiis, recusandae, modi quaerat voluptates, doloremque magni culpa iusto quisquam sit soluta qui quos commodi suscipit eum repellat sapiente! Nostrum, in placeat!
              Praesentium eveniet iste eaque dolore pariatur non repellendus harum ad at tenetur mollitia, facilis voluptatem voluptas, delectus aliquam blanditiis assumenda minima ullam soluta nostrum et quidem amet doloremque nulla. Asperiores!
            </p>
          </aside>
          <aside>
          
          </aside>
        </footer>
      </div>
    </>
  );
}