import React from 'react';
import Stats from './Stats.jsx';
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return (
            <div className="header">
                <Stats players={this.props.players}/>
                    <h1>{this.props.title}</h1>
               </div>
        )
    }
}

export default Header