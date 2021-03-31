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
        <Fragment>
        <rux-tabs id="tab-set-id-1">
        <rux-tab id="tab-id-1">Error Category</rux-tab>
        <rux-tab id="tab-id-2">Error Message</rux-tab>
        <rux-tab id="tab-id-3">Error Time</rux-tab>
      </rux-tabs>
      {listAlerts}
      </Fragment>
    )
}
