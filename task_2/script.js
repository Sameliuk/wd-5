document.getElementById('send-btn-1').onclick = () => {
    const messageInput1 = document.getElementById('message-input-1');
    const messageText1 = messageInput1.value.trim();

    if (messageText1 !== "") {
        const messageElement1 = document.createElement('div');
        messageElement1.classList.add('message-1');

        const userTitle1 = document.createElement('strong');
        userTitle1.textContent = 'USER 1';

        const messageTextElement1 = document.createElement('p');
        messageTextElement1.textContent = messageText1;

        messageElement1.appendChild(userTitle1);
        messageElement1.appendChild(messageTextElement1);

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
        messageElement2.classList.add('message-2');

        const userTitle2 = document.createElement('strong');
        userTitle2.textContent = 'USER 2';

        const messageTextElement2 = document.createElement('p');
        messageTextElement2.textContent = messageText2;

        messageElement2.appendChild(userTitle2);
        messageElement2.appendChild(messageTextElement2);

        document.getElementById('chat-box').appendChild(messageElement2);
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;

        messageInput2.value = '';
    }
};
