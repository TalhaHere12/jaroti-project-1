import mongoose from "mongoose";

const Connection = async(username,password) => {

    // const URL = `mongodb+srv://${username}:${password}@jaroti-project.anpcqfy.mongodb.net/?retryWrites=true&w=majority`;
    const URL=`mongodb+srv://${username}:${password}@jaroti-project1.ijdnwfu.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true , useNewUrlParser: true});
        console.log("Connected to the database Successfully");
    }catch(error){
        console.log("Error while connecting the database", error)
    }

}

export default Connection