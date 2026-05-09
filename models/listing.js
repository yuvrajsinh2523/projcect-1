const mongoose=require("mongoose");
const Schema=mongoose.Schema();

const dSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    image:{
        filename:{
            type:String,
            default:"image link"
        },
        url:{
            type:String,
            default:"https://i.pinimg.com/1200x/98/8a/67/988a677388a2357b96a31bc2c53c9db3.jpg"
        }
    },
    description:{
        type:String,
        require:true
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

const List=mongoose.model("List",dSchema)
module.exports=List;
