import React from 'react'
import RME from '../../../components/ReactMagicElement'
import Code from '../../Code'

export default (props: any) => {
  return (
    <>
      <RME h2>Responsive</RME>
      <RME p>
        Referring to the Bootstrap responsive design, here preset six dimensions: xs sm md lg xl xxl.
      </RME>
      <RME mb30>
        <Code code={`
<RME flex>
  <RME w-100 b p15>
    <RME row g32>
      <RME xs20 sm18 md12 lg10 xl8 xxl6>
        <RME bgc-primary>col12</RME>
      </RME>
      <RME xs4 sm6 md12 lg14 xl16 xxl18>
        <RME bgc-secondary>xs4 sm6 md12 lg14 xl16 xxl18</RME>
      </RME>
    </RME>
  </RME>
</RME>
     `}/>
      </RME>
      <RME flex>
        <RME w-100 b p15>
          <RME row g32>
            <RME xs20 sm18 md12 lg10 xl8 xxl6>
              <RME bgc-primary>col12</RME>
            </RME>
            <RME xs4 sm6 md12 lg14 xl16 xxl18>
              <RME bgc-secondary>xs4 sm6 md12 lg14 xl16 xxl18</RME>
            </RME>
          </RME>
        </RME>
      </RME>
    </>
  )
}