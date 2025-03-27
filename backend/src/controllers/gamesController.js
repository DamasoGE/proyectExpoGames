import connectDB from "../database/connectDB.js";

const client = await connectDB();
const db = client.db();
const collection = db.collection('game');

export const getGames = async (req, res) =>{
        try {
            const games = await collection.find().toArray();
            res.status(200).json({ success: true, data: games });
        } catch (error) {
            console.error("Error fetching games:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
}

export const createGame = async (req, res) => {
    try {
        const newGame = req.body;

        if (!newGame || Object.keys(newGame).length === 0) {
            return res.status(400).json({ success: false, message: "Invalid game data" });
        }

        const result = await collection.insertOne(newGame);

        res.status(201).json({
            success: true,
            message: "Game created successfully",
            data: result.ops ? result.ops[0] : newGame
        });
    } catch (error) {
        console.error("Error creating game:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};