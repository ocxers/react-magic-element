import { colors, colorsValues, gridKeys, rmeConfig } from './consts'

export const toArr = (str: string, spliter: any = /,/g): string[] => {
  if (isUndefined(str)) {
    return []
  }

  return str.toString().split(spliter)
}
export const checkGridKey = (key: string) => {
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
}
export const isUndefined = (u: any): boolean => {
  return typeof u === 'undefined'
}
export const isBoolean = (b: any): boolean => {
  return typeof b === 'boolean'
}
export const isAuto = (a: any): boolean => {
  return a === 'auto'
}
export const isStrProp = (t: any): boolean => {
  return t === 'string'
}
export const isNumber = (num: any, ignoreEmpty = true): boolean => {
  if (num === '') {
    return false
  }

  if (!isNaN(Number(num))) {
    return true
  }

  return false
}

export const mixArrays = (prevArr: any, nextArr: any, appendPre = false, joiner = '-'): string[] => {
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

export const capitalize = (w: string) => {
  return w.charAt(0).toUpperCase() + w.slice(1)
}

export const getShortcut = (str: string) => {
  return toArr(str.replace(/[A-Z]/g, match => {
    return '-' + match.toLowerCase()
  }), '-').map(k => k.charAt(0)).join('')
}

export const formatHVValue = (val: string) => {
  let tempVal = val
  if (val.toLowerCase().indexOf('horizontal') > -1) {
    return [tempVal.replace('Horizontal', 'Left'), tempVal.replace('Horizontal', 'Right')].join(',')
  } else if (val.toLowerCase().indexOf('vertical') > -1) {
    return [tempVal.replace('Vertical', 'Top'), tempVal.replace('Vertical', 'Bottom')].join(',')
  } else {
    return val
  }
}

export const getColors = (key = ''): string[] => {
  if (key) {
    return colors.map((c: string) => key + c)
  } else {
    return Object.keys(colorsValues)
  }
}

export const mixObjects: any = (short: string, attr: string, values: string[], attrs: string[] = [], append: string = '') => { // padding, top, right, bottom, left
  let tempObj: any = {}
  tempObj[short] = attr
  values.map((val: string) => {
    tempObj[`${short}${getShortcut(val)}`] = formatHVValue(`${attr}${capitalize(val)}${append}`)
    if (attrs) {
      /**
       * Border Top Width/Style/Color
       */
      attrs.map((att: string) => {
        tempObj[`${short}${getShortcut(att)}`] = formatHVValue(`${attr}${capitalize(att)}${append}`)
        tempObj[`${short}${getShortcut(val)}${getShortcut(att)}`] = formatHVValue(`${attr}${capitalize(val)}${capitalize(att)}${append}`)
      })
    }
  })

  return tempObj
}

export const includes = (item: any, keys: any, start?: number, ignoreCase: boolean = false) => {
  // keys: 'cn-,cn'
  let keyList = toArr(keys)
  let included = false
  keyList.map((k: string) => {
    if (ignoreCase) {
      k = k.toLowerCase()
    }
    if (isNumber(start)) {
      if (item.indexOf(k) === start) {
        included = true
      }
    } else {
      if (item.indexOf(k) !== -1) {
        included = true
      }
    }
  })

  return included
}

export const fillProps = (val: string, propsObj: any, idx: number = 0, type?: string) => {
  if (val) {
    const keys = Object.keys(propsObj)
    let key = keys[idx]
    let key2 = keys[idx + 2]
    if (isStrProp(type)) {
      propsObj[key] = colorsValues[val] || val
    } else if (isNumber(val) || isAuto(val)) {
      propsObj[key] = val
    } else {
      const kv = toArr(val, /(\d+)/)
      const realVal = kv[1] || val.substr(1)
      switch (kv[0]) {
        case 'w':
          idx = 0
          key = keys[idx]
          propsObj[key] = realVal
          break
        case 'h': // h: height, horizontal
          idx = 1
          key = keys[idx]
          propsObj[key] = realVal
          key2 = keys[idx + 2]
          if (!isUndefined(propsObj[key2])) {
            propsObj[key2] = realVal
          }
          break
        case 'v':
          idx = 0
          key = keys[idx]
          propsObj[key] = realVal
          key2 = keys[idx + 2]
          if (!isUndefined(propsObj[key2])) {
            propsObj[key2] = realVal
          }
          break
        case 't':
          idx = 0
          key = keys[idx]
          propsObj[key] = realVal
          break
        case 'r':
          idx = 1
          key = keys[idx]
          propsObj[key] = realVal
          break
        case 'b':
          idx = 2
          key = keys[idx]
          propsObj[key] = realVal
          break
        case 'l':
          idx = 3
          key = keys[idx]
          propsObj[key] = realVal
          break
        case 'tl':
          idx = 0
          key = keys[idx]
          propsObj[key] = realVal
          break
        case 'tr':
          idx = 1
          key = keys[idx]
          propsObj[key] = realVal
          break
        case 'br':
          idx = 2
          key = keys[idx]
          propsObj[key] = realVal
          break
        case 'bl':
          idx = 3
          key = keys[idx]
          propsObj[key] = realVal
          break
      }
    }
  }
}

const formatStrValues = (kvs: any, type: string) => {
  if (isStrProp(type)) {
    let length = kvs.length
    switch (length) {
      case 1:
        kvs = [kvs[0], kvs[0], kvs[0], kvs[0]]
        break
      case 2:
        kvs = [kvs[0], kvs[1], kvs[0], kvs[1]]
        break
      case 3:
        kvs = [kvs[0], kvs[1], kvs[2], kvs[1]]
        break
    }
  }

  return kvs
}

export const computeTRBLStyles = (keyValueObj: any, keyValue: any) => {
  const { key, value, cptKeys, kvObj, not, type } = keyValueObj
  const keyArr = toArr(cptKeys)
  if (not && includes(key, not, 0)) {
    return
  }

  if (includes(key, cptKeys, 0)) {
    let kvs: any
    /**
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
     */
    if (includes(key, keyArr[0])) {
      kvs = key.split('-').slice(1)
      kvs = formatStrValues(kvs, type)
    } else {
      if (isBoolean(value)) {
        // key[val]
        let tempVales = toArr(key, /(\d+)/).slice(1)
        kvs = toArr(tempVales[0], /,| /g)
      } else {
        // key=...
        /**
         * pos='num[ num][ num][ num]'                            -> pos='15'             => top: 15px,   right: 15px,
         * bottom: 15px,   left: 15px
         *                                                        -> pos='15 10'          => top: 15px,   right: 10px,
         * bottom: 15px,   left: 10px
         *                                                        -> pos='15 10 5'        => top: 15px,   right: 10px,
         * bottom: 5px,    left: 10px
         *                                                        -> pos='15 10 5 0'      => top: 15px,   right: 10px,
         * bottom: 5px,    left: 0px pos='[t+num][ r+num][ b+num][ l+num][ h+num][ v+num]'  -> pos='t15 r10 b5 l0'  =>
         * top: 15px,   right: 10px,  bottom: 5px,    left: 0px
         *                                                        -> pos='h10 v15'        => top: 15px,   right: 10px,
         * bottom: 15px,   left: 10px
         *                                                        -> pos='t15 h10'        => top: 15px,   right: 10px,
         *                 left: 10px pos='num[,num][,num][,num]'                            -> pos='15,10,,5'       =>
         * top: 15px,   right: 10px,                  left: 5px pos='[t+num][,r+num][,b+num][,l+num][,h+num][,v+num]'
         * -> pos='t15,r10,b5,l0'  => top: 15px,   right: 10px,  bottom: 5px,    left: 0px
         *                                                        -> pos='h10,v15'        => top: 15px,   right: 10px,
         * bottom: 15px,   left: 10px
         *                                                        -> pos='t15,h10'        => top: 15px,   right: 10px,
         *                 left: 10px
         */
        kvs = toArr(value, /,| /g)
        kvs = formatStrValues(kvs, type)
      }
    }
    switch (kvs.length) {
      case 1:
        if (isNumber(kvs[0])) {
          fillProps(kvs[0], kvObj, 0)
          fillProps(kvs[0], kvObj, 1)
          fillProps(kvs[0], kvObj, 2)
          fillProps(kvs[0], kvObj, 3)
        } else {
          fillProps(kvs[0], kvObj, NaN, type)
        }
        break
      case 2:
        if (isNumber(kvs[0])) {
          fillProps(kvs[0], kvObj, 0)
          fillProps(kvs[0], kvObj, 2)
        } else {
          fillProps(kvs[0], kvObj, NaN, type)
        }
        if (isNumber(kvs[1])) {
          fillProps(kvs[1], kvObj, 1)
          fillProps(kvs[1], kvObj, 3)
        } else {
          fillProps(kvs[1], kvObj, NaN, type)
        }
        break
      case 3:
        if (isNumber(kvs[0])) {
          fillProps(kvs[0], kvObj, 0)
        } else {
          fillProps(kvs[0], kvObj, NaN, type)
        }
        if (isNumber(kvs[1])) {
          fillProps(kvs[1], kvObj, 1)
          fillProps(kvs[1], kvObj, 3)
        } else {
          fillProps(kvs[1], kvObj, NaN, type)
        }
        if (isNumber(kvs[2])) {
          fillProps(kvs[2], kvObj, 2)
        } else {
          fillProps(kvs[2], kvObj, NaN, type)
        }
        break
      case 4:
        fillProps(kvs[0], kvObj, 0, type)
        fillProps(kvs[1], kvObj, 1, type)
        fillProps(kvs[2], kvObj, 2, type)
        fillProps(kvs[3], kvObj, 3, type)
        break
    }

    Object.keys(kvObj).map((attr: string) => {
      // @ts-ignore
      if (kvObj[attr]) {
        let attrValue = `${kvObj[attr]}`
        if (!isStrProp(type) && !isAuto(kvObj[attr])) {
          attrValue += 'px'
        }
        // @ts-ignore
        keyValue.styles[attr] = attrValue
      }
    })

    return keyValue
  }
}

export const setConfig = (config: any) => {
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
      // borderColor: color[0]
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

  rmeConfig.colors = colorCssProperties
}