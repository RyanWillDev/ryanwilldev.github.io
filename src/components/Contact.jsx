import React from 'react';
import Nav from './Nav';
require('../scss/contact.scss');

class Contact extends React.Component {

  render() {
    const gotchaStyle = {
      display: 'none',
    };

    return (
      <div className="contact-container">
        <h1 id="contact-title">Get in touch.</h1>
        <p id="contact-cta">Want to work on something together? Send me a message.</p>
        <div className="form-container">
          <form action="https://formspree.io/hello@ryanwilldev.com" method="POST">
            <div id="contact-info">
              <input id="name" type="text" name="name" placeholder="Who are you?" required/>
              <input id="replyto" type="email" name="_replyto"
                placeholder="What's your email?" required
              />
            </div>
            <label htmlFor="subject">Tell me what I can do for you:</label>
            <select name="_subject" id="subject" defaultValue="hello">
              <option value="work_lead">Make me a website!</option>
              <option value="project">Let's start a project together.</option>
              <option value="hello">Nothing. Just wanted to say hello.</option>
            </select>
            <textarea id="message" type="textarea" name="message" placeholder="Leave a message." />
            <input type="text" name="_gotcha" style={gotchaStyle}/>
            <button id="submit" type="submit">Send</button>
          </form>
        </div>
        <Nav left="About" right="Projects" />
      </div>
    );
  }
}

export default Contact;
