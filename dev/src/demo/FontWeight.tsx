import React from 'react'
import RME from "../components"

export default () => {
    return (
        <>
            <RME h1 primary>Font Weight</RME>
            <RME fw100>rme--fw100</RME>
            <RME fw={150}>font-weight: 150;</RME>
            <RME fw200>font-weight: 200;</RME>
        </>
    )
}