import { useState } from "react"


const Register = () => {

    const [error, setError] = useState(null)

    const form = (e) => {
        e.preventDefault()

        let first_name = e.target.first_name.value
        let last_name = e.target.last_name.value
        let email = e.target.email.value
        let age = e.target.age.value
        let number = e.target.number.value
        let role = e.target.role.value
        let password = e.target.password.value

        const user = {
            first_name,
            last_name,
            email,
            age,
            number,
            role,
            password
        }

        fetch("http://localhost:3030", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            console.log(response)
            return window.location.href = "http://localhost:5173/login"


        })
        .catch(error => {
            console.error("Hubo un problema al enviar la solicitud:", error);
        });

        e.target.first_name.value = "";
        e.target.last_name.value = "";
        e.target.email.value = "";
        e.target.age.value = "";
        e.target.number.value = "";
        e.target.password.value = "";
    }


    return (
        <div>
            <form onSubmit={form}>
                <input type="text" name="first_name" />
                <input type="text" name="last_name" />
                <input type="email" name="email" />
                <input type="number" name="age" />
                <input type="number" name="number" />
                <select name="role">
                    <option value="Admin">Admin</option>
                    <option value="Usuario">Usuario</option>
                </select>
                <input type="password" name="password" />

                <button type="submit">Crear user</button>
            </form>

            {
                error !== null
                    ?
                    <h1>{error}</h1>
                    :
                    null
            }
        </div>
    )
}

export default Register