
let embbedChat = document.getElementById('embbed-chat');

const chatButton = document.getElementById('chat-button');

embbedChat.hidden = true;

chatButton.onclick = function() {
  if (embbedChat.hidden == true) {
    embbedChat.hidden = false;
  } else {
    embbedChat.hidden = true;
  }
}