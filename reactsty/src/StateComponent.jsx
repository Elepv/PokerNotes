import React from "react";

export default class StateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 10,
            flag: true
        }
    }

    increment = () => {
        this.setState({
          count: this.state.count += 1  
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count -= 1
        })
    }

    letChange = () => {
        this.setState({
            flag: this.state.flag = false
        })
    }

    render(){
        let showView = this.state.flag ? "我是孙悟空" : "我是六耳猕猴"

        return(
            <div>
                <h3>组件的State</h3>
                <p>{ this.state.count }</p>
                <button onClick = { this.increment }>增加</button>
                <button onClick = { this.decrement }>减少</button>
                <p>{ showView }</p>
                <button onClick = { this.letChange }>我变</button>
           </div>
        )
    }
}