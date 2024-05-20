import RouterMain from "./routeMain.js";
import passport from "passport";


class routeUsers extends RouterMain{
    init(){
        this.get("/Profile", this.traerUsuarios)
        this.post('/', passport.authenticate('registrarse', { 
            failureRedirect: '/failRegister' 
        }));
        
        this.post('/Login', passport.authenticate('login'), (req, res) => {
            try{
                req.session.user = {
                    first_name: req.user.first_name,
                    last_name: req.user.last_name,
                    email: req.user.email,
                    role: req.user.role
                };
                res.json({succes: req.session.user})
            }catch{
                res.send("No se logro")
            }
        });
    }


    async traerUsuarios(req,res){
        const nombreUsuario = req.session.user.first_name;
        res.send(`Hola, ${nombreUsuario}!`);
    }

}

export default new routeUsers()