import { Request, Response } from "express";
import { CronJob } from "cron";
import moment from "moment";
import userModel from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await userModel.create({
      email,
      plan: "free",
    });

    return res.status(201).json({
      msg: "User Created",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addThreeMonthsPlan = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const aheadTime = new Date().setMonth(new Date().getMonth() + 3);
    const momented = moment(aheadTime).format("L");

    const split = momented.split("/");

    const update = await userModel.findOneAndUpdate(
      { email },
      {
        planStart: moment(new Date().getTime()).format("L"),
        planExpires: momented,
        plan: "bronze",
        expired: false,
      }
    );

    const job = new CronJob(
      `0 0 ${split[1]} ${split[0].replace(/0+$/, "")} *`,
      async function () {
        await userModel.findByIdAndUpdate(
          update?._id,
          { expired: true },
          { new: true }
        );
      },
      null,
      true,
      "America/Los_Angeles"
    );

    return res.status(201).json({
      msg: "Plan Created",
      data: update,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    return res.status(201).json({
      msg: "Plan Created",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
