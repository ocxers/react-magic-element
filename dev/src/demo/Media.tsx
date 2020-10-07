import React from 'react'
import RME from "../components/ReactMagicElement"

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'
export default (props: any) => {
    return (
        <RME p30>
            <RME section row mb15 w650>
                <RME avatar box-64 mr={21} circle success bgi={img}>Yes</RME>
                <RME col rest>
                    <RME h2 m0 mb5 primary hover-underline line-through pointer>RME H2</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                </RME>
            </RME>
            <RME b section row bc-danger r15>
                <RME danger rest>
                    <RME h1 fs72 m0 mb5>RME H2</RME>
                    <RME mb15>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>
                        <RME button success>See More</RME>
                    </RME>
                </RME>
                <RME w={360}  bgi={img} r={'0 15px 25px 0'}></RME>
            </RME>
        </RME>
    )
}