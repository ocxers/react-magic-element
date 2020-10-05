import {
  gridKeys,
  gridValues,
  boxSize,
  direction,
  zeroToThirty,
  oneToFour,
  colorsValues,
  fontSizes
} from './consts'
import {
  checkGridKey,
  toArr,
  isBoolean,
  isNumber,
  mixArrays,
  getColors,
  mixObjects,
  includes,
  computeTRBLStyles
} from './fns'

const builtinClasses: string[] = [
  /* border */
  'b',
  /* border style */
  ...toArr('bs-dotted,bs-dashed,bs-solid,bs-double'),
  /* border color */
  ...getColors('b'),
  ...getColors('bc'),
  /* border width */
  ...mixArrays('bw', oneToFour, false, ''),

  /* border radius */
  'r-100',
  ...mixArrays('r', oneToFour, false, ''),

  /* position */
  'pos',

  /* width/height */
  ...mixArrays('w,h', '10,20,30,40,50,100'),

  /* layout */
  ...toArr('flex,row,rest,fixed,absolute,relative,circle'),

  /* grids */
  ...mixArrays(gridKeys, gridValues),

  /* hidden/visible */
  ...mixArrays('xs,sm,md,lg,xl,xxl', 'hidden,visible', true),

  /* alignment */
  ...toArr('left,center,right,top,middle,bottom'),

  /* font/text */
  ...toArr('txt-left,txt-center,txt-right,underline,hover-underline,line-through,pointer'),
  /* font color */
  ...getColors(),
  ...getColors('fc'),
  /* font size */
  ...mixArrays('fs', fontSizes, false, ''),
  /* font weight */
  ...mixArrays('fw', '100,200,300,400,500,600,700,800,900', false, ''),

  /* box size */
  ...boxSize,

  /* Line clamp counts */
  ...mixArrays('lc', oneToFour, false, ''),

  /* background color */
  ...getColors('bg'),
  ...getColors('bgc'),

  /* padding */
  ...mixArrays('p,ph,pv,pt,pr,pb,pl', zeroToThirty, false, ''),

  /* margin */
  ...mixArrays('m,mh,mv,mt,mr,mb,ml', zeroToThirty, false, ''),

  /* others */
  ...toArr('disabled,group,bgi,circle,tag,alert,plain,link,btn,s')
]

const mappings: any = {
  w: 'width',
  h: 'height',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  z: 'zIndex',
  fc: 'color',
  fs: 'fontSize',
  fw: 'fontWeight',
  lc: 'WebkitLineClamp',
  s: 'boxShadow',
  bg: 'backgroundColor',
  bgc: 'backgroundColor',
  bgi: 'backgroundImage',
  ...mixObjects('p', 'padding', direction),
  ...mixObjects('m', 'margin', direction),
  ...mixObjects('b', 'border', direction, toArr('width,style,color')),
  ...mixObjects('r', 'border', toArr(',topRight,bottomRight,topLeft,bottomLeft'), null, 'Radius')
}

const utils = {
  getKeyValue (key: string, value?: any) {
    const keyValue: any = {
      key: key,
      value: value,
      classNames: [],
      customerClassNames: [],
      styles: {} as any
    }

    let classNames: any = {}
    /**
     * Handle customer class names, like:
     * cn-container                         -> 'container'              // For one class
     * cn-form-container                    -> 'form-container'         // For one class
     * cn='form-item,label-left'            -> 'form-item label-left'   // Mulitple class joined with 'comma'
     * cn='form-item label-left'            -> 'form-item label-left'   // Mulitple class joined with 'space'
     */
    if (includes(key, 'cn-,cn', 0)) {
      if (includes(key, 'cn-', 0)) {
        classNames[key.split('-').slice(1).join('-')] = 1
      } else {
        value.replace(/,/g, ' ').split(' ').map((k: string) => {
          classNames[k] = 1
        })
      }

      keyValue.customerClassNames = Object.keys(classNames)
      classNames = {}
    }

    /**
     * If key is in builtinClasses, like:
     * b, bs-dotted, b-primary, bw1, w-10, flex, xs16, left, txt-left, fc-primary,
     * fs100, fw100, mini, lc1, bg-primary, bgc-primary, btn, link,
     */
    if (includes(builtinClasses, key)) {
      keyValue.classNames.push(key)
      /**
       * If key has no right value
       */
      if (isBoolean(value)) {
        return keyValue
      }
    }

    /**
     * Handle box size, width, height, like:
     * box-num                -> box-240            => width: 240px,  height: 240px
     * box-[num]-[num]        -> box-240-160        => width: 240px,  height: 160px
     *                        -> box--160           =>                height: 160px
     * box-[w+num]-[h+num]    -> box-w240-h160      => width: 240px,  height: 160px
     *                        -> box-h160-w240      => width: 240px,  height: 160px
     *                        -> box-w240           => width: 240px,
     *                        -> box-h160           =>                height: 160px
     * box='num[ num]'        -> box='240 160'      => width: 240px,  height: 160px
     *                        -> box='240'          => width: 240px,  height: 240px
     * box='[w+num][ h+num]   -> box='w240 h160'    => width: 240px,  height: 160px
     *                        -> box='h160 w240'    => width: 240px,  height: 160px
     *                        -> box='w240'         => width: 240px,
     *                        -> box='h160'         =>                height: 160px
     * box='num[,num]'        -> box='240,160'      => width: 240px,  height: 160px
     *                        -> box=',160'         =>                height: 160px
     * box='[w+num][,h+num]   -> box='w240,h160'    => width: 240px,  height: 160px
     *                        -> box='h160,w240'    => width: 240px,  height: 160px
     *                        -> box='w240'         => width: 240px,
     *                        -> box='h160'         =>                height: 160px
     */
    let cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'box-,box',
      doNotAppend: true,
      kvObj: {
        width: '',
        height: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle pos (position), top, right, bottom, left, like:
     * pos-num                                                -> pos-15               => top: 15px,   right: 15px,  bottom: 15px,   left: 15px
     * pos-[num]-[num]-[num]-[num]                            -> pos-15-15-15-15      => top: 15px,   right: 15px,  bottom: 15px,   left: 15px
     *                                                        -> pos-15-10            => top: 15px,   right: 10px,  bottom: 15px,   left: 10px
     *                                                        -> pos-15-10-5          => top: 15px,   right: 10px,  bottom: 5px,    left: 10px
     *                                                        -> pos-15-10-5-0        => top: 15px,   right: 10px,  bottom: 5px,    left: 0px
     *                                                        -> pos--10-5-0          =>              right: 10px,  bottom: 5px,    left: 0px
     *                                                        -> pos--10--0           =>              right: 10px,                  left: 0px
     *                                                        -> pos---15             =>                            bottom: 15px,
     * pos-[t+num]-[r+num]-[b+num]-[l+num]-[h+num]-[v+num]    -> pos-t15-r10-b5-l0    => top: 15px,   right: 10px,  bottom: 5px,    left: 0px
     *                                                        -> pos-h10-v15          => top: 15px,   right: 10px,  bottom: 15px,   left: 10px
     *                                                        -> pos-t15-h10          => top: 15px,   right: 10px,                  left: 10px
     * pos='num[ num][ num][ num]'                            -> pos='15'             => top: 15px,   right: 15px,  bottom: 15px,   left: 15px
     *                                                        -> pos='15 10'          => top: 15px,   right: 10px,  bottom: 15px,   left: 10px
     *                                                        -> pos='15 10 5'        => top: 15px,   right: 10px,  bottom: 5px,    left: 10px
     *                                                        -> pos='15 10 5 0'      => top: 15px,   right: 10px,  bottom: 5px,    left: 0px
     * pos='[t+num][ r+num][ b+num][ l+num][ h+num][ v+num]'  -> pos='t15 r10 b5 l0'  => top: 15px,   right: 10px,  bottom: 5px,    left: 0px
     *                                                        -> pos='h10 v15'        => top: 15px,   right: 10px,  bottom: 15px,   left: 10px
     *                                                        -> pos='t15 h10'        => top: 15px,   right: 10px,                  left: 10px
     * pos='num[,num][,num][,num]'                            -> pos='15,10,,5'       => top: 15px,   right: 10px,                  left: 5px
     * pos='[t+num][,r+num][,b+num][,l+num][,h+num][,v+num]'  -> pos='t15,r10,b5,l0'  => top: 15px,   right: 10px,  bottom: 5px,    left: 0px
     *                                                        -> pos='h10,v15'        => top: 15px,   right: 10px,  bottom: 15px,   left: 10px
     *                                                        -> pos='t15,h10'        => top: 15px,   right: 10px,                  left: 10px
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'pos-,pos',
      doNotAppend: true,
      kvObj: {
        top: '',
        right: '',
        bottom: '',
        left: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle pt (paddingTop)
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'pt-,pt',
      kvObj: {
        paddingTop: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle pr (paddingRight)
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'pr-,pr',
      kvObj: {
        paddingRight: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle pb (paddingBottom)
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'pb-,pb',
      kvObj: {
        paddingBottom: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle pl (paddingLeft)
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'pl-,pl',
      kvObj: {
        paddingLeft: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }
    /**
     * Handle p (padding), top, right, bottom, left
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'p-,p',
      not: 'pos',
      kvObj: {
        paddingTop: '',
        paddingRight: '',
        paddingBottom: '',
        paddingLeft: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle m (margin), top, right, bottom, left
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'm-,m',
      kvObj: {
        marginTop: '',
        marginRight: '',
        marginBottom: '',
        marginLeft: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle m (margin), top, right, bottom, left
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'mt-,mt',
      kvObj: {
        marginTop: '',
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle m (margin), top, right, bottom, left
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'mr-,mr',
      kvObj: {
        marginRight: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle m (margin), top, right, bottom, left
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'mb-,mb',
      kvObj: {
        marginBottom: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle m (margin), top, right, bottom, left
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'ml-,ml',
      kvObj: {
        marginLeft: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle m (margin), top, right, bottom, left
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'm-,m',
      kvObj: {
        marginTop: '',
        marginRight: '',
        marginBottom: '',
        marginLeft: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle bw (borderWidth), top, right, bottom, left
     */
    cptResult = computeTRBLStyles({
      key,
      value,
      cptKeys: 'bw-,bw',
      doNotAppend: true,
      kvObj: {
        borderTopWidth: '',
        borderRightWidth: '',
        borderBottomWidth: '',
        borderLeftWidth: ''
      }
    }, keyValue)

    if (cptResult) {
      return keyValue
    }

    /**
     * Handle grid keys
     * col[1~24], xs[1~24], sm[1~24], md[1~24], lg[1~24], xl[1~24], xxl[1~24]
     */
    let gridKey = checkGridKey(key)
    if (gridKey) {
      keyValue.classNames.push(gridKey)
      return keyValue
    }
    /**
     * Handle gutter g[num] g={num}, like:
     * g32
     * g=32
     */
    if (includes(key, 'g', 0)) {
      let gutter = toArr(key, /(\d+)/g)
      let gk = gutter[0]
      let gv = gutter[1] || value
      keyValue.classNames.push(gk)
      if (gv) {
        // @ts-ignore
        keyValue.styles['--gutter'] = `-${gv / 2}px`
        // @ts-ignore
        keyValue.styles['--child-gutter'] = `${gv / 2}px`
      }

      return keyValue
    }

    /**
     * Handle key-[val] properties, like:
     * w-[num]                -> w-88         => width: 88%
     * h-[num]                -> h-88         => height: 88%
     * fc-[color]             -> fc-primary   => color: [primary]
     * btc-[color]            -> btc-primary  => border-top-color: [primary]
     */
    if (includes(key, '-')) {
      let sizeKey: any = toArr(key, '-')
      if (isNumber(sizeKey[1])) {
        /**
         * w-[num]                -> w-88         => width: 88%
         * h-[num]                -> h-88         => height: 88%
         */
        keyValue.styles[mappings[sizeKey[0]]] = `${sizeKey[1]}%`
      } else {
        let val = sizeKey[1];
        (toArr(mappings[sizeKey[0]] || '') || []).map((k: any) => {
          /**
           * bhc-[color]        -> bhc-primary  => border-left-color: primary   border-right-color: primary
           */
          let tempVal = val.split(' ').map((tv: string) => colorsValues[tv] || tv).join(' ')
          tempVal = tempVal.split(',').map((tv: string) => colorsValues[tv] || tv).join(' ')
          keyValue.styles[k] = tempVal
        })
      }

      return keyValue
    }

    /**
     * Handle key[val] properties, like:
     * w[num]                -> w240         => width: 240px
     * h[num]                -> h360         => height: 360px
     */
    let [iKey, iValue = value] = toArr(key, /(\d+)/g)
    if (iValue) {
      (toArr(mappings[iKey] || '') || []).map((k: any) => {
        if (includes(k, 'zIndex,fontWeight,WebkitLineClamp')) {
          keyValue.styles[k] = Number.parseInt(iValue)
        } else if (isNumber(iValue)) {
          keyValue.styles[k] = `${iValue}px`
        } else if (typeof iValue === 'string') {
          /**
           * brc={color}        -> bhc={primary}  => border-right-color: primary   border-right-color: primary
           */
          let tempVal = iValue.split(' ').map((tv: string) => colorsValues[tv] || tv).join(' ')
          tempVal = tempVal.split(',').map((tv: string) => colorsValues[tv] || tv).join(' ')
          keyValue.styles[k] = tempVal
        } else {
          /**
           * Other properties like: onChange
           */
        }
      })

      return keyValue
    }

    return keyValue
  }
}

export default utils