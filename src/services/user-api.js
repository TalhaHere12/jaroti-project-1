import axios from "axios";
const BASE_URL = "http://localhost:5000"
const api = axios.create({
    baseURL: BASE_URL
})
export const addUser = async(data) =>{
    try {
        const response = await api.post('/adduser', data)
        console.log(response.status)
        console.log(response.data)
        return response;
    } catch (error) {
        console.log("Error while calling adduser",error)
    }
} 
export const getusers=async()=>{
    try {
        return await api.get('/allusers')
    } catch (error) {
        console.log("Error while calling the api for getting all the users",error)
    }
}
export const getuser=async(email)=>{
    try{
        const respones=await api.get(`${email}`)
        return respones;
    }catch(error){
        console.log("error while calling the api for the getuser ")
    }
}
