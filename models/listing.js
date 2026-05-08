const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listing=new Schema({
    title:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-large-couch-sitting-on-top-of-a-patio-wnMnoSXvn1s",
        set:(v)=>v===" " ?"https://unsplash.com/photos/a-large-couch-sitting-on-top-of-a-patio-wnMnoSXvn1s":v
    },
    price:{
        type:Number,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    }
})
const List=mongoose.model("List",listing)
module.exports=List;
