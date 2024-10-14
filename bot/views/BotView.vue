<template>
  <Header />
  <main class="fundo">
    <div class="container">
      <div class="media">
        <img src="/public/images/IconeEGP.png" class="image" width="45px" alt="...">
        <div class="media-body">
          <h5>Electra</h5>
          <span>ON-LINE</span>
        </div>
      </div>
      <!-- Final media -->
      <div id="chatContainer" class="chatContainer"></div>
      <!-- Final chatContainer -->
      <div class="input">
        <input type="text" class="form-control" id="textBox" />
        <button id="sendBtn" type="button" class="btn btn-primary">Enviar</button>
      </div>
      <!-- Final input -->
    </div>
    <!-- Final container -->
  </main>
  <!-- Final background -->
</template>

<script>
import { arrayOfPossibleMessage } from './responses';

export default {
  mounted() {
    const sendBtn = document.getElementById('sendBtn');
    const textBox = document.getElementById('textBox');
    const chatContainer = document.getElementById('chatContainer');
    let interval = null;

    async function sendMessage(userMessage) {
      let messageElement = document.createElement('div');
      messageElement.classList.add('user-message'); // Adiciona a classe de estilo para a mensagem do usuário
      messageElement.innerHTML = "<span>Distribuidor: </span>" + "<span>" + userMessage + "</span>";
      chatContainer.appendChild(messageElement);
    }

    async function chatBotResponse(userMessage) {
  let chatBotMessage = "";
  
  // Normaliza a mensagem do usuário para remover acentos e transforma em minúsculas
  let normalizedUserMessage = userMessage.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
  // Procura a resposta no array de mensagens normalizando a mensagem também
  let result = arrayOfPossibleMessage.find(val => 
    normalizedUserMessage.includes(val.mensagem.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())
  );
  
  let typingElement = createTypingElement("Electra");
  chatContainer.appendChild(typingElement);
  
  let dots = document.getElementById('dots');
  animateDots(dots);
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  clearInterval(interval);
  chatContainer.removeChild(typingElement);

  if (normalizedUserMessage === "opcoes") {
    escolher(userMessage);
  } else {
    chatBotMessage = result ? result.response : "Desculpe, não entendi o que você quis dizer.";
    displayChatBotMessage(chatBotMessage, result ? "blue" : "red");
  }
}


    function createTypingElement(name) {
      let typingElement = document.createElement('div');
      typingElement.classList.add('typing-element'); // Adiciona a classe de estilo para o "digitando"
      typingElement.innerHTML = `<span>${name}: </span><span id='dots'>Energizando</span>`;
      return typingElement;
    }

    function animateDots(element) {
      let dotCount = 0;
      interval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        element.innerHTML = 'Energizando' + '.'.repeat(dotCount);
      }, 200);
    }

    function displayChatBotMessage(message, color) {
      let messageElement = document.createElement('div');
      messageElement.classList.add('bot-message'); // Adiciona a classe de estilo para a mensagem do bot
      messageElement.style.color = color;
      messageElement.innerHTML = `<span>Electra: </span><span>${message}</span>`;
      chatContainer.appendChild(messageElement);
    }

    function handleSend() {
      let userMessage = textBox.value;
      if (userMessage === "") {
        alert("Por favor, digite uma mensagem!");
      } else {
        let userMessageText = userMessage.trim();
        textBox.value = "";
        sendMessage(userMessageText);
        chatBotResponse(userMessageText);
      }
    }

    sendBtn.addEventListener('click', handleSend);
    textBox.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        handleSend();
      }
    });
  }
};
</script>

<style>
.fundo {
  margin-top: 10px;
  height: 850px;
  margin-bottom: 40px;
}
.media {
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #3c9fd1;
  border-radius: 10px 10px 0px 0px;
}
.media h5 {
  font-size: 30px;
  color: white;
}

.media span {
  font-weight: bolder;
  color: rgb(32, 199, 32);
}

.input {
  display: flex;
  justify-content: end;
}

.input input {
  width: 100%;
  max-width: 700px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
}

.input button {
  width: 100px;
  height: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  background-color: #DB0E69;
  color: white;
  font-weight: bolder;
}

.chatContainer {
  height: 700px;
  margin-bottom: 5px;
  border-radius: 0px 0px 10px 10px;
  background-color: rgb(249, 249, 249);
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.user-message {
  max-width: 100%;
  text-align: right;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  align-self: flex-end;
  font-size: 20px;
}

/* Estilo das mensagens do bot */
.bot-message {
  max-width: 100%;
  text-align: left;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  align-self: flex-start;
  font-size: 20px;
  font-weight: bolder;
}

/* Estilo do elemento de digitação do bot */
.typing-element {
  margin: 10px;
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  color: blue;
  align-self: flex-start;
}

.container {
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(77, 77, 77, 0.378);
  padding: 15px;
  border-radius: 10px;
}
</style>
