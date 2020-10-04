import React from 'react'
import RME   from '../../../components/ReactMagicElement'
import Code  from '../../Code'

export default (props: any) => {
  return (
    <>
      <RME h2>Gutter</RME>
      <RME p>Grid gutter.</RME>
      <RME mb30>
        <Code code={`
<RME flex>
  <RME w-100 b p15>
    <RME row g32>
      <RME col12>
        <RME bgc-primary>col12</RME>
      </RME>
      <RME col6>
        <RME bgc-secondary>col6</RME>
      </RME>
      <RME col3>
        <RME bgc-success>col3</RME>
      </RME>
      <RME col2>
        <RME bgc-danger>col2</RME>
      </RME>
      <RME col1>
        <RME bgc-warning>col1</RME>
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
            <RME col6>
              <RME bgc-secondary>col6</RME>
            </RME>
            <RME col3>
              <RME bgc-success>col3</RME>
            </RME>
            <RME col2>
              <RME bgc-danger>col2</RME>
            </RME>
            <RME col1>
              <RME bgc-warning>col1</RME>
            </RME>
          </RME>
        </RME>
      </RME>
    </>
  )
}