const express = require("express");
const res = require("express/lib/response");
const port = 9000;

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Spotify :)");
})
app.listen(port, () => {
    console.log("server running on 9000");
})
const songRoute = require('./routes/song.route');
const userRoute = require('./routes/user.route');
const playlistRoute = require('./routes/playlist.route');
    
