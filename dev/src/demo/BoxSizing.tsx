import React from 'react'
import RME from "../components"

export default () => {
    return (
        <>
            <RME h1 primary>Box Sizing</RME>
            <RME b bc-primary tiny>tiny box: 12px x 12px</RME>
            <RME b bc-secondary mini>mini box: 16px x 16px.</RME>
            <RME b bc-success small>small box: 24px x 24px.</RME>
            <RME b bc-danger medium>medium box: 32px x 32px.</RME>
            <RME b bc-warning big>big box: 48px x 48px.</RME>
            <RME b bc-info large>large box: 64px x 64px.</RME>
            <RME b bc-light huge>huge box:96px x 96px.</RME>
            <RME b bc-dark gigantic>gigantic box: 128px x 128px.</RME>
            <RME b bc-dark w234 h234>other box: 234px x 234px.</RME>
        </>
    )
}