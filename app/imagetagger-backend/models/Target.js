const mongoose = require('mongoose');

const TargetSchema = new mongoose.Schema({
    url: {type: String, index: true},
    x: Number,
    y: Number,
    w: Number,
    h: Number
}, {timestamps: true});

mongoose.model('Target', TargetSchema);