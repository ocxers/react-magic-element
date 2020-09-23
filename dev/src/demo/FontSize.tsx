import React from 'react'
import RME from "../components"

export default () => {
    return (
        <>
            <RME h1 primary>Font Size</RME>
            <RME fs32>rme--fs32</RME>
            <RME fs={23}>font-size: 23px;</RME>
            <RME fs23>font-size: 23px;</RME>
        </>
    )
}