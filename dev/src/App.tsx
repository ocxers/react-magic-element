import React           from 'react'
import './App.css'
import RME             from './components/ReactMagicElement'
import Color           from './demo/Color'
import Grid            from './demo/Grid'
import Elements        from './demo/Elements'
import Width           from './demo/Styles/Width'
import Height          from './demo/Styles/Height'
import Padding         from './demo/Styles/Padding'
import Margin          from './demo/Styles/Margin'
import Border          from './demo/Styles/Border'
import FontSize        from './demo/Styles/FontSize'
import FontWeight      from './demo/Styles/FontWeight'
import TextLines       from './demo/Styles/TextLines'
import BoxSizing       from './demo/Styles/BoxSizing'
import BackgroundColor from './demo/Styles/BackgroundColor'
import BackgroundImage from './demo/Styles/BackgroundImage'
import Position        from './demo/Styles/Position'

RME.config({
  colors: {
    /**
     * Default color system
     */
    // danger: ['#ffcc00', '#ccc'],
    // info: ['#ff0000', '#fff'],
    success: ['#ff0000', '#fff']
    // secondary: '#6c757d',
    // success: '#28a745',
    // danger: '#dc3545',
    // warning: '#ffc107',W
    // info: '#17a2b8',
    // light: '#f8f9fa',
    // dark: '#343a40',
    // white: '#fff'
  }
})

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'

function App () {
  const handleClick = (ev: any) => {
    console.log('click', ev.target.value)
  }
  return (
    <>
      {/*<Color />*/}
      {/*<Grid />*/}
      {/*<Elements />*/}
      {/*<Width />*/}
      {/*<Height />*/}
      <Padding />
      {/*<Margin />*/}
      {/*<Border />*/}
      {/*<FontSize />*/}
      {/*<FontWeight />*/}
      {/*<TextLines />*/}
      {/*<BoxSizing />*/}
      {/*<BackgroundColor />*/}
      {/*<BackgroundImage />*/}
      {/*<Position />*/}
    </>
  )
}

export default App
