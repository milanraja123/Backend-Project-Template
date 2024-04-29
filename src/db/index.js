import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
  } catch (error) {
    console.log("MONGO DB Connection Error: ", error);
    process.exit(1);
  }
};

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       "mongodb://localhost:27017/practise_node",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       },
//     );
//     console.log(`\n MONGO DB connected ! ! DB HOST : ${connectionInstance}`);
//   } catch (error) {
//     console.log("MONGO DB Connection Error: ", error);
//     process.exit(1);
//   }
// };

export default connectDB;
