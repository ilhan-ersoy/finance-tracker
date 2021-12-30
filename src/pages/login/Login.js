import styles from "./Login.module.css"
import {useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useLogin} from "../../hooks/useLogin";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, isPending, error} = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
        console.log(email, password)
    }

    return (
        <form className={styles['login-form']}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </label>

            <label>
                <span>password:</span>
                <input
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </label>

            {isPending ? (<button disabled className="btn">Loading...</button>) : (<button onClick={(e)=>handleSubmit(e)} className="btn">Login</button>)}

            {error && <p>{error}</p>}
        </form>
    )
}

