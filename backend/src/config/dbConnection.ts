import mongoose from "mongoose";

export async function connectionToDb(url: string) {
  try {
    return mongoose.connect(url);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
