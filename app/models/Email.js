import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  name: String,
  email: String,
  content: String,
});

const modelName = "Email";
const modelExists = mongoose.modelNames().includes(modelName);

const Email = modelExists
  ? mongoose.model(modelName)
  : mongoose.model(modelName, EmailSchema);

export default Email;
