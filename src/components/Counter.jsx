import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            score: this.props.score
        }
    }
    incrementScore(){
        this.props.changeScore(1);
    }

    decrementScore(){
        this.props.changeScore(-1);
    }
    render(){
        return (
             <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
                <div className="counter-score">{this.props.score}</div>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
            </div>
        )
    }
}

export default Counter