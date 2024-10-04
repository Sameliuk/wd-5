document.getElementById('send-btn-1').onclick = () => {
    const messageInput1 = document.getElementById('message-input-1');
    const messageText1 = messageInput1.value.trim();

    if (messageText1 !== "") {
        const messageElement1 = document.createElement('div');
        messageElement1.classList.add('message');
        messageElement1.textContent = messageText1;
        document.getElementById('chat-box').appendChild(messageElement1);
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
        messageInput1.value = '';
    }
};
document.getElementById('send-btn-2').onclick = () => {
    const messageInput2 = document.getElementById('message-input-2');
    const messageText2 = messageInput2.value.trim();

    if (messageText2 !== "") {
        const messageElement2 = document.createElement('div');
        messageElement2.classList.add('message');
        messageElement2.textContent = messageText2;
        document.getElementById('chat-box').appendChild(messageElement2);
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
        messageInput2.value = '';
    }
};
