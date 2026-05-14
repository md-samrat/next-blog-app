import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_URI as string;

if (!MONGODB_URI) {
  throw new Error("DATABASE URI MISSING");
}

const cached = (globalThis as any).mongoose || {
  conn: null,
  promise: null,
};

export async function connectDB() {
  if (cached.conn) {
    console.log("Already Connected");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

    console.log("MongoDB Connecting...");
  }

  cached.conn = await cached.promise;

  console.log("MongoDB Connected Successfully ");

  (globalThis as any).mongoose = cached;

  return cached.conn;
}