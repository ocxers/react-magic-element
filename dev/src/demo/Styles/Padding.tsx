import React from 'react'
import RME   from '../../components/ReactMagicElement'
import Code  from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Padding</RME>
      <RME mb30>
        <Code code={`
<RME b-primary mb15 p15><RME bg-primary>padding: 15px</RME></RME>
<RME b-primary mb15 p-15-10-5-0><RME bg-primary>padding: 15px 10px 5px 0</RME></RME>
<RME b-primary mb15 p-t15-l10><RME bg-primary>padding-top: 15px; padding-left: 10px</RME></RME>
<RME b-primary mb15 p-15---10><RME bg-primary>padding-top: 15px; padding-left: 10px</RME></RME>
<RME b-primary mb15 p={'t15,l10'}><RME bg-primary>padding-top: 15px; padding-left: 10px</RME></RME>
<RME b-primary mb15 p={'t15 l10'}><RME bg-primary>padding-top: 15px; padding-left: 10px</RME></RME>
<RME b-primary mb15 p={13}><RME bg-primary>padding: 13px</RME></RME>
<RME b-primary mb15 pr={13}><RME bg-primary>padding-right: 13px</RME></RME>
<RME b-primary mb15 pl={13}><RME bg-primary>padding-left: 13px</RME></RME>
<RME b-primary mb15 pv15><RME bg-primary>padding-top: 15px; padding-bottom: 15px;</RME></RME>
<RME b-primary mb15 ph15><RME bg-primary>padding-left: 15px; padding-right: 15px;</RME></RME>
<RME b-primary mb15 pt15><RME bg-primary>padding-top: 15px;</RME></RME>
<RME b-primary mb15 pr15><RME bg-primary>padding-right: 15px;</RME></RME>
<RME b-primary mb15 pb15><RME bg-primary>padding-bottom: 15px;</RME></RME>
<RME b-primary mb15 pl15><RME bg-primary>padding-left: 15px;</RME></RME>
     `}/>
      </RME>
      <RME b-success p30>
        <RME b-primary mb15 p15><RME bg-primary>padding: 15px</RME></RME>
        <RME b-primary mb15 p-15-10-5-0><RME bg-primary>padding: 15px 10px 5px 0</RME></RME>
        <RME b-primary mb15 p-t15-l10><RME bg-primary>padding-top: 15px; padding-left: 10px</RME></RME>
        <RME b-primary mb15 p-15---10><RME bg-primary>padding-top: 15px; padding-left: 10px</RME></RME>
        <RME b-primary mb15 p={'t15,l10'}><RME bg-primary>padding-top: 15px; padding-left: 10px</RME></RME>
        <RME b-primary mb15 p={'t15 l10'}><RME bg-primary>padding-top: 15px; padding-left: 10px</RME></RME>
        <RME b-primary mb15 p={13}><RME bg-primary>padding: 13px</RME></RME>
        <RME b-primary mb15 pr={13}><RME bg-primary>padding-right: 13px</RME></RME>
        <RME b-primary mb15 pl={13}><RME bg-primary>padding-left: 13px</RME></RME>
        <RME b-primary mb15 pv15><RME bg-primary>padding-top: 15px; padding-bottom: 15px;</RME></RME>
        <RME b-primary mb15 ph15><RME bg-primary>padding-left: 15px; padding-right: 15px;</RME></RME>
        <RME b-primary mb15 pt15><RME bg-primary>padding-top: 15px;</RME></RME>
        <RME b-primary mb15 pr15><RME bg-primary>padding-right: 15px;</RME></RME>
        <RME b-primary mb15 pb15><RME bg-primary>padding-bottom: 15px;</RME></RME>
        <RME b-primary mb15 pl15><RME bg-primary>padding-left: 15px;</RME></RME>
      </RME>
    </RME>
  )
}