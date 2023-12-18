import '../style/men.scss';

import photo6 from '../images/men/10.png';
import photo7 from '../images/men/11.png';
import photo8 from '../images/men/12.png';
import photo9 from '../images/men/13.png';

import { Product } from './Product';

const men = [
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

export const Men = () => {
  return (
    <section className="men">
      <h1 className="men__title">MEN’S FASHION</h1>
      <p className="men__description">Shop our new arrivals from established brands</p>
      <ul className="men__list">
        {men.map(product =>
          <Product product={product} />
        )}
      </ul>
    </section>
  )
};
