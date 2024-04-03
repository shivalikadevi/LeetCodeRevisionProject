import * as express from "express";
import { signup} from "../controller/authController.js";

const router = express.Router();
//router.post('/signup', authController.signup);
router.post('/signup', signup);
export default router;