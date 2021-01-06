import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';

class ContactPage extends React.Component{
    constructor(props){
super(props);
    this.state={
        name:'',
        email:'',
        mesg:'',
        disabled:false,
        emailSent:null,
    }
}
 
handleChange = (event) =>{
    const target= event.target;
    const value= target.type === 'checkbox' ? target.checked : target.value;
    const name=target.name;
    this.setState({
        [name]:value
    })
};

handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
        disabled:true
    });
    emailjs.sendForm('service_zx5ig2e', 'template_xwp90ef', event.target, 'user_LUpNXJ2ITFbHnvX2EWrnF')
    .then((result) => {
        console.log(result.text);
        this.setState({
            emailSent:true
        })
    }, (error) => {
        console.log(error.text);
        this.setState({
            emailSent:false
        })
    });
    event.target.reset()
}


    render(){
    return(
<div data-aos="fade-down"  className='contact'>
    <h1 >Lets get in touch.</h1><br />
    <form autocomplete='off' onSubmit={this.handleSubmit}>
        <div className='centering'>
        <div className='user-input-wrp'>
            <br />
  <input type="text" placeholder=' ' className="input" name="name" value={this.state.name} onChange={this.handleChange} required/>
  <span className='floating-label'>Name</span>
  </div>
  <div className='user-input-wrp'>
      <br />
  <input type='email' id='second' className="input" name="email" placeholder=' ' value={this.state.email} onChange={this.handleChange} required />
  <span className='floating-label' >Email</span>
  </div>
  </div>
  <label for="box" id="label">Message:</label><br />
         <textarea rows = "7" cols = "60" name = "mesg" className="feedback" as='textarea' value={this.state.mesg} onChange={this.handleChange}></textarea>
            <br />
         <button type="submit" disabled={this.state.disabled} value = "submit" className="subBut">Submit</button>
         {this.state.emailSent === true && <p className='d-inline success-msg' >Email sent!</p>}
         {this.state.emailSent === false && <p className='d-inline fail-msg' >Email not sent.</p>}
      </form>
      <div  className='info'>
<p>michaeldegennaro58@yahoo.com</p>
<p className='numb'>732-575-8751</p>
      </div>
</div>
    );
    }
}
export default ContactPage