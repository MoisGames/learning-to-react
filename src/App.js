import React, { useState } from 'react';

function App() {
  const [likes, setLikes] = useState (999)
  const [value, setValue] = useState ('Текст в инпуте')
  return (
    <>
       <h1>Total Likes : {likes}</h1>
       <h1>{value}</h1>
       <input type='text'
              value={value}
              onChange={event => setValue(event.target.value)}>
                
              </input>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Dicrement</button>
    </>
  );
}

export default App;
