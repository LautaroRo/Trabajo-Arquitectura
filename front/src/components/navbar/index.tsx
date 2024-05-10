import { Link } from "react-router-dom"


const NavBar = () => {
    return (
    <div>
        <nav>
            <ul>
                <Link to="/Login"><li>Login</li></Link>
                <Link to="/"><li>Registrarse</li></Link>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar