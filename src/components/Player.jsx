import React from 'react';
import Counter from './Counter.jsx';


class Player extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="player">
                        <div className="player-name">
                            {this.props.name}
                        </div>

                        <div className="player-score">
                            <Counter score={this.props.score}
                                     changeScore={this.props.onChangeScore}/>
                        </div>
            </div>
        )
    }
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired    
}

export default Player