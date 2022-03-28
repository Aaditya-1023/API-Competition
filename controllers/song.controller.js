const Order = require('../models/song.model');

async function createsong(req, res) {
    try {
        const order = new song(req.body);
        const savedOrder = await order.save();
        res.status(200).json({
            message: "song saved successfully",
            savedOrder
        });
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

async function deletesong(req, res) {
    try {
        await Order.deleteMany({});
        res.status(200).json({ message: "song deleted successfully" });
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

