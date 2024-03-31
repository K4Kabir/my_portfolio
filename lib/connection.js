import mongoose from "mongoose";

export const connect = async function () {
  try {
    let res = await mongoose.connect(process.env.MONGO_URL);
    if (res) {
      console.log("Connected with database");
    }
  } catch (error) {
    console.log(error);
  }
};
