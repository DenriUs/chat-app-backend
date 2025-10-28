import mongoose from 'mongoose';
import { env } from 'src/config';

export const connectDb = async () => mongoose.connect(env.MONGO_DB_URL);
