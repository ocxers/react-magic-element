import React from 'react'
import RME from '../../../components/ReactMagicElement'
import Code from '../../Code'

export default (props: any) => {
  return (
    <>
      <RME h2>Alignment</RME>
      <RME p>
        Left, Center, Right
      </RME>
      <RME mb30>
        <Code code={`
<RME flex>
  <RME w-100 flex b p15 center h100 mb15>
    <RME bgc-primary w100 h60>Center</RME>
  </RME>
  <RME w-100 flex b p15 left h100 mb15>
    <RME bgc-primary w100 h60>Left</RME>
  </RME>
  <RME w-100 flex b p15 right h100 mb15>
    <RME bgc-primary w100 h60>Right</RME>
  </RME>
</RME>
     `}/>
      </RME>
      <RME flex>
        <RME w-100 flex b p15 center h100 mb15>
          <RME bgc-primary w100 h60>Center</RME>
        </RME>
        <RME w-100 flex b p15 left h100 mb15>
          <RME bgc-primary w100 h60>Left</RME>
        </RME>
        <RME w-100 flex b p15 right h100 mb15>
          <RME bgc-primary w100 h60>Right</RME>
        </RME>
      </RME>
    </>
  )
}