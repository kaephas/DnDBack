import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// mongoose connection
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://kaephasdnd:NiakSahpeak314@ds213896.mlab.com:13896/heroku_qnsktrdp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, "connection issues..."));
db.once('open', function() {
    console.log('connected');
});

// body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send(`Node and express running on ${process.env.PORT || PORT}`);
});

routes(app);

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${process.env.PORT || PORT}...`));
