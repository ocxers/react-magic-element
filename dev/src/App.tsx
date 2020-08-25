import React from 'react'
import './App.css'
import RME from './components'

function App() {
    const handleClose = () => {
        console.log('close click')
    }
    return (
        <div className="App">
            <RME tag ph15 pv5 mv10 mr5 primary bg-success r5 s18 pointer onClose={handleClose}>tag closable</RME>
            {/*<RME tag closable ph15 pv5 mv10 bg-primary r5 s18 pointer>tag closable</RME>*/}
            {/*<RME h2 color={'blue'} s18 p={45} m={45} border={'10px solid red'}>afasdfsd</RME>*/}
            {/*<RME weight={100} color={'red'} m30 l1 hoverUnderline pointer>Heading H1 // _import from 'super-label'*/}
            {/*  // _import SuperLemon from "super-lemon"*/}
            {/*  // _import * as RME from './Components/index'*/}
            {/*  // _import RME from './Components/label/index'</RME>*/}
            {/*<RME h2 m30>RME H2</RME>*/}
            {/*<RME h3>RME H3</RME>*/}
            {/*<RME h4>RME H4</RME>*/}
            {/*<RME h5>RME H5</RME>*/}
            {/*<RME h6>RME H6</RME>*/}
        </div>
    );
}

export default App;
