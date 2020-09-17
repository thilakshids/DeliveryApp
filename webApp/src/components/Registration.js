import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';

class Registration extends Component{
  render(){
    return(
      <div>

       <h2>Select who you are.....</h2>
       
                 <center> 
                          <h4>I am a Customer</h4><Button variant="danger">Click me</Button>
                          <h4>I am a Shop</h4> <Button variant="danger">Click me</Button>
                          <h4>I am a Delivery Person</h4>  <Button variant="danger">Click me</Button>
                          </center>
      </div>
    )
  }

}
export default Registration;