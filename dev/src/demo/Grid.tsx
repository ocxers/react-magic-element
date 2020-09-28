import React from 'react'
import cx from 'classnames'
import RME from '../components/ReactMagicElement'

export default (props: any) => {
  return (
    <RME row center b>
      <RME w-90 b={'3px solid success'} bw3 bs-dashed bbc-danger>
        <RME row g32>
          <RME col12 xs24 sm12 md8 bg-primary>col12 xs24 sm12 md8</RME>
          <RME col12 xs24 sm12 md8 bg-danger>col12 xs24 sm12 md8</RME>
          <RME col12 bg-primary>col12</RME>
          <RME col8 bg-danger>col12</RME>
          <RME rest bg-success>rest</RME>
        </RME>
        <RME row>
          <RME col17 right txt-right xs24 b lg-hidden xl-display>col13 right</RME>
        </RME>
      </RME>
    </RME>
  )
}