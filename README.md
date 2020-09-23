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
        <td rowspan="3">Width</td>
        <td>w[number]</td>
        <td>width</td>
        <td>width: [number]px</td>
        <td>
            w13 -> width: 13px <br>
        </td>
    </tr>
    <tr>
        <td>w={value}</td>
        <td>width</td>
        <td>width: value</td>
        <td>
            w=13 -> width: 13px <br>
            w='13%' -> width: 13%
        </td>
    </tr>
    <tr>
        <td>w-[number]</td>
        <td>width</td>
        <td>width: [number]%</td>
        <td>
            w-13 -> width: 13% <br>
        </td>
    </tr>
    </tbody>
</table>

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
        <td rowspan="3">Height</td>
        <td>h[number]</td>
        <td>height</td>
        <td>height: [number]px</td>
        <td>
            h13 -> height: 13px <br>
        </td>
    </tr>
    <tr>
        <td>h={value}</td>
        <td>height</td>
        <td>height: value</td>
        <td>
            h=13 -> height: 13px <br>
            h='13%' -> height: 13%
        </td>
    </tr>
    <tr>
        <td>h-[number]</td>
        <td>height</td>
        <td>height: [number]%</td>
        <td>
            h-13 -> height: 13% <br>
        </td>
    </tr>
    </tbody>
</table>

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
        <td rowspan="6">Padding</td>
        <td>p[t/r/b/l][number]</td>
        <td>padding[-top/right/bottom/left]</td>
        <td>padding[-top/right/bottom/left]: [number]px</td>
        <td>
            p13 -> padding: 13px <br>
            pt13 -> padding-top: 13px <br>
            pr13 -> padding-right: 13px <br>
            pb13 -> padding-bottom: 13px <br>
            pl13 -> padding-left: 13px
        </td>
    </tr>
    <tr>
        <td>p[t/r/b/l]={value}</td>
        <td>padding[-top/right/bottom/left]</td>
        <td>padding[-top/right/bottom/left]: [number]px</td>
        <td>
            p=13 -> padding: 13px <br>
            pt=13 -> padding-top: 13px <br>
            pr=13 -> padding-right: 13px <br>
            pb=13 -> padding-bottom: 13px <br>
            pl=13 -> padding-left: 13px
        </td>
    </tr>
    <tr>
        <td>ph[number]</td>
        <td>padding-left, padding-right</td>
        <td>padding-left: 13px; padding-right: [number]px</td>
        <td>
            ph13 -> padding-left: 13px; padding-right: 13px
        </td>
    </tr>
    <tr>
        <td>ph={value}</td>
        <td>padding-left, padding-right</td>
        <td>padding-left: 13px; padding-right: value</td>
        <td>
            ph=13 -> padding-left: 13px; padding-right: 13px
        </td>
    </tr>
    <tr>
        <td>pv[number]</td>
        <td>padding-top, padding-bottom</td>
        <td>padding-top: 13px; padding-bottom: [number]px</td>
        <td>
            pv13 -> padding-top: 13px; padding-bottom: 13px
        </td>
    </tr>
    <tr>
        <td>pv={value}</td>
        <td>padding-top, padding-bottom</td>
        <td>padding-top: 13px; padding-bottom: value</td>
        <td>
            pv=13 -> padding-top: 13px; padding-bottom: 13px
        </td>
    </tr>
    </tbody>
</table>

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
        <td rowspan="6">Margin</td>
        <td>m[t/r/b/l][number]</td>
        <td>margin[-top/right/bottom/left]</td>
        <td>margin[-top/right/bottom/left]: [number]px</td>
        <td>
            p13 -> margin: 13px <br>
            mt13 -> margin-top: 13px <br>
            mr13 -> margin-right: 13px <br>
            mb13 -> margin-bottom: 13px <br>
            ml13 -> margin-left: 13px
        </td>
    </tr>
    <tr>
        <td>m[t/r/b/l]={value}</td>
        <td>margin[-top/right/bottom/left]</td>
        <td>margin[-top/right/bottom/left]: [number]px</td>
        <td>
            m=13 -> margin: 13px <br>
            mt=13 -> margin-top: 13px <br>
            mr=13 -> margin-right: 13px <br>
            mb=13 -> margin-bottom: 13px <br>
            ml=13 -> margin-left: 13px
        </td>
    </tr>
    <tr>
        <td>mh[number]</td>
        <td>margin-left, margin-right</td>
        <td>margin-left: 13px; margin-right: [number]px</td>
        <td>
            mh13 -> margin-left: 13px; margin-right: 13px
        </td>
    </tr>
    <tr>
        <td>mh={value}</td>
        <td>margin-left, margin-right</td>
        <td>margin-left: 13px; margin-right: value</td>
        <td>
            mh=13 -> margin-left: 13px; margin-right: 13px
        </td>
    </tr>
    <tr>
        <td>mv[number]</td>
        <td>margin-top, margin-bottom</td>
        <td>margin-top: 13px; margin-bottom: [number]px</td>
        <td>
            mv13 -> margin-top: 13px; margin-bottom: 13px
        </td>
    </tr>
    <tr>
        <td>mv={value}</td>
        <td>margin-top, margin-bottom</td>
        <td>margin-top: 13px; margin-bottom: value</td>
        <td>
            mv=13 -> margin-top: 13px; margin-bottom: 13px
        </td>
    </tr>
    </tbody>
</table>

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
        <td>rme--b</td>
        <td>border: 1px solid</td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="6">border width</td>
        <td>b[t/r/b/l]w[number]</td>
        <td>border[-top/right/bottom/left]-width</td>
        <td>border[-top/right/bottom/left]-width: [number]px</td>
        <td>
            bw4 -> border-width: 4px <br>
            btw4 -> border-top-width: 4px <br>
            brw4 -> border-right-width: 4px <br>
            bbw4 -> border-bottom-width: 4px <br>
            blw4 -> border-left-width: 4px
        </td>
    </tr>
    <tr>
        <td>b[t/r/b/l]w={value}</td>
        <td>border[-top/right/bottom/left]-width</td>
        <td>border[-top/right/bottom/left]-width: value</td>
        <td>
            bw=4px -> border-width: 4px <br>
            btw=4px -> border-top-width: 4px <br>
            brw=4px -> border-right-width: 4px <br>
            bbw=4px -> border-bottom-width: 4px <br>
            blw=4px -> border-left-width: 4px
        </td>
    </tr>
    <tr>
        <td>bhw[number]</td>
        <td>border-left-width & border-right-width</td>
        <td>border-left-width: [number]px; border-right-width: [number]px</td>
        <td>bhw4 -> border-left-width: 4px; border-right-width: 4px</td>
    </tr>
    <tr>
        <td>bhw={value}</td>
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
        <td>bvw={value}</td>
        <td>border-top-width, border-bottom-width</td>
        <td>border-top-width: value; border-bottom-width: value</td>
        <td>bvw=4px -> border-top-width: 4px; border-bottom-width: value</td>
    </tr>
    <tr>
        <td rowspan="6">border style</td>
        <td>b[t/r/b/l]s-[style]</td>
        <td>border[-top/right/bottom/left]-[style]</td>
        <td>rme--b[t/r/b/l]s-[style]</td>
        <td>
            rme--bs-dotted <br>
            rme--bts-dotted <br>
            rme--brs-dotted <br>
            rme--bbs-dotted <br>
            rme--bls-dotted <br>
        </td>
    </tr>
    <tr>
        <td>b[t/r/b/l]s={style}</td>
        <td>border[-top/right/bottom/left]-style</td>
        <td>border[-top/right/bottom/left]-style: [style]</td>
        <td>
            border-style: double <br>
            border-top-style: double <br>
            border-right-style: double <br>
            border-bottom-style: double <br>
            border-left-style: double <br>
        </td>
    </tr>
    <tr>
        <td>bhs-[style]</td>
        <td>border-left-style, border-right-style</td>
        <td>rme--bhs-[style]</td>
        <td>rme--bhs-dotted</td>
    </tr>
    <tr>
        <td>bhs={style}</td>
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
        <td>bvs={style}</td>
        <td>border-top-style, border-bottom-style</td>
        <td>border-top-style: [style]; border-bottom-style: [style]</td>
        <td>border-top-style: double; border-bottom-style: double</td>
    </tr>
    <tr>
        <td rowspan="6">border color</td>
        <td>b[t/r/b/l]c-[builtin-color]</td>
        <td>border[-top/right/bottom/left]-color</td>
        <td>rme--b[t/r/b/l]c-[builtin-color]</td>
        <td>
            rme--bc-primary <br>
            rme--btc-primary <br>
            rme--brc-primary <br>
            rme--bbc-primary <br>
            rme--blc-primary
        </td>
    </tr>
    <tr>
        <td>b[t/r/b/l]c={color}</td>
        <td>border[-top/right/bottom/left]-color</td>
        <td>border[-top/right/bottom/left]-color=[color]</td>
        <td>
            border-color='#ff0000' <br>
            border-top-color='#ff0000' <br>
            border-right-color='#ff0000' <br>
            border-bottom-color='#ff0000' <br>
            border-left-color='#ff0000'
        </td>
    </tr>
    <tr>
        <td>bhs-[builtin-color]</td>
        <td>border-left-color, border-right-color</td>
        <td>rme--bhs-[builtin-color]</td>
        <td>rme--bhs-primary</td>
    </tr>
    <tr>
        <td>bhc={color}</td>
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
        <td>bvc={color}</td>
        <td>border-top-color, border-right-color</td>
        <td>border-top-color=[color], border-right-color=[color]</td>
        <td>border-top-color='#ff0000'; border-right-color='#ff0000'</td>
    </tr>
    <tr>
        <td rowspan="2">border radius</td>
        <td>r[tl/tr/bl/br][number]</td>
        <td>border[-top-left/top-right/bottom-left/bottom-right]-radius</td>
        <td>border[-top-left/top-right/bottom-left/bottom-right]-radius: [number]</td>
        <td>
            border-radius: 12px <br>
            border-top-left-radius: 12px <br>
            border-top-right-radius: 12px <br>
            border-bottom-left-radius: 12px <br>
            border-bottom-right-radius: 12px
        </td>
    </tr>
    <tr>
        <td>r[tl/tr/bl/br]={value}</td>
        <td>border[-top-left/top-right/bottom-left/bottom-right]-radius</td>
        <td>border[-top-left/top-right/bottom-left/bottom-right]-radius: [value]</td>
        <td>
            border-radius: 12px <br>
            border-top-left-radius: 12px <br>
            border-top-right-radius: 12px <br>
            border-bottom-left-radius: 12px <br>
            border-bottom-right-radius: 12px
        </td>
    </tr>
    </tbody>
</table>

#### BackgroundColor

#### BackgroundImage