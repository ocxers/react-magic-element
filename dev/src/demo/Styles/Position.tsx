import React from 'react'
import RME   from '../../components/ReactMagicElement'
import Code  from '../Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Position</RME>
      <RME mb30>
        <Code code={`
<RME b p30 box-h160 row relative mb15>
  <RME b-primary box-160-120 absolute pos-20>
    top: 20px; <br/>
    right: 20px; <br/>
    bottom: 20px; <br/>
    left: 20px;
  </RME>
</RME>
<RME b p30 box-h160 row relative mb15>
  <RME b-secondary box-160-120 absolute pos-20-10>
    pos-20-10 <br/>
    top: 20px; <br/>
    right: 10px; <br/>
    bottom: 20px; <br/>
    left: 10px;
  </RME>
  <RME b-secondary box-160-120 absolute pos-20-10-30-200>
    pos-20-10-30-160 <br/>
    top: 20px; <br/>
    right: 10px; <br/>
    bottom: 30px; <br/>
    left: 200px;
  </RME>
</RME>
<RME b p30 box-h160 row relative mb15>
  <RME b-success box-160-120 absolute pos-t20-l30>
    pos-t20-l30 <br/>
    top: 20px; <br/>
    left: 30px;
  </RME>
</RME>
<RME b p30 box-h160 row relative mb15>
  <RME b-success box-160-120 absolute pos={'t20,l30'}>
    pos={'t20,l30'} <br/>
    top: 20px; <br/>
    left: 30px;
  </RME>
  <RME b-success box-160-120 absolute pos={'t20 l200'}>
    pos={'t20 l200'} <br/>
    top: 20px; <br/>
    left: 200px;
  </RME>
</RME>
     `}/>
      </RME>
      <RME b p30 box-h160 row relative mb15>
        <RME b-primary box-160-120 absolute pos-20>
          top: 20px; <br/>
          right: 20px; <br/>
          bottom: 20px; <br/>
          left: 20px;
        </RME>
      </RME>
      <RME b p30 box-h160 row relative mb15>
        <RME b-secondary box-160-120 absolute pos-20-10>
          pos-20-10 <br/>
          top: 20px; <br/>
          right: 10px; <br/>
          bottom: 20px; <br/>
          left: 10px;
        </RME>
        <RME b-secondary box-160-120 absolute pos-20-10-30-200>
          pos-20-10-30-160 <br/>
          top: 20px; <br/>
          right: 10px; <br/>
          bottom: 30px; <br/>
          left: 200px;
        </RME>
      </RME>
      <RME b p30 box-h160 row relative mb15>
        <RME b-success box-160-120 absolute pos-t20-l30>
          pos-t20-l30 <br/>
          top: 20px; <br/>
          left: 30px;
        </RME>
      </RME>
      <RME b p30 box-h160 row relative mb15>
        <RME b-success box-160-120 absolute pos={'t20,l30'}>
          pos={'t20,l30'} <br/>
          top: 20px; <br/>
          left: 30px;
        </RME>
        <RME b-success box-160-120 absolute pos={'t20 l200'}>
          pos={'t20 l200'} <br/>
          top: 20px; <br/>
          left: 200px;
        </RME>
      </RME>
    </RME>
  )
}