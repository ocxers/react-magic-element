import React from 'react'
import RME from "../components"

export default (props: any) => {
    return (
        <>
            <RME h1 primary>Height</RME>
            <RME h360 bg-success flex>
                <RME h-36 bottom rest>height=36%</RME>
            </RME>
            <RME h360 bg-success flex>
                height=360px
                <RME h-36 bottom>height=parent's 36% height</RME>
            </RME>
        </>
    )
}