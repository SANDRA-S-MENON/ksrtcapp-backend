const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "emailid":String,
        "phoneno":String,
        "gender":String,
        "password":String,
        "confirmpassword":String,
    }
)
let ksrtcmodel=mongoose.model("users",schema);
module.exports={ksrtcmodel}