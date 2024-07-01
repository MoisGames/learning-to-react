import React, { useState } from "react";
import "./styles/app.css";
import PostList from "./components/PostList";

function App() {
  const [post, setPost] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description 2" },
    { id: 3, title: "Javascript 3", body: "Description 3" },
  ])
  const [post2, setPost2] = useState([
    { id: 1, title: "Python", body: "Description" },
    { id: 2, title: "Python 2", body: "Description 2" },
    { id: 3, title: "Python 3", body: "Description 3" },
  ]);

  return (
    <div className="App">
    <PostList post = {post} title="Посты про JS"/>
    <PostList post = {post2} title="Посты про Python"/>

    </div>
  );
}

export default App;
