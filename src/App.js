// import './astro.css';
import {useState,Fragment} from 'react'
import LoginBox from './LoginBox'
import RegisterBox from './RegisterBox'
import Home from './Home'
import { RuxButton } from '@astrouxds/rux-button/rux-button.js';
import { RuxPushButton } from '@astrouxds/rux-push-button/rux-push-button.js';
import {Route, Switch} from "react-router-dom";

function App() {

  const [state, setState] = useState(false)
  // watch video on web components!!!

  return (
   <Switch>
   <Route path='/register' component={RegisterBox} />
   <Route path='/login' component={LoginBox} />
   <Route path='/' component={Home} />
  {/* <rux-push-button checked>Push Button Label</rux-push-button>
   <rux-button size="large" disabled outline>
  Large Disabled Outline Button
</rux-button> */}
   {/* {state === true ? <AlertContainer/> :  <ContactsContainer/>} */}
    </Switch>
  );
}

export default App;
