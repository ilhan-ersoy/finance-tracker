import styles from "./Home.module.css"
import {useAuthContext} from "../../hooks/useAuthContext";
export default function Home()  {

    const {user} = useAuthContext()
    return (
        <div className={styles.taner}>
            <div className={styles.name}>{user.displayName}</div>
        </div>

    )
}

