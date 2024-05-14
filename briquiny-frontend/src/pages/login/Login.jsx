import user from "../../assets/user-solid.svg"
import {useState} from "react";

function login(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('')
    const handleSubmit = async (event) =>{
        event.preventDefault()

        const loginData = {
            name,
            password
        }

        try{
            const response =  await fetch('http://localhost:3000/briquiny/admin/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })

            if(response.status === 200){
                const data = await response.json();
                const token = data.token;
                const userId = data.userId;
                localStorage.setItem('token', token)
                localStorage.setItem('userId', userId)
                if(userId === "GSB-BRIQUINY"){
                    window.location.href = '/GSB-briquiny'
                }else if(userId === "BRIQUINY-LOGBESSOU"){
                    window.location.href = '/briquiny-logbessou'
                }else if(userId === "BRIQUINY-KOTTO"){
                    window.location.href = '/briquiny-kotto'
                }
            }else{
                alert('Mauvaises informations entrées')
                console.error('Erreur de connexion')
            }
        }catch (error){
            console.error(error)
            alert(error)
        }
    }
    return(
        <div className="login">
            <img src={user} className="user-image"/>
            {/*<h2 className="conn-message">Connexion à la page d'administration</h2>*/}
            <form className="form-login" onSubmit={handleSubmit} method="POST">
                <label>Nom de la structure</label>
                <input type="text"  className="structure-name" placeholder="Nom de la structure" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Mot de passe</label>
                <input type="password"  placeholder="password"
                       className="password-admin"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" className="connect"/>
            </form>
        </div>
    )
}

export default login