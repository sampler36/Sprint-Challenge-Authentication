import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(){
       super(); 
         this.state = {
             username: '',
             password: ''
         }
     }
     render(){
         return(
             <div>
                 <form>
                     <p>Username</p>
                     <input type="text" name="username" onChange={this.handleChange} value={this.state.username} ></input>
                     <p>Password</p>
                     <input type="text" name="password" onChange={this.handleChange} value={this.state.password} ></input>
                 </form>
             </div>
         )
     }
    }






export default Login;