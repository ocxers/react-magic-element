import React from 'react'
import cx from 'classnames'
import RME from "../components/ReactMagicElement"

export default (props: any) => {
    return (
        <RME>
            <RME xs1 bgc-primary>1</RME>
            <RME col2 bgc-danger>2</RME>
            <RME col3 bgc-primary>3</RME>
            <RME col4 bgc-danger>4</RME>
            <RME col4 sm1 bgc-success>4</RME>
            <RME col4 bgc-primary>4</RME>
            <RME col3 bgc-danger>3</RME>
            <RME col2 bgc-primary>2</RME>
            <RME col1 bgc-danger>1</RME>
            <RME col12 bgc-success>1</RME>
            <RME>
                <RME col12 xs18 bgc-success>1</RME>
            </RME>
            <RME mv32 mh3>
                <RME xxl12 xl16 lg18 md20 sm22 xs24 r5 p13 b={'1px solid red'}> xxl12 xl16 lg18 md20 sm22 xs24 </RME>
            </RME>
        </RME>
    )
}