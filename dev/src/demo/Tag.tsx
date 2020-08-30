import React from 'react'
import cx from 'classnames'
import RME from "../components/ReactMagicElement"

export default (props: any) => {
    const handleClose = () => {
        console.log('close click')
    }
    return (
        <RME>
            <RME tag onClose={handleClose}>tag closable</RME>
            <RME tag danger onClose={handleClose}>tag closable</RME>
            <RME tag danger small onClose={handleClose}>tag closable</RME>
            <RME tag success onClose={handleClose}>tag closable</RME>
            <RME tag closable ph15 pv5 mv10 bg-primary r5 s18 pointer right fw900>tag closable</RME>
        </RME>
    )
}