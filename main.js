import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const PORT = 5000;

// mongoose connection
mongoose.Promise = global.Promise; // TODO: is this what broke the app on heroku?
mongoose.connect('mongodb://kaephasdnd:NiakSahpeak314@ds213896.mlab.com:13896/heroku_qnsktrdp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// check mongodb connection status
let db = mongoose.connection;
db.on('error', console.error.bind(console, "connection issues..."));
db.once('open', function() {
    console.log('connected to db');
});

app.use(cors());

// body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`Node and express running on ${process.env.PORT || PORT}`);
});

// api routes
routes(app);

// start app
app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${process.env.PORT || PORT}...`));
