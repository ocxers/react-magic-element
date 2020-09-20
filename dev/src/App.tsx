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
        // primary: ['#ffcc00', '#ccc'],
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
    return (
        <RME primary center>
            <RME w1024>
                <RME bg-primary>primary</RME>
                <RME bg-light>light</RME>
                <RME bg-danger>danger</RME>
                <RME bg-success>success</RME>
                <RME bg-secondary>secondary</RME>
            </RME>
            <Layout/>
            {/*<Main/>*/}
            <Media/>
            <Tag/>
            <Button/>
            <Alert/>
            {/*<Grid/>*/}
            {/*<RME tc fr bg-primary w240>width-100</RME>*/}
            {/*<RME tc fr bg-gray xs24 sm16 md12 lg10 xl8 xxl6>xs12 sm8 md6 lg5 xl4 xxl2</RME>*/}
            {/*<RME tc fr bg-primary rest>width-100</RME>*/}
        </RME>
    )
}

export default App
