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
        // info: ['#ff0000', '#fff'],
        success: ['#ff0000', '#fff'],
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
    const handleClick = (ev: any) => {
        console.log('click', ev.target.value)
    }
    return (
        <>
            <RME flex>
                <RME w-100 b p15>
                    <RME row g32>
                        <RME col6 md-hidden visible>
                            <RME bgc-primary>col6 md-hidden</RME>
                        </RME>
                        <RME col6 md-visible hidden>
                            <RME bgc-secondary>col6 md-visible</RME>
                        </RME>
                        <RME col6>
                            <RME bgc-danger>col6</RME>
                        </RME>
                        <RME col6>
                            <RME bgc-primary>col6</RME>
                        </RME>
                        <RME col6>
                            <RME bgc-danger>col6</RME>
                        </RME>
                    </RME>
                </RME>
            </RME>
            {/*<RME>Ellipsis text lines count;</RME>*/}
            {/*<RME primary fs24 mb15 w240 lc1>lc1: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>*/}
            {/*<RME secondary fs24 mb15 w240 lc2>lc2: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>*/}
            {/*<RME success fs24 mb15 w240 lc3>lc3: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>*/}
            {/*<RME danger fs24 mb15 w240 lc4>lc4: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>*/}
            {/*<RME warning fs24 mb15 w240 lc5>lc5: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>*/}
            {/*<RME info fs24 mb15 w240 lc={7}>lc=7: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>*/}
            {/*<RME box={[12,34]}>box=[12,34]</RME>*/}
            {/*<RME b-success d-row g32>*/}
            {/*    <RME xs24 sm16 md12 lg8 xl4 xxl2>*/}
            {/*        <RME bgc-primary>xs24 sm16 md12 lg8 xl4 xxl2</RME>*/}
            {/*    </RME>*/}
            {/*    <RME xs24 rest>*/}
            {/*        <RME d-row>*/}
            {/*            <RME col12>*/}
            {/*                <RME bgc-secondary>col12</RME>*/}
            {/*            </RME>*/}
            {/*            <RME rest>*/}
            {/*                <RME bgc-danger>rest</RME>*/}
            {/*            </RME>*/}
            {/*        </RME>*/}
            {/*    </RME>*/}
            {/*</RME>*/}
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
            {/*<RME label={'RME Label'} value={'RME Value'} labelWidth={123}>*/}
            {/*    <input type="text"/>*/}
            {/*</RME>*/}
            {/*<RME label={<RME label txt-right w-40 pr5>RME Label:</RME>} value={<RME input type={'password'}*/}
            {/*                                                                        placeholder='Please input password'/>} />*/}
            {/*<RME d-row>*/}
            {/*    <RME label txt-right w-40 pr5 flex center>RME Label:</RME>*/}
            {/*    <RME input type={'file'} />*/}
            {/*</RME>*/}
            {/*<RME label labelWidth={123}>*/}
            {/*    <input type="text"/>*/}
            {/*    <RME input w120 />*/}
            {/*</RME>*/}
            {/*<RME input w120 />*/}
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
            {/*<RME bgc-danger bw12 box='123,234'>box={[123, 234]}</RME>*/}
            {/*<RME d-row cn=''>*/}
            {/*    <RME relative w-50 h120 cn-primary-abc>*/}
            {/*        /!*<RME bgc-danger bw12 pt5 mb5 w-20 fixed>box={[123, 234]}</RME>*!/*/}
            {/*        <RME bgc={'info'} bw12 pt5 mb5 fixed fill='15px,,0,0' z5>box=121212adfadfasdf12</RME>*/}
            {/*        <RME bgc={'success'} bw12 pt5 mb5 absolute w-45 z6 fill>box=aaaaa12121212</RME>*/}
            {/*    </RME>*/}
            {/*</RME>*/}
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
