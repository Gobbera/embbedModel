let chatButton = document.getElementById('chat-button');
let closeButton = document.getElementById('close-button');
let embbedChat = document.getElementById('embbed-chat');

chatButton.hidden = false;
closeButton.hidden = true;
embbedChat.hidden = true;

chatButton.onclick = function () {
  openChat();
}
closeButton.onclick = function () {
  openChat();
}

function openChat() {
  if (embbedChat.hidden == true) {
    embbedChat.classList.add('openBox');
    embbedChat.classList.remove('closeBox');
    embbedChat.hidden = false;
    closeButton.hidden = false;
    chatButton.hidden = true;
  } else {
    embbedChat.classList.add('closeBox');
    embbedChat.classList.remove('openBox');
    setTimeout(function () {
      embbedChat.hidden = true;
      closeButton.hidden = true;
      chatButton.hidden = false;
    }, 900);
  }
}

