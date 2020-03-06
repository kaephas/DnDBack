import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const characterSchema = new Schema( {
    name: String,
    race: String,
    class: String,
    str: Number,
    dex: Number,
    con: Number,
    int: Number,
    wis: Number,
    cha: Number,
    date_added: {
        type: Date,
        default: Date.now
    }
});

