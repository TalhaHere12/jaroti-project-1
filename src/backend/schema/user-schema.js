import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        registrantionDate: {
            type: Date,
            default: Date.now
        },
    }
)
const user = mongoose.model('user', userSchema)
export default user;