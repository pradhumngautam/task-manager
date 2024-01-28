const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://pradhumngautam:GQWTXj2u9Ed7ks0d@cluster0.mojxgk8.mongodb.net/task-manager"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
