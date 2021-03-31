import {useState,useEffect,Fragment} from 'react'
import ContactComponent from './ContactComponent'


export default function ContactsContainer() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
      fetch('https://grm-back.herokuapp.com/contacts')
      .then(r => r.json())
      .then(data => setContacts(data))
    }, [])

    const listContacts = contacts.map(contact => 
        <ContactComponent contact={contact}   />
      )

    return (
      <table className="table"  style={{width:"500px"}} >
  <thead className="thead-light" >
    <tr>
      <th scope="col" style={{width:"100px"}}>Contact #</th>
      <th scope="col" style={{width:"10px"}}>Name</th>
      <th scope="col" style={{width:"100px"}}>Contact Status</th>
      <th scope="col" >Timestamp</th>
    </tr>
  </thead>
  <tbody>
    {listContacts}
  </tbody>
</table>
    //   <Fragment>
    //   <rux-tabs id="tab-set-id-1">
    //   <rux-tab id="tab-id-1">Contact State</rux-tab>
    //   <rux-tab id="tab-id-2">Contact Status</rux-tab>
    //   <rux-tab id="tab-id-3">Contact Name</rux-tab>
    //   <rux-tab id="tab-id-4">Contact Timestamp</rux-tab>
    // </rux-tabs>
    // {listContacts}
    // </Fragment>
    )
}
