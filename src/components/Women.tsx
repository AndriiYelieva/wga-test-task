import '../style/women.scss';

import photo6 from '../images/women/6.png';
import photo7 from '../images/women/7.png';
import photo8 from '../images/women/8.png';
import photo9 from '../images/women/9.png';

import { Product } from './Product';

const women = [
  {
    name: 'IGURE',
    descriptions: 'GREEN MUSCLE FIT POLO SHIRT',
    price: 229.00,
    discount: 129.00,
    photo: photo6,
  },
  {
    name: 'IGURE',
    descriptions: 'GREEN MUSCLE FIT POLO SHIRT',
    price: 229.00,
    discount: 129.00,
    photo: photo7,
  },
  {
    name: 'IGURE',
    descriptions: 'GREEN MUSCLE FIT POLO SHIRT',
    price: 229.00,
    discount: 129.00,
    photo: photo8,
  },
  {
    name: 'IGURE',
    descriptions: 'GREEN MUSCLE FIT POLO SHIRT',
    price: 229.00,
    discount: 129.00,
    photo: photo9,
  },
];

export const Women = () => {
  return (
    <section className="women">
      <h1 className="women__title">WOMEN’S FASHION</h1>
      <p className="women__description">Shop our new arrivals from established brands</p>
      <ul className="women__list">
        {women.map(product =>
          <Product product={product} />
        )}
      </ul>
    </section>
  )
};
