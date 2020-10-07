import React from 'react'
import RME from "../components"
const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'
export default () => {
    return (
        <>
            {/*<RME h1 primary>Background Image</RME>*/}
            <RME b bgi={img} w200 h200 circle>background-image: url(img)</RME>
        </>
    )
}