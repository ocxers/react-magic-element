import {
  gridKeys,
  gridValues,
  boxSize,
  direction,
  zeroToThirty,
  oneToFour,
  colorsValues,
  fontSizes,
  elements,
  htmlAttributes,
  rmeConfig
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
  computeTRBLStyles,
  isUndefined
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
  ...toArr('disabled,group,bgi,circle,tag,alert,plain,link,btn,s,hover-underline,line-through,underline,pointer')
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

const getKeyValue = (key: string, value?: any) => {
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
  let cptResult: any

  const trbls = [{
    key: 'box',                         // box size:    width,    height
    fills: 'w,h'
  }, {
    key: 'pos',                         // position:    top, right, bottom, left
    fills: 'top,right,bottom,left'
  }, {
    key: 'pt'                           // padding-top
  }, {
    key: 'pr'                           // padding-right
  }, {
    key: 'pb'                           // padding-bottom
  }, {
    key: 'pl'                           // padding-left
  }, {
    key: 'ph'                           // padding horizontal:  padding-right,  padding-left
  }, {
    key: 'pv'                           // padding vertical:    padding-top,    padding-bottom
  }, {
    key: 'p',
    not: 'pos',
    fills: 'pt,pr,pb,pl'
  }, {
    key: 'mt'
  }, {
    key: 'mr'
  }, {
    key: 'mb'
  }, {
    key: 'ml'
  }, {
    key: 'mh'
  }, {
    key: 'mv'
  }, {
    key: 'm',
    not: 'md',
    fills: 'mt,mr,mb,ml'
  }, {
    key: 'btw'
  }, {
    key: 'brw'
  }, {
    key: 'bbw'
  }, {
    key: 'blw'
  }, {
    key: 'bhw'
  }, {
    key: 'bvw'
  }, {
    key: 'bw',
    fills: 'btw,brw,bbw,blw'
  }, {
    key: 'bc',
    type: 'string',
    fills: 'btc,brc,bbc,blc'
  }, {
    key: 'bs',
    type: 'string',
    fills: 'bts,brs,bbs,bls'
  }, {
    key: 'rtl'
  }, {
    key: 'rtr'
  }, {
    key: 'rbl'
  }, {
    key: 'rbr'
  }, {
    key: 'r',
    fills: 'rtl,rtr,rbr,rbl'
  }]

  trbls.map((obj: any) => {
    if (!cptResult) {
      let kvObj: any = {}
      toArr(obj.fills || obj.key).map((mapping: string) => {
        toArr(mappings[mapping]).map((sty: string) => kvObj[sty] = '')
      })

      cptResult = computeTRBLStyles({
        key,
        value,
        not: obj.not,
        type: obj.type,
        cptKeys: [obj.key + '-', obj.key],
        kvObj: kvObj
      }, keyValue)
    }
  })

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
    toArr(mappings[iKey]).map((k: any) => {
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

const utils = {
  computeProps (props: any) {
    let tagName = 'div'

    if (props.link && props.href) {
      tagName = 'a'
    }

    elements.map((el: any) => {
      if (props[el] && isBoolean(props[el])) {
        tagName = el
      }
    })

    if (props.btn) {
      tagName = 'button'
    }

    let keys: Array<string> = []
    let htmlAttrs: Array<string> = []   // html attributes
    let unknownAttrs: Array<string> = []
    Object.keys(props).map((key: string) => {
      if (!includes(htmlAttributes.concat(toArr('children,label,value')), key, NaN, true)) {
        keys.push(key)
      } else if (!includes(toArr('children,label,value'), key)) {
        htmlAttrs.push(key)
      }
    })

    let classNameList: Array<any> = []
    let styleList: any = {}

    /**
     * Push preset class for button
     */
    if (tagName === 'button') {
      classNameList.push('rme--btn')
    }

    keys.map((key: string) => {
      /**
       * Push preset class from line clamp
       */
      if (key.indexOf('lc') === 0) {
        classNameList.push('rme--lc')
      }

      if (!includes(elements, key) || !isBoolean(props[key])) {
        const iKeyVal = getKeyValue(key, props[key])
        if (key !== 'className' && key !== 'style' && !iKeyVal.classNames.length && !iKeyVal.customerClassNames.length && !Object.keys(iKeyVal.styles).length && !includes(elements, key, NaN, true)) {
          // unknown prop
          unknownAttrs.push(key)
        }
        classNameList.push(...iKeyVal.classNames.map((cn: string) => `rme--${cn}`))
        classNameList.push(...iKeyVal.customerClassNames)
        if (key === 'bgi') {
          iKeyVal.styles.backgroundImage = 'url(' + props['bgi'] + ')'
        }
        Object.assign(styleList, iKeyVal.styles)
      }
    })

    let computerProps: any = {
      className: ['rme', props.className, ...classNameList].reduce((cls: Array<string>, cn: any) => {
        if (cn && !includes(cls, cn)) {
          cls.push(cn)
        }

        return cls
      }, []).join(' '),
      style: Object.assign(styleList, props.style),
      tagName: tagName
    }

    /**
     * Handle html attributes
     */
    htmlAttrs.map((prop: string) => {
      if (!includes(elements, prop, NaN, true)) {
        computerProps[prop] = props[prop]
      }
    })

    /**
     * Handle unknown attributes
     */
    unknownAttrs.map((prop: string) => {
      computerProps[prop] = isBoolean(props[prop]) ? props[prop].toString() : props[prop]
    })

    if (tagName === 'input') {
      if (!isUndefined(props.value)) {
        computerProps.value = props.value
      }
    }

    Object.keys(rmeConfig.colors).map((key: any) => {
      if (computerProps.className.indexOf(key) > -1) {
        if (computerProps.className.indexOf('rme--btn') > -1 || computerProps.className.indexOf('rme--tag') > -1) {
          if (computerProps.className.indexOf('rme--plain') > -1) {
            computerProps.style = Object.assign(computerProps.style, rmeConfig.colors['rme--btn-tag-plain'])
          } else {
            computerProps.style = Object.assign(computerProps.style, rmeConfig.colors['rme--btn-tag'])
          }
        } else {
          computerProps.style = Object.assign(computerProps.style, rmeConfig.colors[key])
        }
      }
    })

    return computerProps
  }
}

export default utils