import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Link, NavLink} from "react-router-dom"
import Data from "./dataJson.json";
class UserFirst extends Component{
    constructor(){
        super();{

        }
    }
    render(){ debugger;
        return(
            <div className="Login">
                <form>
                <label htmlFor="lastRecharge">Last Recharge  :</label>
                {Data.map(post =>{
                    if(post.id=="1"){
                   return( <p>{post.lastRecharge}</p>)
                    }
                })}
                <label htmlFor="lastCallDuration">Last Call Duration  :</label>
                {Data.map(post =>{
                     if(post.id=="1"){
                   return( <p>{post.lastCallDuration}</p>)
                     }
                })}
                <label htmlFor="lastCalledNumber">Last Called Number  :</label>
                {Data.map(post =>{
                     if(post.id=="1"){
                   return( <p>{post.lastCalledNumber}</p>)
                     }
                })}

                </form>

            </div>
        )

    }
}
export default UserFirst;