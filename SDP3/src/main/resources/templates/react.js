import ReactDOM from 'rect-dom';
import React from 'react';
class Eventbind extends React.Component{
    constructor(){
        super()
        this.state={msg:"Rohit Sharma"}
    }
    clickEvent=()=>{
        this.setState({
            msg:"Hit Man || "
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1> 
                <button onClick={this.clickEvent}>Click</button>
            </div>
        )
    }
}