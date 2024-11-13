const mongoose= require('mongoose');
const connectDB = async() =>{ 
    try{
        // console.log(process.env.MONGODB_URI);
        const dbconnect=  await mongoose.connect(process.env.MONGODB_URI);
         console.log("MongoDB connected =", mongoose.connection.host);
       
    }catch(error){
        console.error(error.message);
        process.env.MONGODB_URI
    }
};
module.exports=connectDB;
