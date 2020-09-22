import React from 'react'
import RME from "../components"

export default (props: any) => {
    return (
        <>
            <RME h1>Margin</RME>
            <RME m15>margin=15px</RME>
            <RME mv15>margin-top=15px; margin-bottom=15px;</RME>
            <RME mh15>margin-left=15px; margin-right=15px;</RME>
            <RME mt15>margin-top=15px;</RME>
            <RME mr15>margin-right=15px;</RME>
            <RME mb15>margin-bottom=15px;</RME>
            <RME ml15>margin-left=15px;</RME>
        </>
    )
}