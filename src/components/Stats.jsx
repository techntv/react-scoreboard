import React from 'react';

class Stats extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }   
   
    render(){
        let totalPoint = this.props.players.reduce(function(sum, item){
            return sum + item.score;
        },0);
        return (
             <table className="stats">
                 <tbody>
                     <tr>
                         <td>Players:</td>
                         <td>{this.props.players.length}</td>
                     </tr>
                     <tr>
                         <td>Total Points:</td>
                         <td>{totalPoint}</td>
                     </tr>
                 </tbody>
             </table>
        )
    }
}

export default Stats