import React from 'react'
import RME   from '../../components/ReactMagicElement'
import Code  from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>BoxSizing</RME>
      <RME mb30>
        <Code code={`
<RME h2 primary>Builtin BoxSizing:</RME>
<RME b row p30 mb15>
  <RME col2><RME b-primary mini></RME>mini: 16px x 16px.</RME>
  <RME col2><RME b-secondary small></RME>small: 24px x 24px.</RME>
  <RME col3><RME b-success medium></RME>medium: 32px x 32px.</RME>
  <RME col3><RME b-danger big></RME>big: 48px x 48px.</RME>
  <RME col4><RME b-warning large></RME>large: 64px x 64px.</RME>
  <RME col4><RME b-info huge></RME>huge:96px x 96px.</RME>
</RME>
<RME h2 primary>Width Height</RME>
<RME b p30 row mb15>
  <RME mb15 w-33><RME b-dark w160 h120></RME>width: 160px; height: 120px</RME>
  <RME mb15 w-33><RME b-dark w={160} h={120}></RME>width: 160px; height: 120px</RME>
</RME>
<RME h2 primary>Box</RME>
<RME b p30 row mb15>
  <RME mb15 w-25><RME b-primary box-128>box-128</RME>width: 128px; height: 128px</RME>
  <RME mb15 w-25><RME b-secondary box-128-64>box-128-64</RME>width: 128px; height: 64px</RME>
  <RME mb15 w-25><RME b-success box-h128-w64>box-h128-w64</RME>width: 64px; height: 128px</RME>
  <RME mb15 w-25><RME b-danger box={'128'}>box={'128'}</RME>width: 128px; height: 128px</RME>
  <RME mb15 w-25><RME b-warning box={'128,64'}>box={'128,64'}</RME>width: 128px; height: 64px</RME>
  <RME mb15 w-25><RME b-info box={'128 64'}>box={'128 64'}</RME>width: 128px; height: 64px</RME>
  <RME mb15 w-25><RME b-primary box={'w128 h64'}>box={'w128 h64'}</RME>width: 128px; height: 64px</RME>
  <RME mb15 w-25><RME b-secondary box={'h128 w64'}>box={'h128 w64'}</RME>width: 64px; height: 128px</RME>
</RME>
     `}/>
      </RME>
      <RME h2 primary>Builtin BoxSizing:</RME>
      <RME b row p30 mb15>
        <RME col2><RME b-primary mini></RME>mini: 16px x 16px.</RME>
        <RME col2><RME b-secondary small></RME>small: 24px x 24px.</RME>
        <RME col3><RME b-success medium></RME>medium: 32px x 32px.</RME>
        <RME col3><RME b-danger big></RME>big: 48px x 48px.</RME>
        <RME col4><RME b-warning large></RME>large: 64px x 64px.</RME>
        <RME col4><RME b-info huge></RME>huge:96px x 96px.</RME>
      </RME>
      <RME h2 primary>Width Height</RME>
      <RME b p30 row mb15>
        <RME mb15 w-33><RME b-dark w160 h120></RME>width: 160px; height: 120px</RME>
        <RME mb15 w-33><RME b-dark w={160} h={120}></RME>width: 160px; height: 120px</RME>
      </RME>
      <RME h2 primary>Box</RME>
      <RME b p30 row mb15>
        <RME mb15 w-25><RME b-primary box-128>box-128</RME>width: 128px; height: 128px</RME>
        <RME mb15 w-25><RME b-secondary box-128-64>box-128-64</RME>width: 128px; height: 64px</RME>
        <RME mb15 w-25><RME b-success box-h128-w64>box-h128-w64</RME>width: 64px; height: 128px</RME>
        <RME mb15 w-25><RME b-danger box={'128'}>box={'128'}</RME>width: 128px; height: 128px</RME>
        <RME mb15 w-25><RME b-warning box={'128,64'}>box={'128,64'}</RME>width: 128px; height: 64px</RME>
        <RME mb15 w-25><RME b-info box={'128 64'}>box={'128 64'}</RME>width: 128px; height: 64px</RME>
        <RME mb15 w-25><RME b-primary box={'w128 h64'}>box={'w128 h64'}</RME>width: 128px; height: 64px</RME>
        <RME mb15 w-25><RME b-secondary box={'h128 w64'}>box={'h128 w64'}</RME>width: 64px; height: 128px</RME>
      </RME>
    </RME>
  )
}