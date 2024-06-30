import React, { useState } from "react";
import Counter from "./components/Counter";
import Twocat from "./components/TwoCat";
import Bear from "./components/Bear";
import ClassCounter from "./components/ClassCounter";
import "./styles/app.css";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
    <PostItem post = {{id: 1, title: 'Javascript', body: 'Description'}}/>
    <PostItem post = {{id: 2, title: 'Javascript', body: 'Description'}}/>
    <PostItem post = {{id: 3, title: 'Javascript', body: 'Description'}}/>
    <PostItem post = {{id: 4, title: 'Javascript', body: 'Description'}}/>
    <PostItem post = {{id: 5, title: 'Javascript', body: 'Description'}}/>
    </div>
  );
}

export default App;
