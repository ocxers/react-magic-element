const toArr = (str: string, spliter: any = ','): string[] => {
  return str.toString().split(spliter)
}
const isBoolean = (b: any): boolean => {
  return typeof b === 'boolean'
}
String.prototype.includes = Array.prototype.includes = (search: any, start = 0): boolean => {
  if (search instanceof RegExp) {
    throw TypeError('first argument must not be a RegExp')
  }

  if (typeof search === 'string') {
    // @ts-ignore
    return this.indexOf(search, start) !== -1
  } else {
    const indexes: string[] = []
    search.map((s: string) => {
      // @ts-ignore
      if (this.indexOf(search, start) !== -1) {
        indexes.push(s)
      }
    })

    return !!indexes.length
  }
}

const mixArrays = (prevArr: any, nextArr: any, appendPre = false, joiner = '-'): string[] => {
  prevArr = typeof prevArr === 'string' ? toArr(prevArr) : prevArr
  nextArr = typeof nextArr === 'string' ? toArr(nextArr) : nextArr
  const tempArr = appendPre ? nextArr : []
  prevArr.map((str: string) => {
    tempArr.push(...nextArr.map((nxt: string) => {
      return [str, nxt].join(joiner)
    }))
  })

  return tempArr
}

const colorsValues: any = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#fff',
  transparent: 'transparent'
}
const colors: string[] = Object.keys(colorsValues).map((color: string) => `-${color}`)
const getColors = (key = ''): string[] => {
  if (key) {
    return colors.map((c: string) => key + c)
  } else {
    return Object.keys(colorsValues)
  }
}

const capitalize = (w: string) => {
  return w.charAt(0).toUpperCase() + w.slice(1)
}

const getShortcut = (str: string) => {
  return toArr(str.replace(/[A-Z]/g, match => {
    return '-' + match.toLowerCase()
  }), '-').map(k => k.charAt(0)).join('')
}

const formatHVValue = (val: string) => {
  let tempVal = val
  if (val.toLowerCase().indexOf('horizontal') > -1) {
    return [tempVal.replace('Horizontal', 'Left'), tempVal.replace('Horizontal', 'Right')].join(',')
  } else if (val.toLowerCase().indexOf('vertical') > -1) {
    return [tempVal.replace('Vertical', 'Top'), tempVal.replace('Vertical', 'Bottom')].join(',')
  } else {
    return val
  }
}

const gridKeys: string[] = toArr('col,xs,sm,md,lg,xl,xxl')
const gridValues: string[] = toArr('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24')
const boxSize: string[] = toArr('mini,small,medium,big,large,huge')
const direction: string[] = toArr('top,right,bottom,left,horizontal,vertical')
const zeroToThirty: string[] = toArr('0,5,10,15,20,25,30') // padding, margin default values
const oneToFour: string[] = toArr('1,2,3,4')
const elements: string[] = toArr('input,h1,h2,h3,h4,h5,h6,p,nav,label,header,footer,button,btn,a,ul,ol,li,span,section,address')
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
  'fill',

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
  ...mixArrays('fs', '9,10,11,12,13,14,15,16,17,18,24,32,48,64,72', false, ''),
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

const mixObjects: any = (short: string, attr: string, values: string[], attrs: string[] = [], append: string = '') => { // padding, top, right, bottom, left
  let tempObj: any = {}
  tempObj[short] = attr
  values.map((val: string) => {
    tempObj[`${short}${getShortcut(val)}`] = formatHVValue(`${attr}${capitalize(val)}${append}`)
    if (attrs) {
      /**
       * Border Top Width/Style/Color
       */
      attrs.map((att: string) => {
        tempObj[`${short}${getShortcut(val)}${getShortcut(att)}`] = formatHVValue(`${attr}${capitalize(val)}${capitalize(att)}${append}`)
      })
    }
  })

  return tempObj
}
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
  bgc: 'backgroundColor',
  bgi: 'backgroundImage',
  ...mixObjects('p', 'padding', direction),
  ...mixObjects('m', 'margin', direction),
  ...mixObjects('b', 'border', direction, toArr('width,style,color')),
  ...mixObjects('r', 'border', toArr(',topRight,bottomRight,topLeft,bottomLeft'), null, 'Radius')
}

const getStyles = (key: string, val: string) => {
  const styles: any = {}
  if (key !== 'children' && typeof val === 'string') {
    (toArr(mappings[key] || '') || []).map((k: any) => {
      if (k === 'zIndex') {
        styles[k] = Number.parseInt(val)
      } else {
        let tempVal = val.split(' ').map((tv: string) => colorsValues[tv] || tv).join(' ')
        tempVal = tempVal.split(',').map((tv: string) => colorsValues[tv] || tv).join(' ')
        styles[k] = tempVal
      }
    })
  }

  return styles
}

const utils = {
  mappingsAndClasses: {
    elements,
    styleMappings: mappings,
    builtinClasses
  },
  getKeyValue (key: string, value: any) {
    const keyValue: any = {
      key: key,
      value: value,
      classNames: [],
      styles: {} as any
    }
    const classNames: any = {}
    /**
     * Handle customer class names, like:
     * cn-container               -> 'container'
     * cn-form-container          -> 'form-container'
     * cn='form-item,label-left'  -> 'form-item label-left'
     * cn='form-item label-left'  -> 'form-item label-left'
     * classNames='form-item label-left'    -> 'form-item label-left'
     */
    if (key.includes(toArr('cn-,cn,classNames') as any, 0)) {
      if (key.includes('cn-', 0)) {
        classNames[key.split('-').slice(1).join('-')] = 1
      } else {
        classNames[toArr(value).join(' ')] = 1
      }

      keyValue.classNames = classNames
    }

    /**
     * If key is in builtinClasses, like:
     * b, bs-dotted, b-primary, bw1, w-10, flex, xs16, left, txt-left, fc-primary,
     * fs100, fw100, mini, lc1, bg-primary, bgc-primary, btn, link,
     */
    if (builtinClasses.includes(key)) {
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
    if (key === 'box') {
      let bw = ''
      let bh = ''
      let kvs: any
      /**
       * box-number             -> width: number, height: number
       * box-w-h                -> width: w,      height: h
       */
      if (key.includes('-')) {
        kvs = key.split('-').slice(1)
      } else {
        /**
         * box='w,h'              -> width: w,      height: h
         * box='w,'               ->                height: h
         * box=',h'               ->                height: h
         */
        kvs = toArr(value)
      }

      if (kvs.length > 1) {
        kvs.map((k: string) => {
          if (k.includes('w', 0)) {
            bw = k.replace('w', '')
          } else if (k.includes('h', 0)) {
            bh = k.replace('h', '')
          } else if (bw) {
            bh = k
          } else {
            bw = k
          }
        })
      } else {
        kvs = kvs[0]
        if (kvs.includes('w', 0)) {
          bw = kvs.replace('w', '')
        } else if (kvs.includes('h', 0)) {
          bh = kvs.replace('h', '')
        } else {
          bw = kvs
          bh = kvs
        }
      }

      Object.assign(keyValue.styles, getStyles('w', utils.getValue(bw)))
      Object.assign(keyValue.styles, getStyles('h', utils.getValue(bw)))

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

    /**
     * If key is formatted as `key-value`, like
     * w-32 -> width: 32%, fc-red -> color: red
     */
    if (key.includes('-')) {

    }

    const formattedKey = key.replace(/[A-Z]|(\d+)/g, match => {
      return '-' + match.toLowerCase()
    })
    // key, value, styles, classNames
    if (isBoolean(value)) {
      /**
       * key:
       * 1. key
       * 2. key-value: fc-primary, bgc-primary
       */
      // 1. key
      if (builtinClasses.includes(key)) {
        /**
         * For key is class:
         * border:      b
         * position:    fill
         * color:       primary, secondary, success, danger, warning, info, light, dark, white, transparent
         * layout:      flex, row, rest, hidden, visible, fixed, absolute, relative, circle
         * alignment:   left, center, right, top, middle, bottom
         * font/text:   txt-left, txt-center, txt-right, underline,
         */
        keyValue.classNames = [key]
        return keyValue
      }
      if (!key.includes('-')) {
        keyValue.classNames = [key]


      }
    }
    /**
     * Key format:
     * 1. key[number]:
     *    a. g32 or gh32:               right=16px,              left=16px
     *    b. gv32:            top=16px,             bottom=16px
     *    c. gt16:            top=16px
     *    d. gr8:                       right=16px
     *    e. gb32:                                  bottom=32px
     *    f. gl4:                                                left=4px
     * 2. key-number: g-32, gb-32
     * 3. key=[number]: g={32}, gb={32}
     * 4. key=[string]:
     *    a. g={'16'}:        top=16px, right=16px, bottom=16px, left=16px
     *    b. g={'h16'}:                 right=16px,              left=16px
     *    b. g={'v16'}:       top=16px,             bottom=16px
     *    b. g={'16,8,,8'}    top=16px, right=8px,  bottom=0,    left=8px
     *    c. g={'t4,b5'}      top=4px,              bottom=5px
     */

    if (formattedKey === key) {
      // g=
      keyValue.key = key
    } else {
      // g[number]
      const [k, v] = formattedKey.split('-')

    }

    return keyValue
  },
  formatKey (key: string) {
    return key.replace(/[A-Z]/g, match => {
      return '-' + match.toLowerCase()
    })
  },
  checkGridKey (key: string) {
    let tempKey = toArr(key, /(\d+)/)
    if (gridKeys.indexOf(tempKey[0]) > -1) {
      tempKey.pop()
      if (tempKey[0] === 'col') {
        return tempKey.join('-')
      }

      if (tempKey.length) {
        return 'col-' + tempKey.join('-')
      } else {
        return key
      }
    } else {
      return null
    }
  },
  getPercentageHandler (k: string) {
    let arr = toArr(k, /-/g)
    if (arr.length > 0 && arr[0] !== k) {
      return arr
    }

    return null
  },
  getPixelHandler (k: string) {
    let arr = toArr(k, /(\d+)/g)
    if (arr.length > 0 && arr[0] !== k) {
      return arr
    }

    return null
  },
  isBoolean: isBoolean,
  setConfig (config: any) {
    let colorCssProperties: any = {}
    Object.keys(config.colors).map((key: string) => {
      const color = config.colors[key]
      colorsValues[key] = color[0]
      colorCssProperties['rme--' + key] = {
        color: color[0]
      }
      colorCssProperties['rme--fc-' + key] = {
        color: color[0]
      }
      colorCssProperties['rme--bc-' + key] = {
        backgroundColor: color[0]
      }
      colorCssProperties['rme--bgc-' + key] = {
        backgroundColor: color[0]
      }
      colorCssProperties['rme--btn-tag'] = {
        borderColor: color[0],
        backgroundColor: color[0],
        color: color[1]
      }
      colorCssProperties['rme--btn-tag-plain'] = {
        borderColor: color[0],
        color: color[0]
      }
    })

    utils.rmeConfig.colors = colorCssProperties
  },
  getValue (val: any) {
    if (!utils.isBoolean(val) && val) {
      val = val.toString()
      if (val.indexOf('%') > -1 || val === 'auto') {
        return val
      } else {
        return val.replace(/px/, '') + 'px'
      }
    } else {
      return val
    }
  },
  rmeConfig: {
    colors: {} as any
  } as any,
  colorsValues: colorsValues,
  boxSize: boxSize,
  isArray (arr: any) {
    return Array.isArray(arr)
  },
  toArr: toArr
}

export default utils