import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "joblinkdb",
    })
    .then(() => {
      console.log("mongodb connected!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};