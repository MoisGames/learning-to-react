import React, { useState } from "react";
import Counter from "./components/Counter";
import Twocat from "./components/TwoCat";
import Bear from "./components/Bear";
import ClassCounter from "./components/ClassCounter";
import "./styles/app.css";
import PostItem from "./components/PostItem";

function App() {
  const [post, setPost] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description 2" },
    { id: 3, title: "Javascript 3", body: "Description 3" },
  ]);

  return (
    <div className="App">
      <h1>Список постов</h1>
      {post.map(post=> 
        <PostItem post = {post} key = {post.id}/>
      )}
    </div>
  );
}

export default App;
