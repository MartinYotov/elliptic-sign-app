import express, { Express } from 'express';
import signatureRouter from './routes/signature.routes';

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('public'));

app.use('/sign', signatureRouter);

export default app;
