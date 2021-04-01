import React from 'react'
import { useHistory } from "react-router-dom"

export default function Header(props) {

    let history = useHistory()
    let user = localStorage.getItem('user')

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        history.push('/login')
    }

    return (
        <div style={{display: 'inline-block'}} >
            <h3>
                Welcome {user}
            </h3>
            <button onClick={logout} > 
                Log out
            </button>
        </div>
    )
}
