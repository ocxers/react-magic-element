import React from 'react'
import './App.css'
import RME from './components/ReactMagicElement'
import Color from './demo/Color'
import Grid from './demo/Grid'
import Elements from './demo/Elements'
import Width from './demo/Styles/Width'
import Height from './demo/Styles/Height'
import Padding from './demo/Styles/Padding'
import Margin from './demo/Styles/Margin'
import Border from './demo/Styles/Border'
import FontSize from './demo/Styles/FontSize'
import FontWeight from './demo/Styles/FontWeight'
import TextLines from './demo/Styles/TextLines'
import BoxSizing from './demo/Styles/BoxSizing'
import BackgroundColor from './demo/Styles/BackgroundColor'
import BackgroundImage from './demo/Styles/BackgroundImage'
import Position from './demo/Styles/Position'
import Button from './demo/Button'
import Tag from './demo/Tag'
import Alert from './demo/Alert'
import Media from './demo/Media'
import Main from './demo/Main'

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
const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'

function App () {
  const handleClick = (ev: any) => {
    console.log('click', ev.target.value)
  }
  const handleChange = (ev: any) => {
    console.log(ev.target.value)
  }
  console.log(RME.computeProps({
    btn: true,
    'bw-t5': true
  }))
  return (
    <>
      {/*<Color />*/}
      {/*<Grid />*/}
      {/*<Elements />*/}
      {/*<Width />*/}
      {/*<Height />*/}
      {/*<Padding />*/}
      {/*<Margin />*/}
      {/*<Border />*/}
      {/*<FontSize />*/}
      {/*<FontWeight />*/}
      {/*<TextLines />*/}
      {/*<BoxSizing />*/}
      {/*<BackgroundColor />*/}
      {/*<BackgroundImage />*/}
      {/*<Position />*/}
      {/*<Button />*/}
      {/*<Tag />*/}
      {/*<Alert/>*/}
      {/*<Media />*/}
      {/*<Main />*/}
      {/*<RME h2 m0 mb5 primary hover-underline line-through pointer>RME H2</RME>*/}
      {/*<RME btn bw-t5>Render as span</RME>*/}
      {/*<RME b-warning r5 p15 mb30 id={'id'} abc={'123'} name={'def'} disabled bbb>*/}
      {/*  <RME h3>Hidden and Visible</RME>*/}
      {/*</RME>*/}
      {/*<RME a href={'http://ocxers.github.com/rme'} target='_blank' title='React Magic Element' style={{color: 'red'}}>RME</RME>*/}
      {/*<RME button onClick={handleClick} primary>Button</RME>*/}
      {/*<RME input id={'id2'} abc={'123'} name={'def'} ccc placeholder={'placeholder'} type={'number'}*/}
      {/*     onChange={handleChange}></RME>*/}
      {/*<input type="text" />*/}
      <RME header row fixed h60 w-100 center className={'box-bottom-shadow'}>
        <RME p15 w290 col href='/rme'>
          <RME row>
            <RME box-34-30 mr15 bgi={img}></RME>
            <RME span fs24 fc='white' fw700>React Magic Element</RME>
          </RME>
        </RME>
        <RME rest>abc</RME>
      </RME>
    </>
  )
}

export default App
