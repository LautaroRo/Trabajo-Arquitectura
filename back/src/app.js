import express from "express"
import cors from "cors"
import { entorno } from "./config/config.env.js"
import session from "express-session"
import MongoStore from "connect-mongo"
import routeUsers from "./routes/routeUsers.js"
import initializatePassport from "./config/config.passport.js"
import passport from "passport"


const PORT = entorno.PORT
const SECRETO = entorno.SECRETO
const MONGOURL = entorno.MONGOURL
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use(session({
    secret: SECRETO,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: MONGOURL,
        ttl: 3600
    })
}))
initializatePassport()
app.use(passport.initialize())
app.use(passport.session())


app.use("/", routeUsers.getRouter())
app.listen(PORT, () => console.log("corriendo en el puerto", PORT))

