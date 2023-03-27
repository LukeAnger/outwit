import mongoose from "mongoose";

const mongo_url = process.env.MONGODB_URL;

if (!mongo_url) {
  throw new Error("Please define the MONGODB_URL environment variable");
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const dbConnect = async () => {
  if (cached.connection) {
    return cached.connection
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(mongo_url, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.connection = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.connection
}