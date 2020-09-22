import React from 'react'
import RME from "../components"

export default (props: any) => {
    return (
        <>
            <RME h1>Padding</RME>
            <RME p15>padding=15px</RME>
            <RME pv15>padding-top=15px; padding-bottom=15px;</RME>
            <RME ph15>padding-left=15px; padding-right=15px;</RME>
            <RME pt15>padding-top=15px;</RME>
            <RME pr15>padding-right=15px;</RME>
            <RME pb15>padding-bottom=15px;</RME>
            <RME pl15>padding-left=15px;</RME>
        </>
    )
}