// 
// const express = require('express');
// const fs = require('fs'); // previous example
// const shell = require('shelljs'); // previous example
const nodemailer = require('nodemailer');


function sendMail (){
// TODO
// make a request to your app's backend
//     grab all users
//     save users to an array
// loop over array
//     for each user construct new email & send to them

// Create mail transporter.
let transporter = nodemailer.createTransport({
    // host: 'hotmail.com',
    // port:  465,
    service: "hotmail",
    // secure: true,
    auth: {
        user: "(enter sender email)",
        pass: "(enter sender password)"
    }
  });
  
//   app.listen(3000);
  // ...

// Sending emails every Wednesday.
// cron.schedule('0 0 * * 3', function() {
//     console.log('---------------------');
//     console.log('Running Cron Job');
  
    let messageOptions = {
      from: '(sender email)',
      to: '(recipient)',
      subject: 'Scheduled Email',
      text: "Hello ${username},You have selected a reminder for every ${time.frame} to notify you follow up on your career path with ${job.name}. Please sign into your account here ${jobify.link} to get more details. Good luck to you!Sincerely,Your Jobify Team"
    };
  
    transporter.sendMail(messageOptions, function(error, info) {
      if (error) {
        throw error;
      } else {
        console.log('Email successfully sent!');
      }
    });

//   });
}
//   app.listen(3000);
export default{sendMail};