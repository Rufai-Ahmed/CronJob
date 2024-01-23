import { Application, Request, Response } from "express";
import router from "./router/userRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/", router);

    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          msg: "Welcome",
          status: 200,
        });
      } catch (error) {
        return res.status(404).json({
          msg: "Error",
          status: 404,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
