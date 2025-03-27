import express from 'express';
import { getGames, createGame } from '../controllers/gamesController.js';

const router = express.Router();

router.get("/", getGames)
router.post("/new", createGame)

export default router;