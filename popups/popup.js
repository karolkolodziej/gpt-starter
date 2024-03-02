document.getElementById('options').addEventListener('click', function () {
    const storage = chrome.storage.local;

    chrome.tabs.create({ url: 'options/options.html' });
});

document.getElementById('gh').addEventListener('click', function () {
    chrome.tabs.create({ url: 'https://github.com/karolkolodziej' });
});
