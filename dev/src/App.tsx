import React from 'react'
import './App.css'
import RME from './components'
import Layout from "./demo/Layout"
import Main from "./demo/Main"
import Tag from "./demo/Tag"
import Media from "./demo/Media"
import Button from "./demo/Button"
import Grid from "./demo/Grid"
import Alert from "./demo/Alert"

RME.config({
    colors: {
        /**
         * Default color system
         */
        primary: ['#ffcc00', '#ccc'],
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
            <RME m15>margin=15px</RME>
            <RME mv15>margin-top=15px; margin-bottom=15px;</RME>
            <RME mh15>margin-left=15px; margin-right=15px;</RME>
            <RME mt15>margin-top=15px;</RME>
            <RME mr15>margin-right=15px;</RME>
            <RME mb15>margin-bottom=15px;</RME>
            <RME ml15>margin-left=15px;</RME>
            <RME p15>padding=15px</RME>
            <RME pv15>padding-top=15px; padding-bottom=15px;</RME>
            <RME ph15>padding-left=15px; padding-right=15px;</RME>
            <RME pt15>padding-top=15px;</RME>
            <RME pr15>padding-right=15px;</RME>
            <RME pb15>padding-bottom=15px;</RME>
            <RME pl15>padding-left=15px;</RME>
            <RME w1024>width=1024px</RME>
            <RME w-80>width=80%</RME>
            <RME h360 bg-success>
                height=360px
                <RME h-36 bottom>height=36%</RME>
            </RME>

            <RME>Default render as div</RME>
            <RME h1>Render as h1</RME>
            <RME h2>Render as h2</RME>
            <RME h3>Render as h3</RME>
            <RME h4>Render as h4</RME>
            <RME h5>Render as h5</RME>
            <RME h6>Render as h6</RME>
            <RME p>Render as p</RME>
            <RME span>Render as span</RME>
            <RME nav>Render as nav</RME>
            <RME label>Render as label</RME>
            <RME header>Render as header</RME>
            <RME footer>Render as footer</RME>
            <RME button>Render as button</RME>
            <RME btn>Render as button</RME>
            <RME a>Render as a</RME>
            <RME ul>Render as ul</RME>
            <RME ol>Render as ol</RME>
            <RME li>Render as li</RME>
            <RME section>Render as section</RME>
            <RME address>Render as address</RME>
            <RME tag>Render as tat</RME>
            <RME alert>Render as alert</RME>
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

            <RME rest p30>
                <RME b-success g32>
                    <RME xs24 sm16 md12 lg8 xl4 xxl2>
                        <RME bgc-primary>xs24 sm16 md12 lg8 xl4 xxl2</RME>
                    </RME>
                    <RME xs24 rest>
                        <RME>
                            <RME col12>
                                <RME bgc-secondary>col12</RME>
                            </RME>
                            <RME rest>
                                <RME bgc-danger>rest</RME>
                            </RME>
                        </RME>
                    </RME>
                </RME>
            </RME>

            {/*</RME>*/}
        </>
    )
}

export default App
