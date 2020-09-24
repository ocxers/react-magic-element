import React from 'react'
import './App.css'
import RME from './components'
import Button from "./demo/Button"
import Padding from "./demo/Padding"
import Margin from "./demo/Margin"
import Elements from "./demo/Elements"
import Width from "./demo/Width"
import Height from "./demo/Height"
import Border from "./demo/Border"
import Color from "./demo/Color"
import FontSize from "./demo/FontSize"
import FontWeight from "./demo/FontWeight"
import TextLines from "./demo/TextLines"
import BoxSizing from "./demo/BoxSizing"
import BackgroundColor from "./demo/BackgroundColor"
import BackgroundImage from "./demo/BackgroundImage"
import Grid from "./demo/Grid"
import Layout from "./demo/Layout"
import Main from "./demo/Main"
import Media from "./demo/Media"
import Tag from "./demo/Tag"
import Alert from "./demo/Alert"

RME.config({
    colors: {
        /**
         * Default color system
         */
        // danger: ['#ffcc00', '#ccc'],
        // danger: ['#ff0000', '#fff'],
        // secondary: '#6c757d',
        // success: '#28a745',
        // danger: '#dc3545',
        // warning: '#ffc107',
        // info: '#17a2b8',
        // light: '#f8f9fa',
        // dark: '#343a40',
        // white: '#fff'
    }
})

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'

function App() {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <>
            <RME b-success d-row g32>
                <RME xs24 sm16 md12 lg8 xl4 xxl2>
                    <RME bgc-primary>xs24 sm16 md12 lg8 xl4 xxl2</RME>
                </RME>
                <RME xs24 rest>
                    <RME d-row>
                        <RME col12>
                            <RME bgc-secondary>col12</RME>
                        </RME>
                        <RME rest>
                            <RME bgc-danger>rest</RME>
                        </RME>
                    </RME>
                </RME>
            </RME>
            {/*<div style={{padding: '15px', width: '1024px'}}>*/}
            {/*    <RME row g36>*/}
            {/*        <RME col12>*/}
            {/*            <RME bgc-secondary>col12</RME>*/}
            {/*        </RME>*/}
            {/*        <RME rest>*/}
            {/*            <RME bgc-danger>rest</RME>*/}
            {/*        </RME>*/}
            {/*    </RME>*/}
            {/*    <RME b bc-primary row g32>*/}
            {/*        <RME b col12> ROW COL</RME>*/}
            {/*        <RME b col12 bsz-tiny> ROW COL</RME>*/}
            {/*    </RME>*/}
            {/*</div>*/}
            {/*<Padding />*/}
            {/*<Margin />*/}
            {/*<Elements />*/}
            {/*<Width />*/}
            {/*<Height />*/}
            {/*<Border />*/}
            {/*<Color />*/}
            {/*<FontSize/>*/}
            {/*<FontWeight/>*/}
            {/*<BoxSizing />*/}
            {/*<BackgroundColor />*/}
            {/*<BackgroundImage />*/}
            {/*<TextLines />*/}
            {/*<RME h300 p30>*/}
            {/*<RME h64 bgc-primary b={'1px solid red'} ph15 style={{*/}
            {/*    borderWidth: '23px'*/}
            {/*}} onClick={handleClick}>abc</RME>*/}
            {/*<RME w1024>*/}
            {/*    <RME bg-primary txt-right>primary</RME>*/}
            {/*    <RME bg-light center>*/}
            {/*        <RME w120 bg-success txt-center>success</RME>*/}
            {/*        <RME w120 bg-secondary txt-center>secondary</RME>*/}
            {/*    </RME>*/}
            {/*    <RME bg-danger bg-img={img}>danger</RME>*/}
            {/*    <RME bg-success>success</RME>*/}
            {/*    <RME bg-secondary>secondary</RME>*/}
            {/*</RME>*/}
            {/*<Layout/>*/}
            {/*<Main/>*/}
            {/*<Media/>*/}
            {/*<Tag/>*/}
            {/*<Button/>*/}
            {/*<Alert/>*/}
            {/*<Grid/>*/}
            {/*<RME tc fr bg-primary w240>width-100</RME>*/}
            {/*<RME tc fr bg-gray xs24 sm16 md12 lg10 xl8 xxl6>xs12 sm8 md6 lg5 xl4 xxl2</RME>*/}
            {/*<RME tc fr bg-primary rest>width-100</RME>*/}

            {/*<RME rest p30>*/}
            {/*    <RME b-success g32>*/}
            {/*        <RME xs24 sm16 md12 lg8 xl4 xxl2>*/}
            {/*            <RME bgc-primary>xs24 sm16 md12 lg8 xl4 xxl2</RME>*/}
            {/*        </RME>*/}
            {/*        <RME xs24 rest>*/}
            {/*            <RME>*/}
            {/*                <RME col12>*/}
            {/*                    <RME bgc-secondary>col12</RME>*/}
            {/*                </RME>*/}
            {/*                <RME rest>*/}
            {/*                    <RME bgc-danger>rest</RME>*/}
            {/*                </RME>*/}
            {/*            </RME>*/}
            {/*        </RME>*/}
            {/*    </RME>*/}
            {/*</RME>*/}

            {/*</RME>*/}
        </>
    )
}

export default App
