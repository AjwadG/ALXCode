document.addEventListener('DOMContentLoaded', function () {
  const ws = new WebSocket('ws://localhost:3000/ws');

  const commandInput = document.querySelector(".comand");
  const container = document.querySelector(".container");
  const sendCommandButton = document.querySelector(".send");


  ws.onopen = function () {
      appendOutput('Connected to the server.\n');
  };

  ws.onmessage = function (event) {
      appendOutput(event.data);
  };

  ws.onclose = function () {
      appendOutput('Connection closed.\n');
  };

  ws.onerror = function (error) {
      appendOutput('Error: ' + error.message + '\n');
  };

  commandInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) sendCommand();
  });

  sendCommandButton.addEventListener('click', sendCommand);

  function sendCommand() {
      const command = commandInput.value.trim();
      if (command !== '') {
          ws.send(command);
          appendOutput(`$ ${command}\n`);
          commandInput.value = '';
      }
  }

  function appendOutput(message) {
    const node = document.createElement("pre");
    node.innerHTML = message;
    node.classList.add("output");
    container.appendChild(node);
    container.scrollTop = container.scrollHeight;
  }
});
