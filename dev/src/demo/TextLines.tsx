import React from 'react'
import RME from "../components"

export default () => {
    return (
        <>
            <RME h1 primary>Ellipsis text lines count</RME>
            <RME primary fs24 mb15 w240 l1>l1: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME secondary fs24 mb15 w240 l2>l2: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME success fs24 mb15 w240 l3>l3: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME danger fs24 mb15 w240 l4>l4: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME warning fs24 mb15 w240 l5>l5: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME info fs32 mb15 w240 l={7}>l=7: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
        </>
    )
}