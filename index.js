import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {PORT} from './src/backend/config/index.js'
import App from "./src/backend/routes/authRoutes.js"
import db from "./src/backend/models/index.js"
const app = express();
//middleware 
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

// CONFIGURE HEADER INFORMATION
// Allow request from any source. In real production, this should be limited to allowed origins only
app.use(cors());
app.disable("x-powered-by"); //Reduce fingerprinting
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  
const user1 = {
    "firstName":"Shivalika",
    "lastName":"Gupta"
}
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index',{
       user1
    })
})
const port = 3000
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
  })