import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

let db;

export const connectToDatabase = async() => {
  const client = new MongoClient(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  await client.connect();
  db = client.db("coach-finder-app");
};

export const getDatabase = () => db;
