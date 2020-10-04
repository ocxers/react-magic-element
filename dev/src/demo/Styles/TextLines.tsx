import React            from 'react'
import RME              from '../../components/ReactMagicElement'
import Code             from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Ellipsis Line Clamp</RME>
      <RME mb30>
        <Code code={`
<RME b mb15 fs9>font-size: 9</RME>
<RME b mb15 fs={72}>font-size: 72;</RME>
<RME b mb15 fs80>font-size: 80;</RME>
     `}/>
      </RME>
      <RME b p30>
        <RME primary fs24 mb15 w240 lc1>lc1: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
        <RME secondary fs24 mb15 w240 lc2>lc2: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
        <RME success fs24 mb15 w240 lc3>lc3: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
        <RME danger fs24 mb15 w240 lc4>lc4: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
        <RME info fs24 mb15 w200 lc={7}>lc=7: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
      </RME>
    </RME>
  )
}