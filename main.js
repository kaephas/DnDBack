import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://kaephasdnd:btanJ9L7U!xfGR2@ds213896.mlab.com:13896/heroku_qnsktrdp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and express running on ${Process.env.PORT || PORT}`);
});

app.listen(Process.env.PORT || PORT, () => console.log(`Listening on port ${Process.env.PORT || PORT}...`));