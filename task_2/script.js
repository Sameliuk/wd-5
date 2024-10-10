const chatBox = document.getElementById('chat-box');

const massageButton = (inputElement, userClass, userName) => {
    const messageText = inputElement.value.trim();

    if (messageText !== "") {
        const messageElement = document.createElement('div');
        messageElement.classList.add(userClass);

        const userTitle = document.createElement('strong');
        userTitle.textContent = userName;

        const messageTextElement = document.createElement('p');
        messageTextElement.textContent = messageText;

        messageElement.appendChild(userTitle);
        messageElement.appendChild(messageTextElement);

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;

        inputElement.value = '';
    }
};

document.getElementById('send-btn-1').addEventListener('click', () => {
    massageButton(document.getElementById('message-input-1'), 'message-1', 'USER 1');
});

document.getElementById('send-btn-2').addEventListener('click', () => {
    massageButton(document.getElementById('message-input-2'), 'message-2', 'USER 2');
});
