import Layout from  '../components/layout';
import React, {Component} from 'react';
import ReCaptcha from "react-google-recaptcha";
import FormGroup from '../components/formGroup';
import CallToAction from '../components/CallToAction';
import fetch from "node-fetch";

export default class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "",
      organization: "",
      emailInvalid: false,
      displayInvalidMessage: false,
      displayEmptyMessage: false,
      displaySuccessMessage: false,
      displayErrorMessage: false,
      recaptchaScore: "",
    };

    this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onOrgChange = this.onOrgChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.displayEmailInvalid = this.displayEmailInvalid.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    let emailInvalid = e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null;
    this.setState({ emailInvalid: emailInvalid}); 
  }

  displayEmailInvalid() {
    if (this.state.emailInvalid) {
      this.setState({displayInvalidMessage: true})
    } else {
      this.setState({displayInvalidMessage: false})
    }
  }

  onRecaptchaChange(e) {
    this.setState({recaptchaScore: e});
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onOrgChange(e) {
    this.setState({ organization: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value })
  }

  async submitHandler(e) {
    e.preventDefault();
    
    if (!(this.state.email == '' || this.state.name == '' || this.state.message == '' || this.state.emailInvalid || this.state.organization == "")) {
      this.setState({ displayEmptyMessage: false });
      let response = await fetch('https://mailer.almadireddy.now.sh', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          message: this.state.message,
          organization: this.state.organization,
          recaptchaScore: this.state.recaptchaScore,
        })
      });
      if (response.status == 200) {
        this.setState({displaySuccessMessage: true});

        this.setState({
          email: "",
          name: "",
          message: "",
          whom: "",
          where: "",
          emailInvalid: false,
          displayInvalidMessage: false,
          displayEmptyMessage: false,
          recaptchaScore: ""
        });
      } else {
        this.setState({displayErrorMessage: true})
      }
      grecaptcha.reset();
    }
    else 
      this.setState({displayEmptyMessage: true});
  }

  render() {
    return (
      <Layout title='Connect'>
        <div className="hero">
          <h1 className="title">Connect</h1>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <h2>Connect with us at contact@ligature.design</h2>
            <p>We'd love to get started making your next idea a reality!</p>
            <form ref={this.recaptchaRef} onSubmit={this.submitHandler}>
              <FormGroup>
                <label htmlFor='nameBox'>Your Name</label>
                <input id='nameBox' onChange={this.onNameChange}></input>
              </FormGroup>
              <FormGroup>
                <label htmlFor='emailBox'>Your Email</label>
                <input id='emailBox' onChange={this.onEmailChange}></input>
              </FormGroup>
              <FormGroup>
                <label htmlFor='orgbox'>Company Name</label>
                <input id='orgbox' onChange={this.onOrgChange}></input>
              </FormGroup>
              <FormGroup>
                <label htmlFor='messageBox'>Message</label>
                <input id='messageBox' onChange={this.onMessageChange}></input>
              </FormGroup>

              <ReCaptcha
                size='normal'   
                sitekey="6Lcvd5kUAAAAAPX2tL26dedSCt8pG-99r_U-B6bs"
                onChange={this.onRecaptchaChange}
              />
              <CallToAction className='submit-button'>Submit</CallToAction>
            </form>
          </div>
        </div>
      </Layout>
    );
  };
}