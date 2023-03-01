const chatButton = document.getElementById('chat-button');
let closeButton = document.getElementById('close-button');
let embbedChat = document.getElementById('embbed-chat');

closeButton.hidden = true;
embbedChat.hidden = true;

chatButton.onclick = function () {
  openChat();
}
closeButton.onclick = function() {
  openChat();
}

function openChat() {
    if (embbedChat.hidden == true) {
      embbedChat.hidden = false;
      closeButton.hidden = false;
    } else {
      embbedChat.hidden = true;
      closeButton.hidden = true;
    }
}

