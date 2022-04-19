const { connect } = require("mongoose")

const uri = "mongodb+srv://pallavi:kCEp94ZsgHlSDpBu@cluster0.zqzwh.mongodb.net/Brillio-DB?retryWrites=true&w=majority"

connect(uri)
.then(() => console.log("MongoDB Connected!!!"))
.catch((err) => console.log(err))