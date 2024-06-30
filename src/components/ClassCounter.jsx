import React from "react";

class ClassCounter extends React.Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
        this.addBear = this.addBear.bind (this)
        this.substructBear = this.substructBear.bind(this)
    }

    addBear () {
        this.setState({count: this.state.count += 1})
    }
    substructBear () {
        this.setState({count: this.state.count -= 1})

    }

    render() {
        return (
            <div>
            <h1>
                Сколько литров пива ты выпил сегодня?! {this.state.count} Л.
            </h1>
            <button onClick={this.addBear}>Добавить литр</button>
            <button onClick={this.substructBear}>Убрать литр</button>

        </div>
        )
        }
    }

    export default ClassCounter