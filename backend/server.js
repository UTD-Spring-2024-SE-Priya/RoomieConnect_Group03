

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// I <3 forttnite


app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/createpost", postRouter);

const userRouter = require('./routes/Users');
app.use("/signup", userRouter);

const userRouter2 = require('./routes/Users');
app.use("/editaboutme", userRouter2);



app.post('/signup', (req, res) => {
  const sql = "INSERT INTO users (`name`, `lastName`,`emailAddress`, `password`) Values (?)";
  const values = [
    req.body.name,
    req.body.lastName,
    req.body.emailAddress,
    req.body.password,
  ]
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.post('/createpost', (req, res) => {
  const sql = "INSERT INTO posts (`id`,`rent`, `pet_friendly`, `location`, `floorPlan`, `preferredGender`, `extraInformation`, `photo`) Values (?)";
  const values = [
    req.body.id,
    req.body.rent,
    req.body.pet_friendly,
    req.body.location,
    req.body.floorPlan,
    req.body.preferredGender,
    req.body.extraInformation,
    req.body.photo,
  ]
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.post('/editaboutme', (req, res) => {
  const sql = "UPDATE users SET `gender`=?, `age`=?, `hobbies`=?, `extroverted_introverted`=?, `nightowl_earlybird`=?, `cleanliness`=?, `extra_information`=? WHERE `emailAddress`=emailAddress";
  const values = [
    req.body.gender,
    req.body.age,
    req.body.hobbies,
    req.body.extroverted_introverted,
    req.body.nightowl_earlybird,
    req.body.cleanliness,
    req.body.extra_information,
    req.body.emailAddress
  ]
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


db.sequelize.sync().then(()=> {
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
});




