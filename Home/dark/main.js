const message = document.getElementById('message');
const messageText = message.textContent;

function deleteMessage() {
    let i = messageText.length;
    const interval = setInterval(() => {
        message.textContent = messageText.slice(0, i);
        i--;
        if (i < 0) {
            clearInterval(interval);
        }
    }, 100); // Minden 100ms-ként töröl egy karaktert
}

deleteMessage();