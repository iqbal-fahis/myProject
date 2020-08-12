import React from 'react'; 
import './index.css';
class Parent extends React.Component{ 
    constructor(props){
        super(props)
    }
    render(){ 
        return( 
                <div> 
                <center>
                 <label>{this.props.label}</label>   
                 <input className="field"  type={this.props.type} name={this.props.name}required /> <br/><br/>
                </center>
                </div> 
            ); 
    } 
} 
export default Parent;