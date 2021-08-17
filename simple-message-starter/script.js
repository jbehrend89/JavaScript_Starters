window.onload = function () {
    //console.log("I have loaded!")
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};

function showMessage() {
    //console.log("I am the show message function!")
    let message = document.getElementById("message-text").value;
    let author = document.getElementById("author-text").value;
    //console.log(message);
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = message + " - " + author;
}