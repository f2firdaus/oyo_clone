import mongoose from "mongoose";
// const {username,password} =process.env
const url ="mongodb+srv://root:root@cluster1.15znoos.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
   
        await mongoose.connect(url, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,

            
        }); 
    

 
    console.log("DB connnected.");

}
export default connectDB