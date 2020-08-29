import React from 'react'
import cx from 'classnames'
import RME from '../components'

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'

export default (props: any) => {
    return (
        <RME alert success border row p0 bgcSuccess>
            {/*Warning Text Warning Text Warning Text Warning Text*/}
            <RME col fill>
                <RME h1>RME H2</RME>
            {/*    <RME>Warning Text Warning Text Warning Text Warning Text*/}
            {/*        Warning Text Warning TextWarning Text</RME>*/}
            {/*    <RME>Warning Text Warning Text Warning Text Warning Text*/}
            {/*        Warning Text Warning TextWarning Text</RME>*/}
            {/*    <RME>Warning Text Warning Text Warning Text Warning Text*/}
            {/*        Warning Text Warning TextWarning Text</RME>*/}
            {/*    <RME>Warning Text Warning Text Warning Text Warning Text*/}
            {/*        Warning Text Warning TextWarning Text</RME>*/}
            </RME>
            <RME avatar bgImg={img} w={360}>jjj</RME>
        </RME>
    )
}