import React from 'react'
import RME   from '../components'

export default (props: any) => {
  return (
    <RME p15>
      <RME h1 b-danger>Border</RME>
      <RME b bhw14 bvw25 bts={'double'} bc-success btc={'danger'} brc={'yellow'} r-34>
        <RME b bhw14 bvw35 bs-double bc-success btc-danger blc-info brc={'dark'} r-50 bbc={'success'}>
          <ul>
            <li>Border:</li>
            <li>b-primary: border-color: primary</li>
            <li>btw5: border-top-width: 5pxy</li>
            <li>btc={'red'}: border-top-color: red</li>
            <li>brw11: border-right-width: 11px</li>
            <li>brs={'dashed'}: border-right-style: dashed</li>
          </ul>
        </RME>
        <RME b bw12 bs-dashed>
          <ul>
            <li>Border:</li>
            <li> b bw12 bs-groove</li>
          </ul>
        </RME>
        <RME b bw14 brs-ridge r-5>
          <ul>
            <li>Border:</li>
            <li>b-primary: border-color: primary</li>
            <li>btw5: border-top-width: 5pxy</li>
            <li>btc={'red'}: border-top-color: red</li>
            <li>brw11: border-right-width: 11px</li>
            <li>brs={'dashed'}: border-right-style: dashed</li>
          </ul>
        </RME>
        <RME b bw14 bs-inset r-5>
          <ul>
            <li>Border:</li>
            <li>b-primary: border-color: primary</li>
            <li>btw5: border-top-width: 5pxy</li>
            <li>btc={'red'}: border-top-color: red</li>
            <li>brw11: border-right-width: 11px</li>
            <li>brs={'dashed'}: border-right-style: dashed</li>
          </ul>
        </RME>
        <RME b bw14 bs-outset r-5>
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
    </RME>
  )
}