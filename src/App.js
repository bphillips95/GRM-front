// import './astro.css';
import {useState} from 'react'
import AlertContainer from './AlertContainer'
import ContactsContainer from './ContactsContainer'
import { RuxToggle } from "@astro-components/rux-toggle/rux-toggle.js";

function App() {

  const [state, setState] = useState(false)

  return (
   <div>
   <rux-toggle disabled="false" checked="false"></rux-toggle>
   {state === true ? <AlertContainer/> :  <ContactsContainer/>}
   </div>
  );
}

export default App;
