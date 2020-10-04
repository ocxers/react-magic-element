import React from 'react'
import RME   from '../../components/ReactMagicElement'
import Code  from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Margin</RME>
      <RME mb30>
        <Code code={`
<RME b-primary mb15><RME bg-primary m15>margin: 15px</RME></RME>
<RME b-primary mb15><RME bg-primary m-15-10-5-0>margin: 15px 10px 5px 0</RME></RME>
<RME b-primary mb15><RME bg-primary m-t15-l10>margin-top: 15px; margin-left: 10px</RME></RME>
<RME b-primary mb15><RME bg-primary m-15---10>margin-top: 15px; margin-left: 10px</RME></RME>
<RME b-primary mb15><RME bg-primary m={'t15,l10'}>margin-top: 15px; margin-left: 10px</RME></RME>
<RME b-primary mb15><RME bg-primary m={'t15 l10'}>margin-top: 15px; margin-left: 10px</RME></RME>
<RME b-primary mb15><RME bg-primary m={13}>margin: 13px</RME></RME>
<RME b-primary mb15><RME bg-primary mr={13}>margin-right: 13px</RME></RME>
<RME b-primary mb15><RME bg-primary ml={13}>margin-left: 13px</RME></RME>
<RME b-primary mb15><RME bg-primary mv15>margin-top: 15px; margin-bottom: 15px;</RME></RME>
<RME b-primary mb15><RME bg-primary mh15>margin-left: 15px; margin-right: 15px;</RME></RME>
<RME b-primary mb15><RME bg-primary mt15>margin-top: 15px;</RME></RME>
<RME b-primary mb15><RME bg-primary mr15>margin-right: 15px;</RME></RME>
<RME b-primary mb15><RME bg-primary ml15>margin-left: 15px;</RME></RME>
     `}/>
      </RME>
      <RME b-success p30>
        <RME b-primary mb15><RME bg-primary m15>margin: 15px</RME></RME>
        <RME b-primary mb15><RME bg-primary m-15-10-5-0>margin: 15px 10px 5px 0</RME></RME>
        <RME b-primary mb15><RME bg-primary m-t15-l10>margin-top: 15px; margin-left: 10px</RME></RME>
        <RME b-primary mb15><RME bg-primary m-15---10>margin-top: 15px; margin-left: 10px</RME></RME>
        <RME b-primary mb15><RME bg-primary m={'t15,l10'}>margin-top: 15px; margin-left: 10px</RME></RME>
        <RME b-primary mb15><RME bg-primary m={'t15 l10'}>margin-top: 15px; margin-left: 10px</RME></RME>
        <RME b-primary mb15><RME bg-primary m={13}>margin: 13px</RME></RME>
        <RME b-primary mb15><RME bg-primary mr={13}>margin-right: 13px</RME></RME>
        <RME b-primary mb15><RME bg-primary ml={13}>margin-left: 13px</RME></RME>
        <RME b-primary mb15><RME bg-primary mv15>margin-top: 15px; margin-bottom: 15px;</RME></RME>
        <RME b-primary mb15><RME bg-primary mh15>margin-left: 15px; margin-right: 15px;</RME></RME>
        <RME b-primary mb15><RME bg-primary mt15>margin-top: 15px;</RME></RME>
        <RME b-primary mb15><RME bg-primary mr15>margin-right: 15px;</RME></RME>
        <RME b-primary mb15><RME bg-primary ml15>margin-left: 15px;</RME></RME>
      </RME>
    </RME>
  )
}