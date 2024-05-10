import bcrypt from "bcrypt"

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValidPassword = (password, user) => {
    console.log(password,user)
    const result = bcrypt.compareSync(password, user)

    return result
}