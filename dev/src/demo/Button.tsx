import React from 'react'
import cx from 'classnames'
import RME from "../components/ReactMagicElement"

export default (props: any) => {
    const handleClose = () => {
        console.log('close click')
    }
    return (
        <RME>
            <RME group mb15>
                <RME btn info disabled onClick={handleClose}>Info</RME>
                <RME btn plain success onClick={handleClose}>Success</RME>
                <RME btn plain danger>Danger</RME>
                <RME btn plain dark>Dark</RME>
            </RME>
            <RME group>
                <RME btn>Info</RME>
                <RME button>Success</RME>
                <RME button>Danger</RME>
                <RME button>Dark</RME>
            </RME>
            <RME>
                <RME button primary m15 dashed small plain>Primary</RME>
                <RME button secondary m15 solid tiny width={60}>tiny</RME>
                <RME button success m15 large>Success</RME>
                <RME button danger m15 plain>Danger</RME>
                <RME button warning m15 small>Warning</RME>
                <RME button info m15 huge>Info</RME>
                <RME button light m15>Light</RME>
                <RME button dark m15>Dark</RME>
                <RME button white m15>White</RME>
                <RME button m15>Default</RME>
                <RME link m15 primary href={'https://google.com'} target={'_blank'}>link Default</RME>
                <RME link m15 danger href={'https://google.com'} target={'_blank'}>Default</RME>
                <RME link m15 success plain href={'https://google.com'} target={'_blank'}>Default</RME>
            </RME>
        </RME>
    )
}