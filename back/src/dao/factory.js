import { entorno } from "../config/config.env.js";
import mongoose from "mongoose";
export let users;

switch (entorno.PERSISTENCIA) {
    case "MONGO":
        mongoose.connect(entorno.MONGOURL)    
        const {default: usersMongo} = await import("./mongo/mongo.Users.js")
        users = usersMongo
        break;

    default:
        break;
}