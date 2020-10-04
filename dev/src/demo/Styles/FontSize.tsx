import React            from 'react'
import RME              from '../../components/ReactMagicElement'
import Code             from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>FontSize</RME>
      <RME mb30>
        <Code code={`
<RME b mb15 fs9>font-size: 9</RME>
<RME b mb15 fs={72}>font-size: 72;</RME>
<RME b mb15 fs80>font-size: 80;</RME>
     `}/>
      </RME>
      <RME b p30>
        <RME b mb15 fs9>font-size: 9</RME>
        <RME b mb15 fs={72}>font-size: 72;</RME>
        <RME b mb15 fs80>font-size: 80;</RME>
      </RME>
    </RME>
  )
}