let selectedFormat = "video";

function selectFormat(format) {
    selectedFormat = format;
    document.getElementById("resolution-group").style.display = format === "video" ? "block" : "none";
    document.getElementById("audio-quality-group").style.display = format === "audio" ? "block" : "none";
}

async function downloadMedia() {
    const url = document.getElementById("url").value;
    const quality = selectedFormat === "video" ? document.getElementById("resolution").value : document.getElementById("audio-quality").value;
    
    const response = await fetch(`/download?url=${encodeURIComponent(url)}&format=${selectedFormat}&quality=${quality}`);
    const blob = await response.blob();
    
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `media.${selectedFormat === "video" ? "mp4" : "mp3"}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
