import {useState} from 'react'
import {Link,useHistory } from 'react-router-dom'

export default function RegisterBox(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://grm-back.herokuapp.com/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                  user: {
                      username: username,
                      password: password,
                  }  
                })
        })
        .then(r => r.json())
        .then(resp => { 
            console.log(resp)
            if(resp.jwt) {
            localStorage.setItem("token", resp.jwt)
            localStorage.setItem("user", resp.user.username)
            history.push('/')
        } 
        })
        .catch(err => console.log(err))
        }

    return (
        <div class="container">
        <div class="d-flex justify-content-center h-100">
            <div class="card">
                <div class="card-header">
                    <h3>Register</h3>
                    <div class="d-flex justify-content-end social_icon">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span><i class="fab fa-google-plus-square"></i></span>
                        <span><i class="fab fa-twitter-square"></i></span>
                    </div>
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
                            <input type="submit" value="Register" class="btn float-right login_btn"/>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                        Already have an account? <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
