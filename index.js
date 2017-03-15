//
// This implements most of the app code and implements code that sets up 
// event handling for when the 'link_shared' event is activated.
//

'use strict';

const ts = require('./tinyspeck.js');
const axios = require('axios');
const datastore = require('./datastore.js').data;

let connected = false;
getConnected() // Check we have a database connection
  .then(function(){
    let slack = ts.instance({});

    // listen for a url to be shared in a message
    slack.on('link_shared', payload => {  
      console.log('link_shared', payload);
      datastore.get(payload.team_id) // Grab the team's token
        .then(function(value){
          let unfurlBot = slack.instance({ token: value })            

          // we are going to collect unfurl objects to send, project names to prevent duplicates,
          // and promises to make sure we don't send messages to slack before glitch api calls 
          // are responded to
          const unfurls = {};

          // for each even url in the payload, we're going to add an object
          // used by slack to message back the unfurled link to the `unfurls` object
          payload.event.links.forEach((link, i) => {

            // generate the items of the unfurl message and add that object to `unfurls`
            const title = 'PLS LIKE + SUBSCRIBE';
            const image_url = 'https://cdn.glitch.com/efc7f788-41d4-4404-bcb5-2dbc8e412bca%2Fgiphy.gif?1489608107890'
            const fallback = link.url.substr(link.url.indexOf(':') + 3);
            const color = '#00ffff';

            unfurls[link.url] = {
              title,
              image_url,
              fallback,
              color,
            };
          });

          // generate and send to slack the unfurls
          const unfurlMessage = {
            channel: payload.event.channel,
            ts: payload.event.message_ts,
            unfurls: JSON.stringify(unfurls),
          }
          
          // finally, we send slack the unfurlMessage by calling the chat.unfurl endpoint
          // with unfurlMessage as the argument. 
          unfurlBot.send('chat.unfurl', unfurlMessage).then(res => { 
            console.log('Response sent from unfurl', res.data);
          }, reason => { 
            // on failure
            console.log('An error occurred when responding to unfurl: ' + reason);
          }); 
        });
     });
    // incoming http requests
    slack.listen('3000');

});

function getConnected() {
  return new Promise(function (resolving) {
    if(!connected){
      connected = datastore.connect().then(function(){
        resolving();
      });
    } else {
      resolving();
    }
  });
}