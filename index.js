const pasteText = function () {
    const chatInputSelector = 'textarea[data-id]';
    const chatInput = document.querySelector(chatInputSelector);

    if (chatInput) {
        const textToType = `AI: STRICT MODE - Provide concise and informative answers. Follow these instructions for the entire conversation:
            - Exclude politeness and unnecessary context.
            - Don't apologize for not knowing something.
            - Provide code snippets whenever possible.`;

        const event = new InputEvent('input', {
            bubbles: true,
            cancelable: true
        });

        chatInput.value = '';
        for (const char of textToType) {
            chatInput.value += char;
            chatInput.dispatchEvent(event);
        }
    }
};

const pressEnter = function () {
    const chatInputSelector = 'textarea[data-id]';
    const chatInput = document.querySelector(chatInputSelector);

    if (chatInput) {
        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter',
            which: 13,
            keyCode: 13
        });

        chatInput.dispatchEvent(event);
    }
};

const addMessage = function () {
    pasteText();
    pressEnter();
};

setTimeout(addMessage(), 1000);
