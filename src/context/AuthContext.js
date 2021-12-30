import {createContext, useEffect, useReducer} from "react"
import firebase from 'firebase/app'
import {projectAuth} from "../firebase/config";
import {Redirect} from "react-router";


export const AuthContext = createContext()



export const authReducer = (state,action) => {

    switch (action.type) {
        case 'LOGIN':
            // useHistory()
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'AUTH_IS_READY':
            return { ...state, user:action.payload , authIsReady: true }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {


    const [state,dispatch] = useReducer(authReducer, {
        user:null,
        authIsReady:false
    })

    useEffect(()=>{
        projectAuth.onAuthStateChanged((user)=>{
            dispatch({type:'AUTH_IS_READY', payload:user})
        })
    }, [])


    console.log('Auth context state', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}