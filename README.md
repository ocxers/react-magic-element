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
        <RME h360 bg-success rest>
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
```tsx
import RME from 'react-magic-element

const App = () => {
    <>
        <RME h1 b-danger>Border</RME>
        <RME b-primary btw5 btc={'red'} brw11 brs={'dashed'}>
            <ul>
                <li>Border:</li>
                <li>b-primary: border-color: primary</li>
                <li>btw5: border-top-width: 5pxy</li>
                <li>btc={'red'}: border-top-color: red</li>
                <li>brw11: border-right-width: 11px</li>
                <li>brs={'dashed'}: border-right-style: dashed</li>
            </ul>
        </RME>
    </>
}
```
<table>
    <thead>
    <tr>
        <th></th>
        <th>Property</th>
        <th>CSS property</th>
        <th>Render as</th>
        <th>Example</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>border</td>
        <td>b</td>
        <td>border</td>
        <td>border: 1px solid</td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="14">border width</td>
        <td>bw[number]</td>
        <td>border-width</td>
        <td>border-width: [number]px</td>
        <td>bw4 -> border-width: 4px</td>
    </tr>
    <tr>
        <td>bw=[value]</td>
        <td>border-width</td>
        <td>border-width: value</td>
        <td>bw=4px -> border-width: 4px</td>
    </tr>
    <tr>
        <td>btw[number]</td>
        <td>border-top-width</td>
        <td>border-top-width: [number]px</td>
        <td>btw4 -> border-top-width: 4px</td>
    </tr>
    <tr>
        <td>btw=[value]</td>
        <td>border-top-width</td>
        <td>border-top-width: value</td>
        <td>btw=4px -> border-top-width: 4px</td>
    </tr>
    <tr>
        <td>brw[number]</td>
        <td>border-right-width</td>
        <td>border-right-width: [number]px</td>
        <td>brw4 -> border-right-width: 4px</td>
    </tr>
    <tr>
        <td>brw=[value]</td>
        <td>border-right-width</td>
        <td>border-right-width: value</td>
        <td>brw=4px -> border-right-width: 4px</td>
    </tr>
    <tr>
        <td>bbw[number]</td>
        <td>border-bottom-width</td>
        <td>border-bottom-width: [number]px</td>
        <td>bbw4 -> border-bottom-width: 4px</td>
    </tr>
    <tr>
        <td>bbw=[value]</td>
        <td>border-bottom-width</td>
        <td>border-bottom-width: value</td>
        <td>bbw=4px -> border-bottom-width: 4px</td>
    </tr>
    <tr>
        <td>blw[number]</td>
        <td>border-left-width</td>
        <td>border-left-width: [number]px</td>
        <td>blw4 -> border-left-width: 4px</td>
    </tr>
    <tr>
        <td>blw=[value]</td>
        <td>border-left-width</td>
        <td>border-left-width: value</td>
        <td>blw=4px -> border-left-width: 4px</td>
    </tr>
    <tr>
        <td>bhw[number]</td>
        <td>border-left-width & border-right-width</td>
        <td>border-left-width: [number]px; border-right-width: [number]px</td>
        <td>bhw4 -> border-left-width: 4px; border-right-width: 4px</td>
    </tr>
    <tr>
        <td>bhw=[value]</td>
        <td>border-left-width, border-right-width</td>
        <td>border-left-width: value; border-right-width: value</td>
        <td>bhw=4px -> border-left-width: 4px; border-right-width: value</td>
    </tr>
    <tr>
        <td>bvw[number]</td>
        <td>border-top-width & border-bottom-width</td>
        <td>border-top-width: [number]px; border-bottom-width: [number]px</td>
        <td>bvw4 -> border-top-width: 4px; border-bottom-width: 4px</td>
    </tr>
    <tr>
        <td>bvw=[value]</td>
        <td>border-top-width, border-bottom-width</td>
        <td>border-top-width: value; border-bottom-width: value</td>
        <td>bvw=4px -> border-top-width: 4px; border-bottom-width: value</td>
    </tr>
    <tr>
        <td rowspan="14">border style</td>
        <td>bs-[style]</td>
        <td>border-style</td>
        <td>rme--bs-[style]</td>
        <td>rme--bs-dotted</td>
    </tr>
    <tr>
        <td>bs=[style]</td>
        <td>border-style</td>
        <td>border-style: [style]</td>
        <td>border-style: double</td>
    </tr>
    <tr>
        <td>bts-[style]</td>
        <td>border-top-style</td>
        <td>rme--bts-[style]</td>
        <td>rme--bts-dotted</td>
    </tr>
    <tr>
        <td>bts=[style]</td>
        <td>border-top-style</td>
        <td>border-top-style: [style]</td>
        <td>border-top-style: double</td>
    </tr>
    <tr>
        <td>brs-[style]</td>
        <td>border-right-style</td>
        <td>rme--brs-[style]</td>
        <td>rme--brs-dotted</td>
    </tr>
    <tr>
        <td>brs=[style]</td>
        <td>border-right-style</td>
        <td>border-right-style: [style]</td>
        <td>border-right-style: double</td>
    </tr>
    <tr>
        <td>bbs-[style]</td>
        <td>border-bottom-style</td>
        <td>rme--bbs-[style]</td>
        <td>rme--bbs-dotted</td>
    </tr>
    <tr>
        <td>bbs=[style]</td>
        <td>border-bottom-style</td>
        <td>border-bottom-style: [style]</td>
        <td>border-bottom-style: double</td>
    </tr>
    <tr>
        <td>bls-[style]</td>
        <td>border-left-style</td>
        <td>rme--bls-[style]</td>
        <td>rme--bls-dotted</td>
    </tr>
    <tr>
        <td>bls=[style]</td>
        <td>border-left-style</td>
        <td>border-left-style: [style]</td>
        <td>border-left-style: double</td>
    </tr>
    <tr>
        <td>bhs-[style]</td>
        <td>border-left-style, border-right-style</td>
        <td>rme--bhs-[style]</td>
        <td>rme--bhs-dotted</td>
    </tr>
    <tr>
        <td>bhs=[style]</td>
        <td>border-left-style, border-right-style</td>
        <td>border-left-style: [style]; border-right-style: [style]</td>
        <td>border-left-style: double; border-right-style: double</td>
    </tr>
    <tr>
        <td>bvs-[style]</td>
        <td>border-top-style, border-bottom-style</td>
        <td>rme--bvs-[style]</td>
        <td>rme--bvs-dotted</td>
    </tr>
    <tr>
        <td>bvs=[style]</td>
        <td>border-top-style, border-bottom-style</td>
        <td>border-top-style: [style]; border-bottom-style: [style]</td>
        <td>border-top-style: double; border-bottom-style: double</td>
    </tr>
    <tr>
        <td rowspan="14">border color</td>
        <td>bc-[builtin-color]</td>
        <td>border-color</td>
        <td>rme--bc-[builtin-color]</td>
        <td>rme--bc-primary</td>
    </tr>
    <tr>
        <td>bc=[color]</td>
        <td>border-color</td>
        <td>border-color=[color]</td>
        <td>border-color='#ff0000'</td>
    </tr>
    <tr>
        <td>btc-[builtin-color]</td>
        <td>border-top-color</td>
        <td>rme--btc-[builtin-color]</td>
        <td>rme--btc-primary</td>
    </tr>
    <tr>
        <td>btc=[color]</td>
        <td>border-top-color</td>
        <td>border-top-color=[color]</td>
        <td>border-top-color='#ff0000'</td>
    </tr>
    <tr>
        <td>brs-[builtin-color]</td>
        <td>border-right-color</td>
        <td>rme--brs-[builtin-color]</td>
        <td>rme--brs-primary</td>
    </tr>
    <tr>
        <td>brc=[color]</td>
        <td>border-right-color</td>
        <td>border-right-color=[color]</td>
        <td>border-right-color='#ff0000'</td>
    </tr>
    <tr>
        <td>bbs-[builtin-color]</td>
        <td>border-bottom-color</td>
        <td>rme--bbs-[builtin-color]</td>
        <td>rme--bbs-primary</td>
    </tr>
    <tr>
        <td>bbc=[color]</td>
        <td>border-bottom-color</td>
        <td>border-bottom-color=[color]</td>
        <td>border-bottom-color='#ff0000'</td>
    </tr>
    <tr>
        <td>bls-[builtin-color]</td>
        <td>border-left-color</td>
        <td>rme--bls-[builtin-color]</td>
        <td>rme--bls-primary</td>
    </tr>
    <tr>
        <td>blc=[color]</td>
        <td>border-left-color</td>
        <td>border-left-color=[color]</td>
        <td>border-left-color='#ff0000'</td>
    </tr>
    <tr>
        <td>bhs-[builtin-color]</td>
        <td>border-left-color, border-right-color</td>
        <td>rme--bhs-[builtin-color]</td>
        <td>rme--bhs-primary</td>
    </tr>
    <tr>
        <td>bhc=[color]</td>
        <td>border-left-color, border-right-color</td>
        <td>border-left-color=[color], border-right-color=[color]</td>
        <td>border-left-color='#ff0000'; border-right-color='#ff0000'</td>
    </tr>
    <tr>
        <td>bvs-[builtin-color]</td>
        <td>border-top-color, border-bottom-color</td>
        <td>rme--bvs-[builtin-color]</td>
        <td>rme--bvs-primary</td>
    </tr>
    <tr>
        <td>bvc=[color]</td>
        <td>border-top-color, border-right-color</td>
        <td>border-top-color=[color], border-right-color=[color]</td>
        <td>border-top-color='#ff0000'; border-right-color='#ff0000'</td>
    </tr>
    <tr>
        <td rowspan="14">border radius</td>
        <td>r[number]</td>
        <td>border-radius</td>
        <td>border-radius: [number]</td>
        <td>border-radius: 12px</td>
    </tr>
    <tr>
        <td>r=[value]</td>
        <td>border-radius</td>
        <td>border-radius: [value]</td>
        <td>border-radius: 12px</td>
    </tr>
    <tr>
        <td>rtl[number]</td>
        <td>border-top-left-radius</td>
        <td>border-top-left-radius: [number]</td>
        <td>border-top-left-radius: 12px</td>
    </tr>
    <tr>
        <td>rtr=[value]</td>
        <td>border-top-right-radius</td>
        <td>border-top-right-radius: [value]</td>
        <td>border-top-right-radius: 12px</td>
    </tr>
    <tr>
        <td>rbl[number]</td>
        <td>border-bottom-left-radius</td>
        <td>border-bottom-left-radius: [number]</td>
        <td>border-bottom-left-radius: 12px</td>
    </tr>
    <tr>
        <td>rbr=[value]</td>
        <td>border-bottom-right-radius</td>
        <td>border-bottom-right-radius: [value]</td>
        <td>border-bottom-right-radius: 12px</td>
    </tr>
    </tbody>
</table>
#### BackgroundColor
#### BackgroundImage