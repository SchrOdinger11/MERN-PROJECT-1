import  express  from "express";
import bodyParser from "body-parser";
import mongoose, { Mongoose } from "mongoose";
import cors from 'cors';
import studentroute from './routes/student.js';
const app= express();

app.use('/students',studentroute);
app.use(bodyParser.json({limit:"20mb", extended:true})) //limit is only 20 mb
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}))

app.use(cors());

const CONNECTION_URL='mongodb+srv://sudhanshumongoDB:WWDhtNKSVQAZRgsW@cluster0.zzcwxky.mongodb.net/?retryWrites=true&w=majority'

const PORT =process.env.PORT || 5001;

//avoid warning and error in conosole returns a promise.
mongoose.connect(CONNECTION_URL,
    {
        useNewUrlParser:true, useUnifiedTopology:true
    }
    ).then(() => app.listen(PORT, () =>
console.log('Connection is established and running on PORT: ${PORT}')
)).catch((err) =>console.log(err.message));
//mongoose.set('useFindAndModify', false);