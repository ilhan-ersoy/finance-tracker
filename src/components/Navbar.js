import styles from "./Navbar.module.css"
import {Link} from "react-router-dom";
import { useLogout } from "../hooks/useLogout"
import {useAuthContext} from "../hooks/useAuthContext";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export default function Navbar() {


    const {logout} = useLogout()
    const {user} = useAuthContext()

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>
                    {user && (
                        <div>Welcome, {user.displayName}</div>
                    )}

                    {!user && (
                        <div>Moneybox</div>
                    )}
                </li>

                {user ?
                    <li>
                        <button className="btn" onClick={()=>logout()}>
                            Logout
                        </button>
                    </li>
                    :
                    (
                        <div style={{display:'flex'}}>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup">
                                    Signup
                                </Link>
                            </li>
                        </div>
                    )
                }
            </ul>
        </nav>
    )
}

