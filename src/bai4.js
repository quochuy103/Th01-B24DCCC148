import React, { useState } from "react";

function Post({ text }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>{text}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button
        onClick={() => setDislikes(dislikes + 1)}
        style={{ marginLeft: "10px" }}
      >
        👎 {dislikes}
      </button>
    </div>
  );
}

function Bai4() {
  const posts = [
    "Học ReactJS có khó không?",
    "Props và State là gì?",
    "Lập trình web có vui không?",
  ];

  return (
    <div>
      <h2>Like/Dislike Post</h2>
      {posts.map((post, index) => (
        <Post key={index} text={post} />
      ))}
    </div>
  );
}

export default Bai4;
