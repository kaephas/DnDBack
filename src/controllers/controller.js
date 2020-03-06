import mongoose from 'mongoose';
import { characterSchema } from "../models/models";

const Character = mongoose.model('Character', characterSchema);

export const newCharacter = (req, res) => {
    let newChar = new Character(req.body);
    newChar.save((err, character) => {
        if(err) {
            res.send(err);
        }
        res.json(character);
    });
};

export const getCharacters = (req, res) => {
    Character.find({}, (err, characters) => {
        if(err) {
            res.send(err);
        }
        res.json(characters);
    });
};

export const getCharacter = (req, res) => {
    Character.find({name: req.params.name}, (err, characters) => {
        if(err) {
            res.send(err);
        }
        res.json(characters);
    });
};

export const updateCharacter = (req, res) => {
    Character.findOneAndUpdate({name: req.params.name},
        req.body, { new: true, useFindAndModify: false},
        (err, character) => {
        if(err) {
            res.send(err);
        }
        res.json(character);
    });
};

export const deleteCharacter = (req, res) => {
    Character.findOneAndDelete({name: req.params.name},(err) => {
        if(err) {
            res.send(err);
        }
        res.json({ message: 'successfully deleted character'});
    });
};