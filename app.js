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
});





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
app.post('/acc/signup', async (req,res)=>{
  try {
    // Check if the email already exists
    var existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Create a new user instance
    var newUser = new collection(
      req.body
    );

    // Save the new user to the database
    await newUser.save();

    res.send({ message: 'Registration completed' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred during registration' });
  }
});

  
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












{/*
// Assuming you have installed the necessary dependencies, including express and a database driver

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up the Express app
const app = express();
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Orgin","*");
     res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Content-type");
   res.setHeader("Access-Control-Allow-Credentials", true);
  });
  

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://aromalsraj03:aromal@cluster0.hyaly2t.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose schema for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  password: String,
});

// Create a Mongoose model for the user
const User = mongoose.model('User', userSchema);

// Define the route for the signup endpoint
app.post('/acc/Signup', async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Create a new user instance
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
    });

    // Save the new user to the database
    await newUser.save();

    res.json({ message: 'Registration completed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});

// Start the server
app.listen(15000, () => {
  console.log('Server started on port 15000');
});*/}



const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./user');

const blood = require("./request");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://aromalsraj03:aromal@cluster0.hyaly2t.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Setting up the API
app.get('/', (req, res) => {
  res.send('Home page');
});

// Signup
app.post('/acc/signup', async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Create a new user instance
    const newUser = new User(req.body);

    // Save the new user to the database
    await newUser.save();

    res.send({ message: 'Registration completed' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred during registration' });
  }
});
//login

// Login
app.post('/acc/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If the user does not exist, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the stored password
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the passwords do not match, return an error
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Create a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user._id }, 'your_secret_key');

    res.send({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred during login' });
  }
});



//request blood 
app.post('/acc/request',(req,res)=>{
    var details=new blood(req.body);
    details.save();
    res.send("registration added successfully")
})

// Other routes and server configurations...

// Start the server
app.listen(15000, () => {
  console.log('Server is running');
});

