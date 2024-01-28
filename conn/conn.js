const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://pradhumngautam:ocbszU1bBSMIc8Aj@cluster0.mojxgk8.mongodb.net/task-manager"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
