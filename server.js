const express = require("express");
const { exec } = require("child_process");
const app = express();

app.get("/download", (req, res) => {
    const { url, format, quality } = req.query;
    const outputFormat = format === "video" ? "mp4" : "mp3";
    const qualityFlag = format === "video" ? `-f \"bestvideo[height<=${quality}]+bestaudio/best\"` : `-f \"bestaudio[abr<=${quality}]\"`;

    const command = `yt-dlp ${qualityFlag} -o - "${url}"`;
    
    exec(command, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout) => {
        if (error) return res.status(500).send("Download failed");
        res.send(stdout);
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));