import React from 'react';
import Header from './Header.jsx';
import Player from './Player.jsx';
import dataplayer from '../API/data.js';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            players : dataplayer
        }
    }
    render(){
        return(
            <div className="application">
               <Header title={this.props.title}/>

               <div className="players">
                {
                    this.state.players.map(item => {
                       return <Player {...item}/>
                    })
                }
                </div>    
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string
}

export default App