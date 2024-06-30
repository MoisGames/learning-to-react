import React, { useState } from "react";

const Bear = () => {
    const [bear, setBear] = useState (0)
    function addBear () {
        setBear (bear + 1)
    }
    function substructBear () {
        setBear (bear - 1)
    }
    return (
        <div>
            <h1>
                Сколько литров пива ты выпил сегодня?! {bear} Л.
            </h1>
            <button onClick={addBear}>Добавить литр</button>
            <button onClick={substructBear}>Убрать литр</button>

        </div>
    )
}

export default Bear