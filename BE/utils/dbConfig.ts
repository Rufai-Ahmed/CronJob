import { connect } from "mongoose";

const URL = "mongodb://localhost:27017/cronDB";

export const dbConfig = async () => {
  try {
    return await connect(URL).then(() => {
      console.log("DB Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
