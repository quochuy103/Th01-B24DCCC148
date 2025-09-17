import React, { useState } from "react";
function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        margin: "10px",
        border: "1px solid #000",
      }}
    ></div>
  );
}
function Bai2() {
  const [color, setColor] = useState("white");
  return (
    <div>
      <h3>Chọn màu</h3>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <ColorBox color={color} />
    </div>
  );
}
export default Bai2;
