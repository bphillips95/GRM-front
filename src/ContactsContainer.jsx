import {useState,useEffect,Fragment} from 'react'
import ContactComponent from './ContactComponent'


export default function ContactsContainer() {

    const [contacts, setContacts] = useState([])
    const [sorted, setSorted] = useState(false)

    useEffect(() => {
      fetch('https://grm-back.herokuapp.com/contacts')
      .then(r => r.json())
      .then(data => setContacts(data))
    }, [])

    const unique = [...new Set(contacts.map(contact => contact.contactState))]; 

    let contactsCopy = [...contacts]  
    let sortedContacts = contactsCopy.sort((a,b) => a.contactName - b.contactName)

    const listContacts = contacts.map(contact => 
      <ContactComponent contact={contact}   />
    )

    const listSortedContacts = sortedContacts.map(contact => 
      <ContactComponent contact={contact}   />
    )
    return (
      <table className="table"  style={{height:"650px", width:"500px",overflow:'scroll', verticalAlign:'top', display: 'inline-block',margin:'0 10'}} >
  <thead className="thead-light" >
    <tr>
      <th scope="col" style={{width:"100px"}}>Contact #</th>
      <th scope="col" style={{width:"10px"}}>Name</th>
      <th scope="col" style={{width:"100px"}}>Contact Status</th>
      <th scope="col" >Timestamp</th>
    </tr>
    <th>Total Contacts {contacts.length} </th>
    <th>Contact States {unique} </th>
    <button onClick={() => setSorted(!sorted)} >Sort Contacts</button>
  </thead>
  <tbody>
    {sorted ? listSortedContacts : listContacts}
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
