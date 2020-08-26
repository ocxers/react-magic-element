import React from 'react'
import './App.css'
import RME from './components'

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'

function App() {
    const handleClose = () => {
        console.log('close click')
    }
    return (
        <div className="App">
            <RME left center>
                <RME tag mv10 mr5 primary bg-success pointer onClose={handleClose}>tag closable</RME>
                <RME tag closable ph15 pv5 mv10 bg-primary r5 s18 pointer right w900>tag closable</RME>
            </RME>
            <RME h2 color={'blue'} s={56} p={45} m={45} r10 bw5 bc-success right bgImg={img}>afasdfsd</RME>
            <RME weight={100} color={'red'} m30 l1 hoverUnderline pointer>Heading H1 // _import from 'super-label'
                // _import SuperLemon from "super-lemon"
                // _import * as RME from './Components/index'
                // _import RME from './Components/label/index'</RME>
            <RME h2 m30>RME H2</RME>
            <RME h3 center border>RME H3</RME>
            <RME h4>RME H4</RME>
            <RME h5>RME H5</RME>
            <RME a href={'https://google.com'} target={'_blank'}>RME H6</RME>
            <RME alert primary onClose={handleClose} mb5>Warning Text Warning Text Warning Text Warning Text Warning
                Text Warning TextWarning Text</RME>
            <RME section alert success onClose={handleClose} border p15 showIcon row>
                <RME avatar huge mr15 circle bgImg={img}></RME>
                <RME col fill>
                    <RME h3 m0 mb5>RME H2</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                </RME>
            </RME>
            <RME alert success border row p0>
                <RME col fill>
                    <RME h1>RME H2</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                </RME>
                <RME avatar huge bgImg={img} width={360} height100></RME>
            </RME>
            <RME circle bg-primary huge bc-dark shadow bs-dashed bgImg={img}>CIRCLE</RME>
            <RME bg-primary huge bc-success shadow r8 m10 bgImg={img}>square</RME>
            <RME avatar bg-primary gigantic bc-success shadow bgImg={img} width={'30%'} circle col center>
                <RME h4 fs64 m0 success alert>RME H4</RME>
                <RME h2 fw900 m0 mb5 dark>RME H2</RME>
            </RME>
            <RME r8 m10 col width={64}>
                <RME circle bg-primary width={64} bgImg={img} mb5></RME>
                <RME primary center fs12>CIRCLE</RME>
            </RME>

            <RME section row m15 width={480}>
                <RME avatar width={64} mr15 circle bgImg={img}></RME>
                <RME col fill>
                    <RME h2 m0 mb5>RME H2</RME>
                    <RME>Warning Text Warning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text Warning Text Warning Text
                        Warning Text Warning TextWarning Text</RME>
                </RME>
            </RME>
        </div>
    );
}

export default App;
