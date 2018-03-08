import React, { Component } from 'react';
import './App.css';
import './custom.css'


class NewContact extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>React Contact Manager</h1>
        </header>
        <form id="contact-form">

    <div className="messages"></div>

    <div className="controls">

        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label name="form_name">First Name *</label>
                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter contact's first name *" required="required" data-error="Firstname is required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label name="form_lastname">Last Name *</label>
                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter contact's last name *" required="required" data-error="Lastname is required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label name="form_email">Email *</label>
                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter contact's email *" required="required" data-error="Valid email is required."/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label name="form_phone">Phone</label>
                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter contact's phone"/>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <input type="submit" className="btn btn-success btn-send" value="Send message"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <p className="text-muted"><strong>*</strong> These fields are required</p>
            </div>
        </div>
    </div>

</form>
      </div>
    );
  }
}

export default NewContact;
