import React from 'react'
import RME   from '../../components/ReactMagicElement'
import Code  from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>BackgroundColor</RME>
      <RME mb30>
        <Code code={`
<RME h2>bgc: only changes the background color</RME>
<RME mb15 bgc-primary>background-color: primary</RME>
<RME mb15 bgc-secondary>background-color: secondary</RME>
<RME mb15 bgc-success>background-color: success</RME>
<RME mb15 bgc-danger>background-color: danger</RME>
<RME mb15 bgc-warning>background-color: warning</RME>
<RME mb15 bgc-info>background-color: info</RME>
<RME mb15 bgc-light>background-color: light</RME>
<RME mb15 bgc-dark>background-color: dark</RME>
<RME mb15 bgc-white>background-color: white</RME>
<RME mb15 bgc-transparent>background-color: transparent</RME>
<RME mb15 bgc-red>background-color: red;</RME>
<RME mb15 bgc={'red'}>background-color: red;</RME>
<RME h2>bg: change the background color and font color</RME>
<RME mb15 bg-primary>background-color: primary</RME>
<RME mb15 bg-secondary>background-color: secondary</RME>
<RME mb15 bg-success>background-color: success</RME>
<RME mb15 bg-danger>background-color: danger</RME>
<RME mb15 bg-warning>background-color: warning</RME>
<RME mb15 bg-info>background-color: info</RME>
<RME mb15 bg-light>background-color: light</RME>
<RME mb15 bg-dark>background-color: dark</RME>
<RME mb15 bg-white>background-color: white</RME>
<RME mb15 bg-transparent>background-color: transparent</RME>
<RME mb15 bg-red>background-color: red;</RME>
<RME mb15 bg={'red'}>background-color: red;</RME>
        `}/>
      </RME>
      <RME h2>bgc: only changes the background color</RME>
      <RME mb15 bgc-primary>background-color: primary</RME>
      <RME mb15 bgc-secondary>background-color: secondary</RME>
      <RME mb15 bgc-success>background-color: success</RME>
      <RME mb15 bgc-danger>background-color: danger</RME>
      <RME mb15 bgc-warning>background-color: warning</RME>
      <RME mb15 bgc-info>background-color: info</RME>
      <RME mb15 bgc-light>background-color: light</RME>
      <RME mb15 bgc-dark>background-color: dark</RME>
      <RME mb15 bgc-white>background-color: white</RME>
      <RME mb15 bgc-transparent>background-color: transparent</RME>
      <RME mb15 bgc-red>background-color: red;</RME>
      <RME mb15 bgc={'red'}>background-color: red;</RME>
      <RME h2>bg: change the background color and font color</RME>
      <RME mb15 bg-primary>background-color: primary</RME>
      <RME mb15 bg-secondary>background-color: secondary</RME>
      <RME mb15 bg-success>background-color: success</RME>
      <RME mb15 bg-danger>background-color: danger</RME>
      <RME mb15 bg-warning>background-color: warning</RME>
      <RME mb15 bg-info>background-color: info</RME>
      <RME mb15 bg-light>background-color: light</RME>
      <RME mb15 bg-dark>background-color: dark</RME>
      <RME mb15 bg-white>background-color: white</RME>
      <RME mb15 bg-transparent>background-color: transparent</RME>
      <RME mb15 bg-red>background-color: red;</RME>
      <RME mb15 bg={'red'}>background-color: red;</RME>
    </RME>
  )
}