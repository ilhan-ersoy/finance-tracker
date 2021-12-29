import styles from "./Signup.module.css"
import {useState} from "react";
import {useSignup} from "../../hooks/useSignup";

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const {signup, error, isPending} = useSignup()


    const handleSignup = (e) => {
        e.preventDefault()
        console.log(email, password, displayName)
        signup(email, password, displayName)

    }

    return (
        <form className={styles['signup-form']}>
            <h2>Register</h2>
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

            <label>
                <span>display name:</span>
                <input
                    type="text"
                    onChange={(e)=>setDisplayName(e.target.value)}
                />
            </label>

            {/*<button onClick={(e)=>handleSignup(e)} className="btn">Signup</button>*/}
            {!isPending
                ?
                (<button onClick={(e)=>handleSignup(e)} className="btn">Signup</button>)
                :
                (<button onClick={(e)=>handleSignup(e)} className="btn">Loading...</button>)
            }
            {error && <p>{error}</p>}
        </form>
    )
}

