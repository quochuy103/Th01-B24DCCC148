import React, { useState } from "react";

function Bai1() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const handleAdd = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };
  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={handleAdd}>Thêm</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Bai1;
