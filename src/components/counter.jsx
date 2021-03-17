import React, { Component} from 'react';

class Counter extends Component {

    newBedgeClasses() {
        let clases = 'badge m-2 badge-';
        clases += this.props.counter.value === 0 ? 'warning' : 'primary';
        return clases;
    }
    formatCount(){
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }

    render() {
        return ( <div className="row" > 
        <div className="col-1">
        <span className={this.newBedgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm ">+</button> 
       <button onClick={()=>{this.props.onDecrement(this.props.counter)}}className="btn btn-secondary btn-sm m-2"
       disabled={this.props.counter.value===0 ? 'disabled' : ''}
       >-</button>
       <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm '>x</button>
        </div>
       
       
       <br></br>
        </div>);
    }

}
export default Counter;

/*
const Counter =()=> {
   const [count , setcount]= useState('Avi') ;
  

 

     
        return ( <>  
   <h1>{count}</h1>
   <button onClick={()=>setcount('Avinash Sharma')}>Click me</button>
       <br></br>
        </>);
    

}
*/
/*
const Counter =()=> {
    const [count , setcount]= useState(0) ; 
    
    const HandleClick=()=>{
     
        setcount(count+1);
    }

    const onClick=()=>{
        setcount(count-1);
    }
    
         return ( <>  
    <h1>{count}</h1>
    <button onClick={()=>HandleClick()}>Click me</button>
    <button onClick={()=>onClick()}>Delete</button>
        <br></br>
         </>);
     
 
 }
*/
//export default Counter;
