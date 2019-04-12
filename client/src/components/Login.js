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
     handleChange = e => {
         this.setState({ [e.target.name]: e.target.value })
     }
     handleSubmit = e => {
         e.preventDefault();
         const endpoint = "http://localhost:9900/api/login";
         axios.post(endpoint, this.state)
              .then(res => {
                  localStorage.setItem("jwt", res.data.token)
              })
              .catch(error => console.log(error))
     }
     render(){
         return(
             <div>
                 <form onSubmit={this.handleSubmit}>
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