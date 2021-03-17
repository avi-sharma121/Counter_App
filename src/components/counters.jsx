import React, { Component } from 'react';
import Counter from './counter';
class Counters
 extends Component {
       render() {  
           const {onDelete,onIncreament,onReset,onDecrement}= this.props;
        return ( 
        <div>
           <button className="btn btn-primary btn-sm m-2" onClick={onReset} >Reset</button>
           <br></br>
           {this.props.counters.map(counter => 
           <Counter key={counter.id} 
           onDelete={onDelete} 
           onDecrement={onDecrement}
           counter={counter} 
           onIncrement={onIncreament}/>)}
        </div> ); 
    }
}
 
export default Counters;
