import express from "express";
import { userLogin } from "../../../controllers/account.js";
import auth from "../../../middlewares/auth.js";

const router = express.Router();

/**
 * @method:"POST",
 * @description:"Route to allow loging into user account",
*/

router.route("/").post(auth,userLogin);

export default router;