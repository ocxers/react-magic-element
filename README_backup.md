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

export default () => {
    return (
        <RME flex center>
            <RME w-90>
                <RME b-success d-row g32>
                    <RME xs24 sm16 md12 lg8 xl4 xxl2>
                        <RME bgc-primary>xs24 sm16 md12 lg8 xl4 xxl2</RME>
                    </RME>
                    <RME xs24 rest>
                        <RME d-row>
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
        </RME>
    )
}
```
#### Responsive
| Extra small screen / phone | Small screen / tablet | Medium screen / desktop | Large screen / wide desktop | Extra large screen / full hd | Extra extra large screen / large desktop |
| --- | --- | --- | --- | --- | --- |
| \<576px | \>=576px | \>=768px | \>=992px | \>=1200px | \>=1600px |
| xs | sm | md | lg | xl | xxl |
#### Columns
- xs[1-24]        -> 1/24 - 24/24, step: 1/24
- sm[1-24]
- md[1-24]
- lg[1-24]
- xl[1-24]
- xxl[1-24]
- col[1-24]
- rest          -> the rest width of the row
### Elements [Open in CodeSandbox](https://codesandbox.io/s/friendly-goldwasser-3oux8)
```tsx
import RME from 'react-magic-element

export default () => {
    const handleChange = (event) => {
      console.log(event.target.value);
    }
    return (
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
            <RME tag>Render as tag</RME>
            <RME alert>Render as alert</RME>
            <RME pv15 label={<RME w240 txt-right pr5>Password: </RME>} value={<RME input w360 type='password' placeholder='Please input password' onChange={handleChange} />}/>
        </>
    )
}
```
### Styles
#### Width [Open in CodeSandbox](https://codesandbox.io/s/intelligent-glade-xkk60)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME b w1024>width=1024px</RME>
            <RME b w={'80px'}>width=80px</RME>
            <RME b w-80>width=80%</RME>
            <RME b w={'80%'}>width=80%</RME>
        </>
    )
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

#### Height [Open in CodeSandbox](https://codesandbox.io/s/boring-ritchie-0plk4)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME h360 bg-success rest>
              height=360px
              <RME h-36 bg-danger bottom>
                height=parent's 36% height
              </RME>
            </RME>
        </>
    )
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

#### Padding [Open in CodeSandbox](https://codesandbox.io/s/nice-moser-1k0uc)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME p15>padding=15px</RME>
            <RME pv15>padding-top=15px; padding-bottom=15px;</RME>
            <RME ph15>padding-left=15px; padding-right=15px;</RME>
            <RME pt15>padding-top=15px;</RME>
            <RME pr15>padding-right=15px;</RME>
            <RME pb15>padding-bottom=15px;</RME>
            <RME pl15>padding-left=15px;</RME>
        </>
    )
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
            p16 -> padding: 16px <br>
            pt16 -> padding-top: 16px <br>
            pr16 -> padding-right: 16px <br>
            pb16 -> padding-bottom: 16px <br>
            pl16 -> padding-left: 16px
        </td>
    </tr>
    <tr>
        <td>p[t/r/b/l]={value}</td>
        <td>padding[-top/right/bottom/left]</td>
        <td>padding[-top/right/bottom/left]: [number]px</td>
        <td>
            p=16 -> padding: 16px <br>
            pt=16 -> padding-top: 16px <br>
            pr=16 -> padding-right: 16px <br>
            pb=16 -> padding-bottom: 16px <br>
            pl=16 -> padding-left: 16px
        </td>
    </tr>
    <tr>
        <td>ph[number]</td>
        <td>padding-left, padding-right</td>
        <td>padding-left: 16px; padding-right: [number]px</td>
        <td>
            ph16 -> padding-left: 16px; padding-right: 16px
        </td>
    </tr>
    <tr>
        <td>ph={value}</td>
        <td>padding-left, padding-right</td>
        <td>padding-left: 16px; padding-right: value</td>
        <td>
            ph=16 -> padding-left: 16px; padding-right: 16px
        </td>
    </tr>
    <tr>
        <td>pv[number]</td>
        <td>padding-top, padding-bottom</td>
        <td>padding-top: 16px; padding-bottom: [number]px</td>
        <td>
            pv16 -> padding-top: 16px; padding-bottom: 16px
        </td>
    </tr>
    <tr>
        <td>pv={value}</td>
        <td>padding-top, padding-bottom</td>
        <td>padding-top: 16px; padding-bottom: value</td>
        <td>
            pv=16 -> padding-top: 16px; padding-bottom: 16px
        </td>
    </tr>
    </tbody>
</table>

#### Margin [Open in CodeSandbox](https://codesandbox.io/s/vigorous-jepsen-y386t)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME m15>margin=15px</RME>
            <RME mv15>margin-top=15px; margin-bottom=15px;</RME>
            <RME mh15>margin-left=15px; margin-right=15px;</RME>
            <RME mt15>margin-top=15px;</RME>
            <RME mr15>margin-right=15px;</RME>
            <RME mb15>margin-bottom=15px;</RME>
            <RME ml15>margin-left=15px;</RME>
        </>
    )
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
            m16 -> margin: 16px <br>
            mt16 -> margin-top: 16px <br>
            mr16 -> margin-right: 16px <br>
            mb16 -> margin-bottom: 16px <br>
            ml16 -> margin-left: 16px
        </td>
    </tr>
    <tr>
        <td>m[t/r/b/l]={value}</td>
        <td>margin[-top/right/bottom/left]</td>
        <td>margin[-top/right/bottom/left]: [number]px</td>
        <td>
            m=16 -> margin: 16px <br>
            mt=16 -> margin-top: 16px <br>
            mr=16 -> margin-right: 16px <br>
            mb=16 -> margin-bottom: 16px <br>
            ml=16 -> margin-left: 16px
        </td>
    </tr>
    <tr>
        <td>mh[number]</td>
        <td>margin-left, margin-right</td>
        <td>margin-left: 16px; margin-right: [number]px</td>
        <td>
            mh16 -> margin-left: 16px; margin-right: 16px
        </td>
    </tr>
    <tr>
        <td>mh={value}</td>
        <td>margin-left, margin-right</td>
        <td>margin-left: 16px; margin-right: value</td>
        <td>
            mh=16 -> margin-left: 16px; margin-right: 16px
        </td>
    </tr>
    <tr>
        <td>mv[number]</td>
        <td>margin-top, margin-bottom</td>
        <td>margin-top: 16px; margin-bottom: [number]px</td>
        <td>
            mv16 -> margin-top: 16px; margin-bottom: 16px
        </td>
    </tr>
    <tr>
        <td>mv={value}</td>
        <td>margin-top, margin-bottom</td>
        <td>margin-top: 16px; margin-bottom: value</td>
        <td>
            mv=16 -> margin-top: 16px; margin-bottom: 16px
        </td>
    </tr>
    </tbody>
</table>

#### Border [Open in CodeSandbox](https://codesandbox.io/s/elegant-shirley-nrgbe)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
          <RME h1 b-danger>
            Border
          </RME>
          <RME b>border: 1px solid;</RME>
          <RME b bc-danger>
            border-color: danger;
          </RME>
          <RME b bc-primary blc-success brc-danger bvw36 bhw12 r-50 bs-double>
            <RME ul>
              <RME li>b: border: 1px solid;</RME>
              <RME li>bc-primary: border-color: primary;</RME>
              <RME li>blc-success: border-left-color: success;</RME>
              <RME li>brc-danger: border-right-color: danger;</RME>
              <RME li>
                bvw36: border-top-width: 36px; border-bottom-width: 36px;
              </RME>
              <RME li>
                bhw12: border-left-width: 12px; border-right-width: 12px;
              </RME>
              <RME li>r-50: border-radius: 50%;</RME>
              <RME li>bs-double: border-style: double;</RME>
            </RME>
          </RME>
        </>
    )
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

#### Color [Open in CodeSandbox](https://codesandbox.io/s/agitated-mccarthy-v7ttp)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME h1 primary>Color</RME>
            <RME primary>color: #007bff;</RME>
            <RME fc={'#FF3456'}>color=#FF3456</RME>
        </>
    )
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
        <td rowspan="3">Font Color</td>
        <td>fc={value}</td>
        <td>color</td>
        <td>color: value</td>
        <td>
            fc='red' -> color: red <br>
        </td>
    </tr>
    <tr>
        <td>[primary, secondary, success, danger, warning, info, light, dark, white, transparent]</td>
        <td>color</td>
        <td>rme--[primary, secondary, success, danger, warning, info, light, dark, white, transparent]</td>
        <td>
            primary -> rme--primary <br>
            secondary -> rme--secondary <br>
            success -> rme--success <br>
            danger -> rme--danger <br>
            warning -> rme--warning <br>
            info -> rme--info <br>
            light -> rme--light <br>
            dark -> rme--dark <br>
            white -> rme--white <br>
            transparent -> rme--transparent
        </td>
    </tr>
    </tbody>
</table>

#### FontSize [Open in CodeSandbox](https://codesandbox.io/s/lingering-platform-b0ss8)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME h1 primary>Font Size</RME>
            <RME fs32>rme--fs32</RME>
            <RME fs={23}>font-size: 23px;</RME>
            <RME fs23>font-size: 23px;</RME>
        </>
    )
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
        <td rowspan="2">Font Size</td>
        <td>fs={value}</td>
        <td>font-size</td>
        <td>font-size: value</td>
        <td>
            fs='23' -> font-size: 23px <br>
        </td>
    </tr>
    <tr>
        <td>fs-['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '24', '32', '48', '64', '72']</td>
        <td>font-size</td>
        <td>rme--fs[builtin value]</td>
        <td>
            rme--fs32
        </td>
    </tr>
    </tbody>
</table>


#### FontWeight [Open in CodeSandbox](https://codesandbox.io/s/exciting-hofstadter-3dji7)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME h1 primary>Font Weight</RME>
            <RME fw100>rme--fw100</RME>
            <RME fw={150}>font-weight: 150;</RME>
            <RME fw200>font-weight: 200;</RME>
        </>
    )
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
        <td rowspan="2">Font Weight</td>
        <td>fw[100, 200, 300, 400, 500, 600, 700, 800, 900]</td>
        <td>font-weight</td>
        <td>rme--fw200</td>
        <td>
            fw200 -> rme--fw200
        </td>
    </tr>
    <tr>
        <td>fw=[100~900]</td>
        <td>font-weight</td>
        <td>font-weight: number</td>
        <td>
            fw=150 -> font-weight: 150
        </td>
    </tr>
    </tbody>
</table>

#### Ellipsis text lines count [Open in CodeSandbox](https://codesandbox.io/s/vigorous-keller-8i8mh)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME h1 primary>Ellipsis text lines count</RME>
            <RME primary fs24 mb15 w240 lc1>lc1: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME secondary fs24 mb15 w240 lc2>lc2: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME success fs24 mb15 w240 lc3>lc3: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME danger fs24 mb15 w240 lc4>lc4: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
            <RME info fs24 mb15 w200 lc={7}>lc=7: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</RME>
        </>
    )
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
        <td rowspan="2">Ellipsis text lines count</td>
        <td>lc[1, 2, 3, 4]</td>
        <td>-webkit-line-clamp</td>
        <td>rme--l2</td>
        <td>
            lc2 -> rme--lc2
        </td>
    </tr>
    <tr>
        <td>lc={number}</td>
        <td>-webkit-line-clamp</td>
        <td>-webkit-line-clamp: [number]</td>
        <td>
            lc=7 -> -webkit-line-clamp: 7
        </td>
    </tr>
    </tbody>
</table>

#### boxSizing [Open in CodeSandbox](https://codesandbox.io/s/competent-morning-sruek)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME h1 primary>Box Sizing</RME>
            <RME b bc-secondary mini>mini box: 16px x 16px.</RME>
            <RME b bc-success small>small box: 24px x 24px.</RME>
            <RME b bc-danger medium>medium box: 32px x 32px.</RME>
            <RME b bc-warning big>big box: 48px x 48px.</RME>
            <RME b bc-info large>large box: 64px x 64px.</RME>
            <RME b bc-light huge>huge box:96px x 96px.</RME>
            <RME b bc-dark w234 h234>other box: 234px x 234px.</RME>
        </>
    )
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
        <td>Box Sizing</td>
        <td>['mini', 'small', 'medium', 'big', 'large', 'huge']</td>
        <td>width, height</td>
        <td>rme--big</td>
        <td>
            big -> rme--big
        </td>
    </tr>
    </tbody>
</table>

#### BackgroundColor [Open in CodeSandbox](https://codesandbox.io/s/condescending-albattani-rq464)
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME h1 primary>Background Color</RME>
            <RME b bgc-primary>bgc-primary -> rme--bgc-primary</RME>
            <RME b bgc-secondary>bgc-secondary -> rme--bgc-secondary</RME>
            <RME b bgc-success>bgc-success -> rme--bgc-success</RME>
            <RME b bgc-danger>bgc-danger -> rme--bgc-danger</RME>
            <RME b bgc-warning>bgc-warning -> rme--bgc-warning</RME>
            <RME b bgc-info>bgc-info -> rme--bgc-info</RME>
            <RME b bgc-light>bgc-light -> rme--bgc-light</RME>
            <RME b bgc-dark>bgc-dark -> rme--bgc-dark</RME>
            <RME b bgc-white>bgc-white -> rme--bgc-white</RME>
            <RME b bgc-transparent>bgc-transparent -> rme--bgc-transparent</RME>
            <RME b bgc={'red'}>bgc={'red'} -> background-color: red;</RME>
        </>
    )
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
        <td>Background Color</td>
        <td>bgc-['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'transparent']</td>
        <td>background-color</td>
        <td>rme--big-['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'transparent']</td>
        <td>
            bgc-primary -> rme--bgc-primary
        </td>
    </tr>
    <tr>
        <td>bgc={value}</td>
        <td>background-color</td>
        <td>background-color: value</td>
        <td>
            bgc={'red'} -> background-color: red
        </td>
    </tr>
    </tbody>
</table>

#### BackgroundImage
```tsx
import RME from 'react-magic-element

export default () => {
    return (
        <>
            <RME h1 primary>Background Image</RME>
            <RME bgi={img} w200 h200>background-image: url(img)</RME>
        </>
    )
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
        <td>Background Image</td>
        <td>bgi={imageUrl}</td>
        <td>background-image</td>
        <td>background-image: url(imageUrl)</td>
        <td>
            bgi={imageUrl} -> background-image: url(imageUrl)
        </td>
    </tr>
    </tbody>
</table>