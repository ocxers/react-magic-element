<h1>RME - react-magic-element</h1>

# Features
- Grid
- Button
- Tag
- Media
# Environment Support
- Modern browsers
## Install
```
npm install react-magic-element
```
### TypeScript
`RME` is written in TypeScript.
## Links
- [Home Page](http://ocxers.github.io/rme)
## Development
Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ocxers/react-magic-element)
## Usage
### Colors
```tsx
$primary:       #007bff;
$secondary:     #6c757d;
$success:       #28a745;
$danger:        #dc3545;
$warning:       #ffc107;
$info:          #17a2b8;
$light:         #f8f9fa;
$dark:          #343a40;
$white:         #fff;
$transparent:   transparent;
$bdColor:       #d9d9d9;

$colors:
/*  color name      color          text color  */
    primary         $primary       $white;    
    secondary       $secondary     $white;    
    success         $success       $white;    
    danger          $danger        $white;    
    warning         $warning       $dark;     
    info            $info          $white;    
    light           $light         $dark;     
    dark            $dark          $white;    
    white           $white         $dark;     
    transparent     $transparent   $dark;     
```
#### Use your own colors
```tsx
import RME from 'react-magic-element

RME.config({
    /*         color      text color */ // text color for: tag, and button
    primary: ['#ffcc00', '#ccc']
})
```
### Grid
```tsx
import RME from 'react-magic-element

const App = () => {
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
}
```
#### Responsive
| Extra small screen / phone | Small screen / tablet | Medium screen / desktop | Large screen / wide desktop | Extra large screen / full hd | Extra extra large screen / large desktop |
| --- | --- | --- | --- | --- | --- |
| \<576px | \>=576px | \>=768px | \>=992px | \>=1200px | \>=1600px |
| xs | sm | md | lg | xl | xxl |
#### Columns
- xs1-24        -> 1/24 - 24/24, step: 1/24
- sm1-24
- md1-24
- lg1-24
- xl1-24
- xxl1-24
- col1-24
- rest          -> the rest width of the row
### Elements
```tsx
import RME from 'react-magic-element

const App = () => {
    <>
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
    </>
}
```
### Styles
#### Width
```tsx
import RME from 'react-magic-element

const App = () => {
    <>
        <RME w1024>width=1024px</RME>
        <RME w-80>width=80%</RME>
    </>
}
```
#### Height
```tsx
import RME from 'react-magic-element

const App = () => {
    <>
        <RME h360 bg-success>
            height=360px
            <RME h-36 bottom>height=parent's 36% height</RME>
        </RME>
    </>
}
```
#### Padding
```tsx
import RME from 'react-magic-element

const App = () => {
    <>
        <RME p15>padding=15px</RME>
        <RME pv15>padding-top=15px; padding-bottom=15px;</RME>
        <RME ph15>padding-left=15px; padding-right=15px;</RME>
        <RME pt15>padding-top=15px;</RME>
        <RME pr15>padding-right=15px;</RME>
        <RME pb15>padding-bottom=15px;</RME>
        <RME pl15>padding-left=15px;</RME>
    </>
}
```
#### Margin

```tsx
import RME from 'react-magic-element

const App = () => {
    <>
        <RME m15>margin=15px</RME>
        <RME mv15>margin-top=15px; margin-bottom=15px;</RME>
        <RME mh15>margin-left=15px; margin-right=15px;</RME>
        <RME mt15>margin-top=15px;</RME>
        <RME mr15>margin-right=15px;</RME>
        <RME mb15>margin-bottom=15px;</RME>
        <RME ml15>margin-left=15px;</RME>
    </>
}
```
#### Border
#### BackgroundColor
#### BackgroundImage