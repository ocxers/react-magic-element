import React from 'react'
import RME from "../components"

export default (props: any) => {
    return (
        <>
            <RME h1 primary>Width</RME>
            <RME w1024>width=1024px</RME>
            <RME w={'80px'} fc={'#FF3456'} fs32>width=80px</RME>
            <RME w-80 fs={43}>width=80%</RME>
            <RME w={'80%'}>width=80%</RME>
        </>
    )
}