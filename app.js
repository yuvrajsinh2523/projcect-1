const express=require("express");
const mongoose=require("mongoose");
const methodoverride=require("method-override");
const path=require("path");
const port=8080;
const app=express();


const Model=require("./models/listing.js")


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"public")));


const MONGO_URL="mongodb://127.0.0.1:27017/bnb";

main().then((res)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){

    await mongoose.connect(MONGO_URL)
}

app.listen(port,()=>{
    console.log(`your port ${port} is working`);
})

app.get("/show",async (req,res)=>{
  let Showall= await Model.find();
  res.render("view.ejs",{Showall});
})
app.get("/show/new",(req,res)=>{
    res.render("new.ejs");
})
app.get("/show/:id",async (req,res)=>{
    let {id}=req.params;
    const  perti=await Model.findById(id);
    res.render("view1.ejs",{perti});
})

app.post("/show",async (req,res)=>{
   await  Model.insertOne(req.body.listing);
   res.redirect('/show');
});

app.get("/show/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let also=await Model.findById(id);
   
    res.render("edit.ejs",{also})
})

app.put("/show/:id",async (req,res)=>{
    let {id}=req.params;
   await Model.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/show/${id}`);
})

app.delete("/show/:id",async (req,res)=>{
    let {id}=req.params;
    await Model.findByIdAndDelete(id);
    res.redirect("/show");
})
