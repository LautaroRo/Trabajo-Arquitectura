

const Login = () => {
/*--
    const login = (e) => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value

        const user = {
            email,
            password
        }

        fetch("http://localhost:3030/Login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            return response.json()
        }).then(data => {
            if(data){
                console.log(data)
                //window.location.href = "http://localhost:5173/profile"
            }
        })
        .catch(error => {
            console.error("Hubo un problema al enviar la solicitud:", error);
        });

    }
    --*/
    return (
        <div>
            <form action="http://localhost:3030/Login" method="POST">
                <input type="text" name="email" />
                <input type="password" name="password" />
                <button type="submit">Logearse</button>
            </form>
        </div>
    )
}

export default Login