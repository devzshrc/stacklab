import express from 'express';
import cors from 'cors';

import { PORT } from './config/serverConfig.js';
import v1Router from './routes/v1/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', v1Router);

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});