const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistschema = new Schema({
    name: {
        type: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: User
        },
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
    likes: {
        type: int,
        required: true
    },

},
    { versionKey: false }
)

module.exports = mongoose.model('playlist', playlistSchema);