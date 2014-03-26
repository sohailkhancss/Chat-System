//= require websocket_rails/main

var chat = function(url,useWebsocket){
  this.dispatcher = new WebsocketRails(url,useWebsocket);
  function events(){
    $("button").on('click', sendMessage);
    this.dispatcher.bind('after_send_message', afterSendMessage);
  }

  function sendMessage(){
    this.dispatcher('send_message', { body: 'hogehoge' });
  }

  function receiveMessage(message){
    console.log(message);
  }
  
  //function afterSendMessage(){
  //  ;
  //}
}
var current_chat = chat('http://localhost:3000', true);
