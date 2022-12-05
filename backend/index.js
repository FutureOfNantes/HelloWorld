import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import sdRoutes from './routes/sd.js';
import userRoute from './routes/users.js';
import nonceRoute from './routes/nonce.js';
import verifyRoute from './routes/verify.js';


const app = express();
app.use(express.json());
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors({
  origin: 'https://daseslab.on.fleek.co',
  credentials: true,
}));

app.use('/sd', sdRoutes);
app.use('/users', userRoute);
app.use('/nonce', nonceRoute);
app.use('/verify', verifyRoute);


app.get('/', (req, res) => {
  res.send('Test DASES API');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_APP_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
