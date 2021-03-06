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
            <RME alert primary mb5>Warning Text Warning Text Warning Text Warning Text Warning
                Text Warning TextWarning Text
                <RME span onClose={handleClose}></RME>
            </RME>
            <RME section row alert success b p15>
                <RME avatar huge mr15 circle bgi={img}>Hello</RME>
                <RME col rest>
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
                <RME span onClose={handleClose}></RME>
            </RME>
            <RME alert success row p0>
                <RME rest p15>
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
                <RME bgi={img} w360 right></RME>
            </RME>
        </RME>
    )
}