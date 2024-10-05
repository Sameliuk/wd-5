const sendBtn1 = document.getElementById('send-btn-1');
const sendBtn2 = document.getElementById('send-btn-2');

const inputMessage1 = document.getElementById('message-input-1');
const inputMessage2 = document.getElementById('message-input-2');

const chatBox = document.getElementById('chat-box');

const btn1Click = () => {
    const messageText1 = inputMessage1.value.trim();

    if (messageText1 !== "") {
        const messageElement1 = document.createElement('div');
        messageElement1.classList.add('message-1');

        const userTitle1 = document.createElement('strong');
        userTitle1.textContent = 'USER 1';

        const messageTextElement1 = document.createElement('p');
        messageTextElement1.textContent = messageText1;

        messageElement1.appendChild(userTitle1);
        messageElement1.appendChild(messageTextElement1);

        chatBox.appendChild(messageElement1);
        chatBox.scrollTop = document.getElementById('chat-box').scrollHeight;

        inputMessage1.value = '';
    }
};

const btn2Click = () => {
    const messageText2 = inputMessage2.value.trim();

    if (messageText2 !== "") {
        const messageElement2 = document.createElement('div');
        messageElement2.classList.add('message-2');

        const userTitle2 = document.createElement('strong');
        userTitle2.textContent = 'USER 2';

        const messageTextElement2 = document.createElement('p');
        messageTextElement2.textContent = messageText2;

        messageElement2.appendChild(userTitle2);
        messageElement2.appendChild(messageTextElement2);

        chatBox.appendChild(messageElement2);
        chatBox.scrollTop = document.getElementById('chat-box').scrollHeight;

        inputMessage2.value = '';
    }
};

sendBtn1.addEventListener('click', btn1Click);
sendBtn2.addEventListener('click', btn2Click);