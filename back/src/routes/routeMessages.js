import RouterMain from "./routeMain.js";
import passport from "passport";


class routeMessages extends RouterMain{
    init(){
        this.get("/message", this.message)
    }

    async message (req,res) {
        console.log(req.session.user)
        res.render("home", {user: req.session.user})
    }

}

export default new routeMessages()