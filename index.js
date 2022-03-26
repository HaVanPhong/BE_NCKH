const express= require('express');
const app= express();
const cors= require('cors');
const connectDB= require('./configs/database')
const router= require('./routers');
const cloudinary= require('cloudinary').v2;
const connectCloudinary= require('./configs/cloudinary');
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


connectCloudinary(cloudinary);
connectDB();
router(app);


app.listen(process.env.PORT||3000, ()=>{
  console.log("Server run at port:: ", process.env.PORT||3000);
})