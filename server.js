//loading modules
const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
const router = require("./routes/user.router");
//new express application
const app = express();

//configuration file
dotenv.config();

//parse requests of content-type json
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

//setting up port connection
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`App running on port ${port}....`);
});

app.get("/",(req,res)=> {
    res.status(200).json({
        status : "success",
    message : "Welcome to myApp!"
    });
})

app.use('/v1/users',router)