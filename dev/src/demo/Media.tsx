import React from 'react'
import RME from "../components/ReactMagicElement"

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'
export default (props: any) => {
    return (
        <RME p30>
            <RME section row mb15 w650>
                <RME avatar w120 h120 mr={21} circle success bgImg={img}>Yes</RME>
                <RME col fill>
                    <RME h2 m0 mb5 primary hoverUnderline lineThrough pointer>RME H2</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                </RME>
            </RME>
            <RME section row b={'1px solid red'} r5>
                <RME col fill danger mr30>
                    <RME h1 fs72 m0 mb5>RME H2</RME>
                    <RME mb15>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>
                        <RME button success>See More</RME>
                    </RME>
                </RME>
                <RME avatar w={360} bgImg={img}></RME>
            </RME>
        </RME>
    )
}