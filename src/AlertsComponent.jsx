import {Fragment} from 'react'

export default function AlertsComponent({alert}) {
    return (
        <Fragment>
         <rux-tabs aria-labelledby="tab-set-id-1">
        <rux-tab aria-labelledby="tab-id-1">{alert.errorCategory}</rux-tab>
        <rux-tab aria-labelledby="tab-id-2" >{alert.errorMessage}</rux-tab>
        <rux-tab aria-labelledby="tab-id-3">{alert.errorTime}</rux-tab>
      </rux-tabs>
        </Fragment>
    )
}
