import  { MongoClient } from 'mongodb';
import  { MONGO_URI } from '../config/config.js';

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(MONGO_URI);
    console.log('Conectado a MongoDB');
    return client;
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    throw error; // Propagamos el error para manejarlo donde se llame
  }
}

export default connectDB;
