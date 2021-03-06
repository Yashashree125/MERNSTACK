import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
const path = require('path');

import postRoutes from './routes/posts.js';
import router from './routes/posts.js';


const app = express ();
dotenv.config();

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts', router);

//const CONNECTION_URL = 'mongodb+srv://mernapp:mernapp123@cluster0.syng0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);


