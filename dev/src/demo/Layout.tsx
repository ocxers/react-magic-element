import React from 'react'
import RME from '../components'

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'

export default (props: any) => {
    return (
        <RME fixed row h-100 w-100 bg-light danger>
            <RME nav w240 br={'1px solid red'} bb={'3px dashed black'} p15>Left navigation</RME>
            <RME rest>
                <RME header p15>Header</RME>
                <RME section>Content
                    <RME rest fixed pos-12-13>
                        <RME bgc-danger box={[123,234]}>box={[123,234]}</RME>
                    </RME>
                </RME>
            </RME>
        </RME>
    )
}