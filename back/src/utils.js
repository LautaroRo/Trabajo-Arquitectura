import bcrypt from "bcrypt"
import {fileURLToPath} from "url"
import { dirname } from "path";
export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValidPassword = (password, user) => {
    console.log(password,user)
    const result = bcrypt.compareSync(password, user)

    return result
}

const __filname = fileURLToPath(import.meta.url)
const __dirname = dirname(__filname)

export default __dirname