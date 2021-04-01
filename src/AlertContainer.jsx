import {useState,useEffect,Fragment} from 'react'
import AlertsComponent from './AlertsComponent'
import { RuxTabs } from '@astrouxds/rux-tabs/rux-tabs.js';

export default function AlertContainer() {

    const [alerts, setAlerts] = useState([])
    const [sorted, setSorted] = useState(false)

    useEffect(() => {
        fetch('https://grm-back.herokuapp.com/alerts')
        .then(r => r.json())
        .then(data => setAlerts(data))
      }, [])

      let alertsCopy = [...alerts]  
      let sortedAlerts = alertsCopy.sort((a,b) => a.errorCategory.localeCompare(b.errorCategory))

      const listAlerts = alerts.map(alert => 
        <AlertsComponent alert={alert}   />
      )
      const listSortedAlerts = sortedAlerts.map(alert => 
        <AlertsComponent alert={alert}   />
      )

    return (
      //   <Fragment>
      //   <rux-tabs id="tab-set-id-1">
      //   <rux-tab id="tab-id-1">Error Category</rux-tab>
      //   <rux-tab id="tab-id-2">Error Message</rux-tab>
      //   <rux-tab id="tab-id-3">Error Time</rux-tab>
      // </rux-tabs>
      // {listAlerts}
      // </Fragment>
      <table className="table" style={{height:"650px", width:"500px",overflow:'scroll', verticalAlign:'top', display: 'inline-block'}}  >
  <thead className="thead-light" >
    <tr>
      <th scope="col" style={{width:"100px"}}>Error Category</th>
      <th scope="col" style={{width:"10px"}}>Error Message</th>
      <th scope="col" style={{width:"100px"}}>Error Time</th>
    </tr>
    <button onClick={() => setSorted(!sorted)}>Sort Errors</button>
  </thead>
  <tbody>
    {sorted ? listSortedAlerts : listAlerts}
  </tbody>
</table>
    )
}
