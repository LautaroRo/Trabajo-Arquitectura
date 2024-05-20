import userModel from "./models/userModel.js";
import messagesModel from "./models/messagesModel.js"
class users{
    constructor(){

    }

    get = async () => {
        const result = await userModel.find()
        return result
    }

    getOne = async (email) => {

        const result = await userModel.findOne({email: email})
        return result
    }

    createUser = async(user) => {
        const result = await userModel.create(user)

        return result
    }

    getById = async(id) => {
        const result = await userModel.findById(id)

        return result
    }

    createMessage = async(message) => {
        let result = await messagesModel.create(message)
        return result
    }

    mostrarMensajes = async() => {

        let result = await messagesModel.find()

        return result
    }
}

export default new users()