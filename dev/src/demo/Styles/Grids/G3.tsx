import React from 'react'
import RME from '../../../components/ReactMagicElement'
import Code from '../../Code'

export default (props: any) => {
  return (
    <>
      <RME h2>Rest</RME>
      <RME p>The rest width of the row.</RME>
      <RME mb30>
        <Code code={`
<RME flex>
  <RME w-100 b p15>
    <RME row g32>
      <RME col12>
        <RME bgc-primary>col12</RME>
      </RME>
      <RME rest>
        <RME bgc-secondary>rest</RME>
      </RME>
    </RME>
    <RME row g32>
      <RME rest>
        <RME bgc-secondary>rest</RME>
      </RME>
      <RME col7>
        <RME bgc-primary>col7</RME>
      </RME>
    </RME>
    <RME row g32>
      <RME rest>
        <RME bgc-danger>rest</RME>
      </RME>
      <RME w456>
        <RME bgc-primary>w456 -> width: 456px;</RME>
      </RME>
    </RME>
  </RME>
</RME>
     `}/>
      </RME>
      <RME flex>
        <RME w-100 b p15>
          <RME row g32>
            <RME col12>
              <RME bgc-primary>col12</RME>
            </RME>
            <RME rest>
              <RME bgc-secondary>rest</RME>
            </RME>
          </RME>
          <RME row g32>
            <RME rest>
              <RME bgc-secondary>rest</RME>
            </RME>
            <RME col7>
              <RME bgc-primary>col7</RME>
            </RME>
          </RME>
          <RME row g32>
            <RME rest>
              <RME bgc-danger>rest</RME>
            </RME>
            <RME w456>
              <RME bgc-primary>w456 -> width: 456px;</RME>
            </RME>
          </RME>
        </RME>
      </RME>
    </>
  )
}