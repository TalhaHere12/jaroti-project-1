// import user from "./../schema/user-schema.js"
// import user from "./../schema/user-schema.js"
import User from "./../schema/user-schema.js"
import { useParams } from "react-router-dom"
export const addUser = async(request, response) => {
    const user = request.body
    const newUser = new User(user)
    console.log(request.body)
    try{
        await newUser.save();
        response.status(201).json(newUser)
    }catch(error){
        console.log("user is not added")
        response.status(409).json({ message: error.message });
    }
}
export const getusers= async(request,response)=>{
    try{
        const users=await User.find({})
        response.status(200).json(users)
        // console.log(users)
    }catch(error){
        response.send("error while getting the users",error)
    }
}
export const getuser=async(request,response)=>{
    console.log(request.params.email)
    try {
        const user=await User.find({_email:response.params.email})
        response.status(200).json(user)
        console.log(user)
    } 
    catch (error) {
        console.log("Error while calling")
    }
}