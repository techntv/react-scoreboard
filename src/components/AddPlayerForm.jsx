import React from 'react';

class AddPlayerForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            score: this.props.score
        }
    } 
    onSubmit(event){
        event.preventDefault();
        let player = this.refs.player.value;
        console.log(player);
    } 
    render(){
        return (
             <div className="add-player-form">
              <form onSubmit={this.onSubmit.bind(this)}>
                  <input type="text" ref='player'/>
                  <input type="submit" value="Add Player"/>
              </form>
            </div>
        )
    }
}

export default AddPlayerForm