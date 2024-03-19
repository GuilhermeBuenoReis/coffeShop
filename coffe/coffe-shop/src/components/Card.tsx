import styles from '../styles/Card.module.css';
import vanillaLatte from '../assets/unsplash_RFHFV7lVQBY.jpg';
import expresso from '../assets/espresso.jpg';
import hezelnutLatte from '../assets/hazelnut latte.jpg';
import { ShoppingCart } from 'lucide-react';

interface Coffee {
  id: string;
  name: string;
  assessment: number;
  price: number;
  img: string;
}


export function Card() {

  const morePopular: Coffee[] = [
    { id: 'dnm1idn1nd0n', name: 'Vanilla Latte', assessment: 4.8, price: 15, img: vanillaLatte },
    { id: 'asdj9uasnds1', name: 'Espresso', assessment: 4.8, price: 21, img: expresso },
    { id: 'dnm1idn1nd0n', name: 'Hazelnut Latte', assessment: 4.8, price: 24, img: hezelnutLatte },
  ];


  return (
    <>
      <div className={styles.container}>
        {
          morePopular.map(item => (
            <div className={styles.card}>
              <img src={item.img} alt="image" className={styles.imgCoffe} />
              <div className={styles.informationProduct}>
                <div className={styles.titlePrice}>
                  <h3 className={styles.title}>{item.name}</h3>
                  <p className={styles.price}>R${item.price}</p>
                </div>
                <div className={styles.priceAssessment}>
                  <p className={styles.note}>{item.assessment}
                    <span className={styles.star}>
                      &#9733;
                    </span>
                  </p>
                  <ShoppingCart className={styles.cart} />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}