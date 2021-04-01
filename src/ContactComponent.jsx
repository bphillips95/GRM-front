import {Fragment} from 'react'

export default function ContactComponent({contact}) {

    // let [ContactStatus,ContactState,ContactName,contactBeginTimestamp,contactEndTimestamp] = contact
    let start = new Date(contact.contactBeginTimestamp).toString().slice(15,25)
    let end = new Date(contact.contactEndTimestamp).toString().slice(15,25)

    return (
         <Fragment>
                  {/* <rux-tabs aria-labelledby="tab-set-id-1">
        <rux-tab aria-labelledby="tab-id-1">{contact.contactState}</rux-tab>
        <rux-tab aria-labelledby="tab-id-2" >{contact.contactStatus}</rux-tab>
        <rux-tab aria-labelledby="tab-id-3">{contact.contactName}</rux-tab>
        <rux-tab aria-labelledby="tab-id-4">{contact.contactBeginTimestamp} - {contact.contactEndTimestamp} </rux-tab>
      </rux-tabs> */}
      <tr>
      <th scope="row">{contact.id}</th>
      <td>{contact.contactName}</td>
      <td>{contact.contactStatus}</td>
      <td>{start} - {end} UTC </td>
    </tr>
        </Fragment>
    )
}
