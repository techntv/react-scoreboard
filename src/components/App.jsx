import React from 'react';
import Header from './Header.jsx';
import Player from './Player.jsx';
import dataplayer from '../API/data.js';
import AddPlayerForm from './AddPlayerForm.jsx';
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            players : dataplayer
        }
    }
    onChangeScore(index,data){
        console.log('Change',index,data);
        this.state.players[index].score += data;
        this.setState(this.state);
    }
    render(){
        return(
            <div className="application">
               <Header title={this.props.title} players={this.state.players}/>

               <div className="players">
                {
                    this.state.players.map((item,index) => {
                       return <Player key={item.id} 
                                      {...item}
                                      onChangeScore={data => this.onChangeScore(index,data)}/>
                    })
                }
                </div>    
                <AddPlayerForm />
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string
}

export default App