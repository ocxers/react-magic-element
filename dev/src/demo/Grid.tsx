import React from 'react'
import RME from '../components/ReactMagicElement'
import G1 from './Styles/Grids/G1'
import G2 from './Styles/Grids/G2'
import G3 from './Styles/Grids/G3'
import G4 from './Styles/Grids/G4'
import G5 from './Styles/Grids/G5'
import G6 from './Styles/Grids/G6'

export default (props: any) => {
  return (
    <RME ph30>
      <RME h1>Grid</RME>
      <G1 />
      <G2 />
      <G3 />
      <G4 />
      <G5 />
      <G6 />
    </RME>
  )
}