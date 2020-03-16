import React, { Component } from 'react';
import C_Sharp_logo from './Images/C_Sharp_logo.svg';
import HTML5_logo from './Images/HTML5_logo.svg';
import CSS3_logo from './Images/CSS3_logo.svg';
import JavaScript_logo from './Images/Unofficial_JavaScript_logo.svg';
import React_logo from './Images/React-logo.svg';
import Git_logo from './Images/Git-logo.svg';
import Python_logo from './Images/Python-logo.svg';
import MySql_logo from './Images/mysql_logo.svg';

class Home extends Component {
    render() {
        return (
            <>
                <div className="HomeContainer">
                    <div id="Intro" className="Section">
                        <h1>Hi, I'm Nick</h1>
                        <h1>Software Developer</h1>
                        <p>Based in Dunedin, New Zealand</p>
                    </div>


                    <div id="AboutMe" className="Section">

                        <h3>About Me</h3>
                        <p className="left">
                            My name's Nick Muldrew. I Love building things; from a young age I've been interested in creating things.
                             Currently I’m looking for a role with a successful company that offers room for progression.
                        </p>
                    </div>
                    <div id="Interests" className="Section">
                        <h3>Interests</h3>
                        <p>Gaming <br />
                            Lifting Weights
                        </p>

                    </div>

                    <div id="ExperiencedWith" className="Section">
                        <h3>Experienced With</h3>

                        <div className="Icons">
                            <div className="icon">
                                <img className="icon" src={C_Sharp_logo} alt="C Sharp Logo" />
                                <span>C Sharp</span>
                            </div>
                            <div className="icon">
                                <img className="icon" src={Python_logo} alt="Python" />
                                <span>Python</span>
                            </div>
                            <div className="icon">
                                <img className="icon" src={MySql_logo} alt="MySql" />
                                <span>MySql</span>
                            </div>
                            <div className="icon">
                                <img className="icon" src={Git_logo} alt="Git" />
                                <span>Git</span>
                            </div>
                            <div className="icon">
                                <img className="icon" src={HTML5_logo} alt="HTML 5" />
                                <span>HTML</span>
                            </div>
                            <div className="icon">
                                <img className="icon" src={CSS3_logo} alt="CSS 3" />
                                <span>CSS</span>
                            </div>
                            <div className="icon">
                                <img className="icon" src={JavaScript_logo} alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div className="icon">
                                <img className="icon" src={React_logo} alt="React" />
                                <span>React</span>
                            </div>

                        </div>
                    </div>

                    <div className="container" id="Contact">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h2>Contact</h2>
                            </div>
                        </div>
                        <div className="row">
                            <form id="contact-form" className="form" action="#" method="POST" role="form">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Your Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your name" tabIndex="1" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Your Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" tabIndex="2" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" tabIndex="3" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea rows="5" cols="50" name="message" className="form-control" id="message" placeholder="Hi Nick..." tabIndex="4" required>
                                    </textarea>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-start-order">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>





            </>
        );
    }

}

export default Home;