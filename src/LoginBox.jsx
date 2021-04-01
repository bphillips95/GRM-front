import './LoginBox.css'
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

export default function LoginBox(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()
    let user = localStorage.getItem('user')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("https://grm-back.herokuapp.com/login",{
            // fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                { 
                //   user: {
                    username: username,
                    password: password
                //   }  
                } )
        })
        .then(r => r.json())
        .then(resp => { 
            console.log(resp)
            if(resp.jwt) {
            localStorage.setItem("token", resp.jwt)
            localStorage.setItem("user", resp.user.username)
            // localStorage.setItem("user_id", resp.user.id)
            history.push('/')
        } else {
            alert("Wrong username or password")
        }
        })
        .catch(err => console.log(err))
        }

        if(user){
            return(
            <h2>
                You are already logged in. Please return to the <Link to='/'>Home</Link> page.
            </h2>
            )} else {
                return (
                    <div class="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={handleSubmit} >
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="username"
                                        onChange={(e) => setUsername(e.target.value)} value={username}
                                    />
                                    
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password"
                                        onChange={(e) => setPassword(e.target.value)} value={password}
                                    />
                                </div>
                                <div class="row align-items-center remember">
                                    <input type="checkbox"/>Remember Me
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn"/>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account? <Link to='/register'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
}
}
