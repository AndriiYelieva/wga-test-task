import '../style/product.scss';
import { ProductType } from "../Type/Product";

type Props = {
  product: ProductType;
}

export const Product: React.FC<Props> = ({ product }) => {

  return (
    <li className="product" key={product.photo}>
      <img
        className="product__photo"
        src={product.photo}
        alt={product.name}
      />
      <h2 className="product__title">{product.name}</h2>
      <h2 className="product__description">{product.descriptions}</h2>
      <div className="product__price">
        <p className="product__fullPrice">{`$${product.price}.00`}</p>
        <p className="product__discount">{`$${product.discount}.00`}</p>
      </div>
    </li>
  )
}