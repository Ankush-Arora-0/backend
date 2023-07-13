import express from 'express';
import './db/conn.js';
import router  from './router/auth.js';
import Razorpay from 'razorpay'
import PaymentRouter from './router/Paymentroute.js';
import BodyParser from 'body-parser';
import cors from 'cors';


// 👇️ "/home/john/Desktop/javascript"


const app = express();
const PORT = process.env.PORT || 5000;

app.use(router);
app.use(BodyParser.json());
app.use(express.json());
app.use('/api',PaymentRouter)
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","https://ecommerce-8woe.onrender.com");
     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type,Accept");
    next();
});



export const instance = new Razorpay({
    key_id:process.env.KEY_ID,
    key_secret:process.env.KEY_SECRET
})

app.listen(PORT,()=>{
    console.log(`Our server is running at port ${PORT}`);
})
