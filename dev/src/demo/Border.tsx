import React from 'react'
import RME from "../components"

export default (props: any) => {
    return (
        <RME p15>
            <RME h1 b-danger>Border</RME>
            <RME b bw={'13px'} rtr13 rbl={'17px'} bts={'double'} bc-success btc-danger bc={'red'}>
                <ul>
                    <li>Border:</li>
                    <li>b-primary: border-color: primary</li>
                    <li>btw5: border-top-width: 5pxy</li>
                    <li>btc={'red'}: border-top-color: red</li>
                    <li>brw11: border-right-width: 11px</li>
                    <li>brs={'dashed'}: border-right-style: dashed</li>
                </ul>
            </RME>
        </RME>
    )
}