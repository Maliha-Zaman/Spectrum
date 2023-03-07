const mongoose= require("mongoose")
const userSchema=new mongoose.Schema({
    StoreName:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    logofile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    division:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    bankaccount:{
        type: String,
        required: true
    },
    NID:{
        type: String,
        required: true
    }
})
const SellUser = new mongoose.model("SellUser",userSchema);

module.exports= SellUser

