import mongoose from "mongoose";

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null }
}

export const dbConnect = async () => {

  if (cached.connection) {
    console.log('Already connected to MongoDB')
    return cached.connection
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = mongoose.connect(process.env.MONGODB_URL, opts).then((mongoose) => {
      console.log('Connecting to MongoDB')
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

