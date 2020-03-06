import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DnDBack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and express running on ${process.env.PORT || PORT}`);
});

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${process.env.PORT || PORT}...`));