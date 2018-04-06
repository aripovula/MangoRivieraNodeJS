var socket = io();

       
socket.on('connect', function() {
  console.log('Connected to server at ');  
});

socket.on('disconnect', function() {
  console.log('Disconnected to server');
});

socket.on('newMessage',function(message){

  
  console.log("it works: "+message.text);

  var html = `<p>${message.from}: ${message.text}</p>`;
  jQuery('#messages').append(html);
  jQuery('[name=message]').val('');
});


jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
  
  // Do somethin g else
  var createdAt = moment().format('h:mm a');
    var messageTextbox = jQuery('[name=message]');
  console.log(createdAt);
  socket.emit('createMessage', 
  {
    from:'USER', 
    text:jQuery('[name=message]').val(),
    createdAt: createdAt
  }, 
  function(data){
    console.log('Got it', data);
  });
});

