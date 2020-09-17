import React,{Component} from 'react';
import { Button, Form, FormGroup,Label, Input } from 'reactstrap';


import { FacebookLoginButton } from "react-social-login-buttons";


 class LogIn extends Component{

    render(){
        return(

            <body>
                <div className="Login">
            <form className="LoginForm">
        
            <h1>         
              <span className="header"><center> LogIn </center></span>
            </h1>
    
            <FormGroup>
              <label>Email</label>
              <input type="email" placeholder="Email" size="24" />
            </FormGroup>
    
            <FormGroup>
              <label>Password</label>
              <input type="Password" placeholder="Password" size="24" />
            </FormGroup>
    
            <button className="btn-lg btn-dark btn-block">
              Log in
            </button>
    
            <div className="text-center">
              or continue with your social account
            </div>
    
            <FacebookLoginButton className="text-center" />
    
            <div className="text-center">
               <a href="/sign-up">Sign up</a>
               <span> | </span>
               <a href="/Forgot-Password">Forgot Password</a>
            </div>
    
          </form>
          </div>
          </body>
        );
    }
}
export default LogIn;