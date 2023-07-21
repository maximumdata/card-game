import mongoose from 'mongoose';
import config from '../config/index.js';
import Card from '../db/models/Card.js'

const { env: { DB_USER, DB_PASS, DB_URL, DB_COLLECTION } } = config;
const db = await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_COLLECTION}?retryWrites=true&w=majority`);

export default {
    db,
    Card
};