const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songschema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Date,
        required: true
    },
    artists: {
        type: String,
        required: true
    },
    // likes: {
    //     type: int,
    //     required: true
    // },

},
    { versionKey: false }
)

module.exports = mongoose.model('song', songschema);