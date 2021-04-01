import {useState,useEffect,Fragment} from 'react'
import AlertsComponent from './AlertsComponent'
import { RuxTabs } from '@astrouxds/rux-tabs/rux-tabs.js';

export default function AlertContainer() {

    const [alerts, setAlerts] = useState([])

    useEffect(() => {
        fetch('https://grm-back.herokuapp.com/alerts')
        .then(r => r.json())
        .then(data => setAlerts(data))
      }, [])

      const listAlerts = alerts.map(alert => 
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
      <table className="table" style={{width:"500px",overflow:'scroll', verticalAlign:'top', display: 'inline-block'}}  >
  <thead className="thead-light" >
    <tr>
      <th scope="col" style={{width:"100px"}}>Error Category</th>
      <th scope="col" style={{width:"10px"}}>Error Message</th>
      <th scope="col" style={{width:"100px"}}>Error Time</th>
    </tr>
  </thead>
  <tbody>
    {listAlerts}
  </tbody>
</table>
    )
}
