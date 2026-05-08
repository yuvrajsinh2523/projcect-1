const express=require("express");
const app=express();
const mongoose=require("mongoose");

const MONGO_url="mongodb://127.0.0.1:27017/wondestlust";

main().then((res)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});


async function main(){
    await mongoose.connect(MONGO_url);
}
app.listen(8080,()=>{
    console.log("your port is working");
})

app.get("/",(req,res)=>{
    res.send("this is root");
})

