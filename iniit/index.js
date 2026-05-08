const mongoose=require("mongoose");

const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_url="mongodb://127.0.0.1:27017/wondestlust";

main().then((res)=>{
    console.log("listing done");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_url);
}
 

const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data inisialize");

}

initDB();
