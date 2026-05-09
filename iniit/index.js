const mongoose=require("mongoose");
const data=require("./data.js")
const List=require('../models/listing.js')

const MONGO_URL="mongodb://127.0.0.1:27017/bnb";

main().then((res)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}

const enterDB=async ()=>{
    await List.deleteMany();
    await List.insertMany(data.data);
}
enterDB();
