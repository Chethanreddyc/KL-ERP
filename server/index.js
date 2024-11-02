const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require ('cors');
const authRouter = require ('./routes/AuthRouter');

require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});
                  
app.use(bodyparser.json());
app.use(cors());
app.use('/auth',authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});