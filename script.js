// script.js - Updated Functionality

function pasteURL() {
    navigator.clipboard.readText().then(text => {
        document.getElementById("url").value = text;
    }).catch(err => {
        alert("Failed to paste URL");
    });
}

function downloadMedia() {
    const url = document.getElementById("url").value;
    const format = document.getElementById("format").value;
    
    if (!url) {
        alert("Please enter a valid URL");
        return;
    }
    
    alert(`Downloading ${format} from ${url}`);
    
    addToHistory(url, format);
}

function addToHistory(url, format) {
    const historyList = document.getElementById("history-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${format.toUpperCase()}: ${url}`;
    historyList.appendChild(listItem);
}
