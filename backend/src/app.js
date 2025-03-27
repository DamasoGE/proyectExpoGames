import express from 'express';
import cors from 'cors'; // Importamos el middleware CORS
import { ENDPOINT, PORT } from './config/config.js';
import gamesRoutes from './routes/gamesRoutes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(ENDPOINT, gamesRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
