import age from "./data";
import Hello from "./hello";

export default function Cart() {
  return (
    <div>
      <Hello />
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

const CartItem = () => {
  return (
    <div className="cart-item">
      <p>상품명 {age}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};
