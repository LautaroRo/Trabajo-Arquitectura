import express from "express"
import cors from "cors"
import { entorno } from "./config/config.env.js"
import session from "express-session"
import MongoStore from "connect-mongo"
import routeUsers from "./routes/routeUsers.js"
import routeMessages from "./routes/routeMessages.js"
import initializatePassport from "./config/config.passport.js"
import passport from "passport"
import {Server} from "socket.io"
import { users } from "./dao/factory.js"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"



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
app.use("/", routeMessages.getRouter())





app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")
app.use(express.static(__dirname + '/public'));

const servidor = app.listen(PORT, () => console.log("corriendo en el puerto", PORT))


const io = new Server(servidor)
const msg = []
io.on("connection", socket => {

    socket.on("message", (data) => {
        msg.push(data)
        users.createMessage(data)
        io.emit("messageLogs", msg)

    })

})

