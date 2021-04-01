import {Fragment} from 'react'
import Header from './Header'
import AlertContainer from './AlertContainer'
import ContactsContainer from './ContactsContainer'
import Login from './LoginBox'

export default function Home(props) {

    let user = localStorage.getItem('user')

    if(user){
    return (
        <Fragment >
            <AlertContainer style={{float:'left'}} />
            <Header props={props} />
            <ContactsContainer style={{float:'right'}} />
        </Fragment>
    )
    } else {
        return(
            <Login/>
        )
    }
}
