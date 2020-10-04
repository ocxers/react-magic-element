import React from 'react'
import RME from '../../../components/ReactMagicElement'
import Code from '../../Code'

export default (props: any) => {
  return (
    <>
      <RME h2>Hidden and Visible</RME>
      <RME p>
        Hidden: xs/sm/md/lg/xl/xxl-hidden, Visible: xs/sm/md/lg/xl/xxl-visible
      </RME>
      <RME mb30>
        <Code code={`
<RME flex>
  <RME w-100 b p15>
    <RME row g32>
      <RME col6 visible xl-hidden>
        <RME bgc-primary>col6 xl-hidden</RME>
      </RME>
      <RME col6 hidden xl-visible>
        <RME bgc-secondary>col6 xl-visible</RME>
      </RME>
      <RME col6>
        <RME bgc-danger>col6</RME>
      </RME>
      <RME col6 md24 lg6>
        <RME bgc-primary>col6 md24 lg6</RME>
      </RME>
      <RME col6 md-hidden lg-visible>
        <RME bgc-danger>col6 md-hidden lg-visible</RME>
      </RME>
    </RME>
  </RME>
</RME>
     `}/>
      </RME>
      <RME flex>
        <RME w-100 b p15>
          <RME row g32>
            <RME col6 visible xl-hidden>
              <RME bgc-primary>col6 xl-hidden</RME>
            </RME>
            <RME col6 hidden xl-visible>
              <RME bgc-secondary>col6 xl-visible</RME>
            </RME>
            <RME col6>
              <RME bgc-danger>col6</RME>
            </RME>
            <RME col6 md24 lg6>
              <RME bgc-primary>col6 md24 lg6</RME>
            </RME>
            <RME col6 md-hidden lg-visible>
              <RME bgc-danger>col6 md-hidden lg-visible</RME>
            </RME>
          </RME>
        </RME>
      </RME>
    </>
  )
}