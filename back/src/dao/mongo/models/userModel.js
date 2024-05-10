import mongoose from "mongoose";

const { Schema } = mongoose;
const collections = "users"

const SchemaDB = new Schema ({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    number: Number,
    role: String,
    password: String
})


const userModel = mongoose.model(collections, SchemaDB)

export default userModel