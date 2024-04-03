import * as dotenv from "dotenv";
dotenv.config();
const {PORT, SECRET_ACCESS_TOKEN, MAIL_HOST, MAIL_PASS, MAIL_USERNAME,MAIL_PORT} = process.env;
export {PORT, SECRET_ACCESS_TOKEN, MAIL_HOST, MAIL_PASS, MAIL_USERNAME,MAIL_PORT}