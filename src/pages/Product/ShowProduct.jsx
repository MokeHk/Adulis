import { useParams } from "react-router-dom";
import ProductCardDetail from "../../components/ProductCardDetail";
import { getProducts, getProduct } from "../../FakeData/TestData";

export default function ShowProduct({ match }) {
  const products = getProducts();
  const product = getProduct;
  const params = useParams();
  const targetProduct = Number(params.id);
  return (
    <div>
      <ProductCardDetail
        key={products.id}
        {...product(targetProduct)}
      ></ProductCardDetail>
    </div>
  );
}
