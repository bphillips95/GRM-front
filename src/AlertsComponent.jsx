import {Fragment} from 'react'

export default function AlertsComponent({alert}) {

  let time = new Date(alert.errorTime).toString().slice(15,25)

    return (
        <Fragment>
         {/* <rux-tabs aria-labelledby="tab-set-id-1">
        <rux-tab aria-labelledby="tab-id-1">{alert.errorCategory}</rux-tab>
        <rux-tab aria-labelledby="tab-id-2" >{alert.errorMessage}</rux-tab>
        <rux-tab aria-labelledby="tab-id-3">{alert.errorTime}</rux-tab>
      </rux-tabs> */}
      <tr >
      <th scope="row">{alert.errorCategory}</th>
      <td>{alert.errorMessage}</td>
      <td>{time}</td>
    </tr>
        </Fragment>
    )
}
