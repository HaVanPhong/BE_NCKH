const mongoose = require("mongoose");

const connectDB= async()=>{
  try {
    const conn= mongoose.connect("mongodb+srv://root:123@cluster0.wmj04.mongodb.net/BE_KH?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect DB successfull");
  } catch (error) {
    console.log(error);
  }
}

module.exports= connectDB;