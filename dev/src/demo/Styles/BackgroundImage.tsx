import React from 'react'
import RME   from '../../components/ReactMagicElement'
import Code  from '../Code'

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'
export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>BackgroundImage</RME>
      <RME mb30>
        <Code code={`
<RME b bgi={img} w200 h200>background-image: url(img)</RME>
        `}/>
      </RME>
      <RME b bgi={img} w200 h200 circle>background-image: url(img)</RME>
    </RME>
  )
}