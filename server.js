const express =require('express');
const connectDB= require('./config/db');
const authRoutes = require('./routes/loginroute');
require('dotenv').config();
const {login} = require("./routes/loginroute.js")

const app = express();
connectDB();
app.use(express.json());
app.get("/login",login)

// app.use('/api/auth',authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))