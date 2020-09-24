import React from 'react'
import RME from "../components"

export default () => {
    return (
        <>
            <RME h1 primary>Background Color</RME>
            <RME bg-primary>bgc-primary -> rme--bgc-primary</RME>
            <RME b bgc-secondary>bgc-secondary -> rme--bgc-secondary</RME>
            <RME b bgc-success>bgc-success -> rme--bgc-success</RME>
            <RME b bgc-danger>bgc-danger -> rme--bgc-danger</RME>
            <RME b bgc-warning>bgc-warning -> rme--bgc-warning</RME>
            <RME b bgc-info>bgc-info -> rme--bgc-info</RME>
            <RME b bgc-light>bgc-light -> rme--bgc-light</RME>
            <RME b bgc-dark>bgc-dark -> rme--bgc-dark</RME>
            <RME b bgc-white>bgc-white -> rme--bgc-white</RME>
            <RME b bgc-transparent>bgc-transparent -> rme--bgc-transparent</RME>
            <RME b bgc={'red'}>bgc={'red'} -> background-color: red;</RME>
        </>
    )
}