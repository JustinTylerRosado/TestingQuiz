var _a;
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
const MONGODB_URI = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : 'mongodb://127.0.0.1:27017/techquiz';
const db = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected.');
        return mongoose.connection;
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed.');
    }
};
export default db;
