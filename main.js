import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from "./src/routes/routes";

const app = express();

app.use(cors());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
    // if('OPTIONS' === req.method) {
    //     res.send(200);
    // } else {
        next();
    // }
});
// app.use('/api', router);

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

// body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Node and express running on ${process.env.PORT || PORT}`);
});

// app.get('/api/characters', (req, res) => {
//     request(
//         { url: 'https://dnd-chars.herokuapp.com/api/characters' },
//         (err, res, body) => {
//             if (err || res.statusCode !== 200) {
//                 return res.status(500).json({type: 'error', message: err.message});
//             }
//             res.json(JSON.parse(body));
//         }
//     )
// });

// api routes
routes(app);

// start app
app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${process.env.PORT || PORT}...`));
