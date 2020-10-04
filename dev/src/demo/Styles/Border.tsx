import React from 'react'
import RME   from '../../components/ReactMagicElement'
import Code  from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Border</RME>
      <RME mb30>
        <Code code={`
<RME mb15 b>border: 1px solid</RME>
<RME mb15 b-primary>border: 1px solid primary</RME>
<RME mb15 b bc-primary>border-color: primary</RME>
<RME mb15 b btc-primary>border-top-color: primary</RME>
<RME mb15 b bw10>border-width: 10px</RME>
<RME mb15 b bw10 bs-double>border-width: 10px; border-style: double</RME>
<RME mb15 b bw-10>border-width: 10px</RME>
<RME mb15 b bw----10>border-left-width: 10px</RME>
<RME mb15 b bw-t10>border-top-width: 10px</RME>
<RME mb15 b bw-t10-r5>border-top-width: 10px; border-right-width: 5px</RME>
<RME mb15 b bw={'10,5'}>border-width: 10px 5px</RME>
<RME mb15 b bw={'10 5'}>border-width: 10px 5px</RME>
<RME mb15 b bw={'t10 r5'}>border-top-width: 10px; border-right-width: 5px</RME>
<RME mb15 b bw={'t10 r5'}>border-top-width: 10px; border-right-width: 5px</RME>
<RME mb15 b btw10>border-top-width: 10px</RME>
<RME mb15 b brw10>border-right-width: 10px</RME>
<RME mb15 b bbw10>border-bottom-width: 10px</RME>
<RME mb15 b blw10>border-left-width: 10px</RME>
<RME mb15 b r5>border-radius: 5px</RME>
<RME mb15 b r-5>border-radius: 5%</RME>
<RME mb15 b bhw14 bvw35 bs-double bc-success btc-danger blc-info brc={'dark'} r-50 bbc={'success'}>
  border-width: 35px 14px; <br/>
  border-style: double; <br/>
  border-color: danger dark success info; <br/>
  border-radius: 50%;
</RME>
     `}/>
      </RME>
      <RME b p30>
        <RME mb15 b>border: 1px solid</RME>
        <RME mb15 b-primary>border: 1px solid primary</RME>
        <RME mb15 b bc-primary>border-color: primary</RME>
        <RME mb15 b btc-primary>border-top-color: primary</RME>
        <RME mb15 b bw10>border-width: 10px</RME>
        <RME mb15 b bw10 bs-double>border-width: 10px; border-style: double</RME>
        <RME mb15 b bw-10>border-width: 10px</RME>
        <RME mb15 b bw----10>border-left-width: 10px</RME>
        <RME mb15 b bw-t10>border-top-width: 10px</RME>
        <RME mb15 b bw-t10-r5>border-top-width: 10px; border-right-width: 5px</RME>
        <RME mb15 b bw={'10,5'}>border-width: 10px 5px</RME>
        <RME mb15 b bw={'10 5'}>border-width: 10px 5px</RME>
        <RME mb15 b bw={'t10 r5'}>border-top-width: 10px; border-right-width: 5px</RME>
        <RME mb15 b bw={'t10 r5'}>border-top-width: 10px; border-right-width: 5px</RME>
        <RME mb15 b btw10>border-top-width: 10px</RME>
        <RME mb15 b brw10>border-right-width: 10px</RME>
        <RME mb15 b bbw10>border-bottom-width: 10px</RME>
        <RME mb15 b blw10>border-left-width: 10px</RME>
        <RME mb15 b r5>border-radius: 5px</RME>
        <RME mb15 b r-5>border-radius: 5%</RME>
        <RME mb15 b bhw14 bvw35 bs-double bc-success btc-danger blc-info brc={'dark'} r-50 bbc={'success'}>
          border-width: 35px 14px; <br/>
          border-style: double; <br/>
          border-color: danger dark success info; <br/>
          border-radius: 50%;
        </RME>
      </RME>
    </RME>
  )
}