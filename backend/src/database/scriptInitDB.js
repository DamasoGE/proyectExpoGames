//Este archivo se llama mediante "npm run initDB" para insertar el primer usuario.

import connectDB from "./connectDB.js";
import gamesINI from "./gamesINI.json" with { type: 'json' };

const scriptInitDB = async () => {
  const client = await connectDB();
  const db = client.db();
  const userCollection = db.collection('game');

  try {
    const result = await userCollection.insertMany(gamesINI);
    console.log(`Data imported: ${result.insertedCount} games`);
  } catch (error) {
    console.error('Error create data:', error);
  } finally {
    client.close();
  }
};
scriptInitDB();