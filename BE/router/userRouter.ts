import { Router } from "express";
import {
  addThreeMonthsPlan,
  createUser,
  findAll,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/upgrade-user-plan").patch(addThreeMonthsPlan);
router.route("/all").get(findAll);

export default router;
