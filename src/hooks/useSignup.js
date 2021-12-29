import {useState} from "react"
import {projectAuth} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()
    

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if (!res) {
                throw new Error('signup failed')
            }

            // add display name to user
            await res.user.updateProfile({ displayName })
            
            setIsPending(false)
            setError(null)

            dispatch({ type: 'LOGIN', payload: res.user })

        }
        catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }

    }

    return {error, isPending, signup}
}