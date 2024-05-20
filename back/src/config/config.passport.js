import passport from "passport"
import local from "passport-local"
import { createHash, isValidPassword } from "../utils.js"
import { users } from "../dao/factory.js"

const Strategy = local.Strategy

const initializatePassport = () => {
    passport.use(
        "registrarse",
        new Strategy(
            {passReqToCallback: true, usernameField: "email"},

            async(req, username, password, done) => {

                const { first_name, last_name, role, number, age, email } = req.body

                try{
                    const user = await users.getOne(username)
                    const message = "Ya existe un email con ese email"
                    if (user) {
                        console.log(message);
                        return done(null, false, { message: message });
                    }

                    const newUser = {
                        first_name,
                        last_name,
                        role,
                        number,
                        age,
                        email,
                        password: createHash(password)
                    }


                    const result = await users.createUser(newUser)

                    if (result) {
                        req.session.user = result
        
                        return done(null, result)
                    }
        
                    return done(null,false)
                }catch(error){
                    return done(error)
                }

            }
        )
    )
    passport.use(
        "login",
        new Strategy({usernameField: "email"}, async (username, password, done) => {
            try {
                console.log("test")
                const user = await users.getOne(username)
    
                if (!user) return done(null, false);
    
                const valid = isValidPassword(password, user.password);
    
                if (!valid) return done(null, false);
    
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user._id);
    })

    passport.deserializeUser(async (id, done) => {
        try {
            let user = await users.getById(id)

            done(null, user)
        }

        catch (error) {

            done(error)
        }
    })
}

export default initializatePassport