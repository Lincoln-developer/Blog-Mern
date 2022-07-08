import express from "express";
//import auth from "../../../middlewares/auth.js";
import { registerUser} from "../../../controllers/account.js";
const router = express.Router()
/**
 * @method:"POST,GET,PATCH,DELETE"
 * @description:
 * "HTTP methods to get all users, get single user, create user account,
 * delete a user account, 
 * "
*/

//Route to get all user accounts
router.route("/").get();

//Route to create user account
router.route("/").post(registerUser);

//Route to log into user account
//router.route("/").post(auth,login);

//Route to get single user account
router.route("/").get();

//Route to delete a user account
router.route("/:blog").delete();

//Route to change account information
router.route("/:blog").patch();

export default router
