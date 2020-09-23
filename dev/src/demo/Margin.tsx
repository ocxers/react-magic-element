import React from 'react'
import RME from "../components"

export default (props: any) => {
    return (
        <>
            <RME h1>Margin</RME>
            <RME b m15 m={17}>margin=15px</RME>
            <RME b mv15 mv={19}>margin-top=15px; margin-bottom=15px;</RME>
            <RME b mh15>margin-left=15px; margin-right=15px;</RME>
            <RME b mt15>margin-top=15px;</RME>
            <RME b mr15>margin-right=15px;</RME>
            <RME b mb15>margin-bottom=15px;</RME>
            <RME b ml15>margin-left=15px;</RME>
        </>
    )
}