{/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a schema for the registration data
const registrationSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  bloodGroup: String,
  purpose: String,
  ailments: String,
  bloodUnits: Number,
});

// Create a model based on the schema
const Registration = mongoose.model('Registration', registrationSchema);

app.post('/acc/request', (req, res) => {
  // Handle the form submission
  const { name, age, email, phone, bloodGroup, purpose, ailments, bloodUnits } = req.body;

  // Create a new registration instance
  const newRegistration = new Registration({
    name,
    age,
    email,
    phone,
    bloodGroup,
    purpose,
    ailments,
    bloodUnits,
  });

  // Save the registration data to MongoDB
  newRegistration.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while saving the registration data.' });
    } else {
      // Return a response
      const response = {
        message: 'Registration completed',
        // Include any additional data you want to send back to the client
        // ...
      };
      res.json(response);
    }
  });
});

app.listen(15000, () => {
  console.log('Server is running on port 15000');
});*/}





const express = require("express");
const app = express();

var collection = require("./mongo");
const cors =require("cors");
const blood = require("./request");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());



// setting api
app.get('/',(req,res)=>{
    res.send("home page ")
});
//signup
app.post('/acc/signup',(req,res)=>{
    var detail=new collection(req.body);
    detail.save();
    res.send("registration added successfully")
})
//request blood 
app.post('/acc/request',(req,res)=>{
    var details=new blood(req.body);
    details.save();
    res.send("registration added successfully")
})

//port
app.listen(15000,()=>{
    console.log("sever is running");
});