const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listing=new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{filename:{
        type:String,
        default:"listing image",
    },
     url: {
            type: String,
            default:
            "https://unsplash.com/photos/a-large-couch-sitting-on-top-of-a-patio-wnMnoSXvn1s"
        }
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
