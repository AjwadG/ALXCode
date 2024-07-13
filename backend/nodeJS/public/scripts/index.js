const socket = io();

const container = document.querySelector(".container");

document.querySelector(".send").addEventListener("click", sendCommand);
document.querySelector(".comand").addEventListener("keyup", (event) => {
  if (event.keyCode === 13) sendCommand();
});

function sendCommand() {
  const comand = document.querySelector(".comand").value;
  if (comand === "") return;
  document.querySelector(".comand").value = "";
  socket.emit("comand", comand, (output) => {
    const node = document.createElement("pre");
    node.innerHTML = output;
    node.classList.add("output");
    container.appendChild(node);
  });
}
