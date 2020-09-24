import React from 'react'
import RME from "../components"

export default () => {
    return (
        <>
            <RME h1 primary>Ellipsis text lines count</RME>
            <RME primary fs24 mb15 w240 lc1>lc1: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME secondary fs24 mb15 w240 lc2>lc2: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME success fs24 mb15 w240 lc3>lc3: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME danger fs24 mb15 w240 lc4>lc4: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME warning fs24 mb15 w240 lc5>lc5: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME info fs32 mb15 w240 lc={7}>lc=7: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
        </>
    )
}