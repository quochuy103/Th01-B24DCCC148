import React, { useState } from "react";

function Bai3() {
  const Products = [
    { id: 1, name: "Sách", price: 1000 },
    { id: 2, name: "Bút", price: 5000 },
    { id: 3, name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const Total = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h4>Danh sách sản phẩm</h4>
      <ul>
        {Products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} đ
            <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>
      <hr />
      <h4>Giỏ hàng</h4>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} đ
            </li>
          ))}
        </ul>
      )}
      <p>Tổng tiền: {Total} đ</p>
    </div>
  );
}

export default Bai3;
