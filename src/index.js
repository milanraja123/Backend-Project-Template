import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv/config";

connectDB()
  .then(() => {
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
  })
  })
  .catch((err) => console.log("Mongo DB  Connection Failed !!! : ", err));

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening at ${process.env.PORT}`);
    });
    {
      process.env.PORT;
    }
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();
*/
