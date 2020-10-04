import React            from 'react'
import RME              from '../../components/ReactMagicElement'
import Code             from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>FontWeight</RME>
      <RME mb30>
        <Code code={`
<RME b mb15 fw100>font-weight: 100</RME>
<RME b mb15 fw={700}>font-weight: 700;</RME>
<RME b mb15 fw700>font-weight: 700;</RME>
     `}/>
      </RME>
      <RME b p30>
        <RME b mb15 fw100>font-weight: 100</RME>
        <RME b mb15 fw={700}>font-weight: 700;</RME>
        <RME b mb15 fw700>font-weight: 700;</RME>
      </RME>
    </RME>
  )
}