import { useEffect } from "react"


const Profile = () => {
    useEffect(()=>{
        const traerUsuario = () => {
            fetch("http://localhost:3030/Profile",{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                if(!response.ok) return console.log("error")

                return response.json()
            }).then(data =>{
                console.log(data, "hola")
            }).catch(error => {
                console.log(error)
            })
        }
        traerUsuario()
    },[])

    return (
        <div>Profile</div>
    )
}

export default Profile