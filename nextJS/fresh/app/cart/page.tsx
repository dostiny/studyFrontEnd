"use client";

import age from "./data";
import food0 from "/public/food0.png";
import food1 from "/public/food1.png";
import Btn from "./btn";

interface listType {
  name: string;
  img: any;
}

export default function Cart() {
  let list: listType[] = [
    { name: "Tomatoes", img: food0 },
    { name: "Pasta", img: food1 },
  ];

  return (
    <div>
      <h4 className="title">Cart</h4>
      {list.map((data: listType, i: number) => {
        return <CartItem data={data} />;
      })}
    </div>
  );
}

interface propsData {
  data: listType;
}

interface BtnColor {
  color: string;
}

const CartItem = (data: propsData) => {
  console.log(data);
  return (
    <div className="cart-item">
      <p>{data.data.name}</p>
      <p>$40</p>
      <p>1개</p>
      <Btn color="blue" />
    </div>
  );
};
