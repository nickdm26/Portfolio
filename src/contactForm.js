import React, { Component } from 'react';
import firebase from 'firebase/app';
import Axios from 'axios';

//const data = { email, message };

class contactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({ [name]: val });

        console.log(name);
        console.log(val);
    }

    handleSubmit = event => {
        event.preventDefault();
        var time = new Date();
        var name = this.state.name;
        var email = this.state.email;
        var subject = this.state.subject;
        var message = this.state.message;

        console.log(email);
        console.log(message);


        const data = { email, subject, message, name, time: time.getTime() };

        Axios.post('https://us-central1-nick-portfolio-5c33a.cloudfunctions.net/submit', data).catch(error => {
            console.log(error);
        });
    }


    render() {
        return (
            <>
                <div className="container" id="Contact">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <h2>Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <form id="contact-form" className="form" role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Your Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="Your name" tabIndex="1" value={this.state.name} onChange={this.myChangeHandler} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Your Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" tabIndex="2" value={this.state.email} onChange={this.myChangeHandler} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">Subject</label>
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" tabIndex="3" value={this.state.subject} onChange={this.myChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea rows="5" cols="50" name="message" className="form-control" id="message" placeholder="Hi Nick..." tabIndex="4" value={this.state.message} onChange={this.myChangeHandler} required>
                                </textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" value="submit" className="btn btn-start-order">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default contactForm;