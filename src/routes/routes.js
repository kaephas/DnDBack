import { newCharacter, getCharacters, getCharacter, updateCharacter, deleteCharacter } from "../controllers/controller";
import cors from 'cors';

const routes = (app) => {
    app.use(cors());
    app.route('/character')
        // get all characters
        .get((req, res, next) => {
            // middleware
            console.log(`Get request from: ${req.originalUrl}`);
            console.log(`Get request type: ${req.method}`);
            next();
        }, getCharacters)
        // add a new character
        .post((req, res, next) => {
            console.log(`Post request from: ${req.originalUrl}`);
            console.log(`Post request type: ${req.method}`);
            next();
        }, newCharacter);

    app.route('/character/:name')
        // get a specific character
        .get((req, res, next) => {
            console.log(`Get request from: ${req.originalUrl}`);
            console.log(`Get request type: ${req.method}`);
           next();
        }, getCharacter)
        // update a character
        .put((req, res, next) => {
            console.log(`Put request from: ${req.originalUrl}`);
            console.log(`Put request type: ${req.method}`);
            next();
        }, updateCharacter)
        // delete a character
        .delete((req, res, next) => {
            console.log(`Delete request from: ${req.originalUrl}`);
            console.log(`Delete request type: ${req.method}`);
            next();
        }, deleteCharacter);
};

export default routes;