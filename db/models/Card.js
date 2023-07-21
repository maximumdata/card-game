import { Schema, model } from "mongoose";

const cardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hp: { type: Number, required: true },
    strength: { type: Number, required: true },
    powers: [{
        title: {
            type: String,
            trim: true
        },
        desc: {
            type: String,
            trim: true
        },
        actions: [{}]
    }]
});

export default model('Card', cardSchema);