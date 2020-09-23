import React from 'react'
import RME from "../components"

export default (props: any) => {
    return (
        <>
            <RME h1 primary>Color</RME>
            <RME primary>color: #007bff;</RME>
            <RME fc={'#FF3456'}>color=#FF3456</RME>
        </>
    )
}