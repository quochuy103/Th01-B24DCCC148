import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Bạn đã bấm số lần là {count} </h1>
      <button onClick={() => setCount(count + 1)}>Bấm đi</button>
    </div>
  );
}
export default Counter;
