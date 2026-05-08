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

app.get("/listing",(req,res)=>{
    const user1=new List({
        title:"home",
        discription:"this is a home",
        price:1200,
        location:"Gandhinagar",
        country:"india"
    });
    user1.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
})

