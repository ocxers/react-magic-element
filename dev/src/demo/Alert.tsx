import React from 'react'
import cx from 'classnames'
import styles from './Alert.module.scss'
import RME from "../components/ReactMagicElement"
const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'
export default (props: any) => {
    const handleClose = () => {
        console.log('close click')
    }
    return (
        <RME>
            <RME alert primary onClose={handleClose} mb5>Warning Text Warning Text Warning Text Warning Text Warning
                Text Warning TextWarning Text</RME>
            <RME section d-row alert success onClose={handleClose} border p15 showIcon row>
                <RME avatar huge mr15 circle bgi={img}>Hello</RME>
                <RME col fill>
                    <RME h3 m0 mb5 underline pointer center>RME H2</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                </RME>
            </RME>
            <RME alert success b={'2px solid red'} row p0>
                <RME col rest>
                    <RME h1>RME H2</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                </RME>
                <RME avatar bgi={img} w={360}>jjj</RME>
            </RME>
        </RME>
    )
}