//Add to public/index.html  this will help add emailjs

{/* <script
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
<script>
   (function(){
      emailjs.init("<YOUR USER ID>"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
   })();
</script> */}

//the code for react email form components to be put on the src/Form.js

import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit() {
  }
}

//add a handleSubmit() function to our component to call sendFeedback () function that will as a result, trigger email sending via Email.JS
handleSubmit (event) {
	const templateId = 'template_id';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
//Backend and connecting 3rd parties

// ExpressServer  INSIDE server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


//setting proxy  in package json add

"proxy": "http://localhost:5000/"

//Calling Express backend from React IN CLIENT/SRC  App.js

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;

//React-html-email

import React from 'react';
import { Email, Item, A} from 'react-html-email';
export default function InlineLink({name, children}) {
  return (
  <Email title='link'>
    <Item>
       Hello {name}
       <A style={{ paddingLeft: 10 }}  href='/blog/'>Click me!</A>
    </Item>
    <Item>
      {children}
    </Item>
  </Email>
)};
//add the above code to a file in your client project to src directory and call it Email.js.  Don't forget to add react-htni-email component to your project.   
//tHEN IMPORT THIS component client/src/Form.js and renderEmail



//with Nodemailer 
handleSubmit(event){

    const messageHtml =  renderEmail(
      <MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>
    );
    
            axios({
                method: "POST",
                url:"http://localhost:3000/send",
                data: {
              name: this.state.name,
              email: this.state.email,
              messageHtml: messageHtml
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Email sent, awesome!");
                    this.resetForm()
                }else if(response.data.msg === 'fail'){
                    alert("Oops, something went wrong. Try again")
                }
            })
        }

        //ADD AXIOS TO YOUR CLIENT APPLICATION IN EXPRESS+REACT+EXAMPLE/CLIENT RU:
        //npm install axios --save

        //import axios from 'axios';
        resetForm(){
            this.setState({feedback: ''})
        }
        //First of all, we need to share our credentials with the SMTP transporter. Add the following code to your server source code which should be called server.js if you followed the Express.js setup instructions:
        const nodemailer = require('nodemailer');
const creds = require('./config');

var transport = {
  host: 'your_host_here', // e.g. smtp.gmail.com
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});
//Once done, we set up the post route to take our emails to its final destination – our inbox!
app.use(express.json()); app.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.messageHtml
  
  
    var mail = {
      from: name,
      to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',
      subject: 'Contact form request',
  
      html: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
// node server.js