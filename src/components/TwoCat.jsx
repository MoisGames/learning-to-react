import React, { useState } from "react";


const Twocat = () => {
    const [twoCat, setTwoCat] = useState (0) 
    function twoCatPlus () {
        setTwoCat (twoCat + 2)
    }
    function twoCatMinus () {
        setTwoCat (twoCat - 2)
    }
    return (
        <div>
        <h1>
            Сколько котов есть у нас: {twoCat}
        </h1>
        <button onClick={twoCatPlus}>Добавить котов</button>
        <button onClick={twoCatMinus}>Убрать котов</button>
        </div>
    )
}

export default Twocat