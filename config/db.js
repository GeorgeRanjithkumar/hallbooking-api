const mongoose = require("mongoose");

const url =
  "mongodb+srv://user:9597350897@cluster0.genpe.mongodb.net/hallbooking?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
