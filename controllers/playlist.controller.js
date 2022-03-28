const playlist = require('../models/playlist.model');

async function createplaylist(req, res) {
    try {
        const playlist = new playlist(req.body);
        const savedplaylist = await playlist.save();
        res.status(200).json({
            message: "playlist created sucessfully",
            savedplaylist
        });
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}