const toArr = (str: string, spliter:any = ',') => {
    return str.split(spliter)
}
const elements = toArr('input,h1,h2,h3,h4,h5,h6,p,nav,label,header,footer,button,btn,a,ul,ol,li,span,section,address')
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
const colors = Object.keys(colorsValues).map((color: string) => `-${color}`)
const gridKeys = toArr('col,xs,sm,md,lg,xl,xxl')
const boxSize = toArr('mini,small,medium,big,large,huge')
const direstions = toArr('top,right,bottom,left,horizontal,vertical')
const pms = toArr('0,5,10,15,20,25,30') // padding, margin default values
const val14 = toArr('1,2,3,4')

let cssProperties: any = {
    defaultProperties: {
        keyValues: [{
            keys: [''],
            values: Object.keys(colorsValues)
        }, {
            // background, border
            keys: toArr('bg,bc'),
            values: colors
        }, {
            // border style
            keys: ['bs'],
            values: toArr('-dotted,-dashed,-solid,-double')
        }, {
            // radius
            keys: ['r'],
            values: ['-100']
        }, {
            // box sizing
            keys: [''],
            values: boxSize
        }, {
            keys: [''],
            values: toArr(`fixed,absolute,relative,fill,circle,tag,alert,plain,link,left,center,right,top,middle,bottom,txt-left,txt-center,txt-right,underline,hover-underline,line-through,pointer,row,col,flex,rest,d-row,d-col,disabled,group,bgi`)
        }, {
            keys: ['lc'],
            values: val14
        }, {
            // border width
            keys: ['bw'],
            values: val14
        }, {
            keys: ['w', 'h'],
            values: toArr('-10,-20,-30,-40,-50,-100')
        }]
    },
    padding: {
        shortcut: 'p',
        directions: direstions,
        values: pms
    },
    margin: {
        shortcut: 'm',
        directions: direstions,
        values: pms
    },
    border: {
        shortcut: 'b',
        directions: direstions,
        attributes: toArr('width,style,color')
    },
    borderRadius: {
        shortcut: 'r',
        directions: toArr('topRight,bottomRight,topLeft,bottomLeft'),
        values: val14
    },
    color: {
        shortcut: 'fc',
        values: colors
    },
    fontSize: {
        shortcut: 'fs',
        values: toArr('9,10,11,12,13,14,15,16,17,18,24,32,48,64,72')
    },
    fontWeight: {
        shortcut: 'fw',
        values: toArr('100,200,300,400,500,600,700,800,900')
    },
    textLines: {
        shortcut: 'lc',
        values: val14
    },
    boxShadow: {
        shortcut: 's',
        values: ['']
    },
    backgroundColor: {
        shortcut: 'bgc',
        values: colors
    },
    backgroundImage: {
        shortcut: 'bgi',
        values: ['']
    }
}

const capitalize = (w: string) => {
    return w.charAt(0).toUpperCase() + w.slice(1)
}

const getShortcut = (str: string) => {
    return toArr(str.replace(/[A-Z]/g, match => {
        return '-' + match.toLowerCase()
    }),'-').map(k => k.charAt(0)).join('')
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

const initialBuiltinClassAndStyleMappings = () => {
    let keys = Object.keys(cssProperties)
    let groups: any = {}
    let mappings: any = {
        w: 'width',
        h: 'height',
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
        z: 'zIndex'
    }

    keys.map(key => {
        if (key === 'defaultProperties') {
            cssProperties.defaultProperties.keyValues.map((kv: any) => {
                kv.keys.map((k: string) => {
                    kv.values.map((v: string) => {
                        groups[k + v] = 1
                    })
                })
            })
        } else {
            let cssProps = cssProperties[key]
            let cssShort = cssProps.shortcut
            groups[cssShort] = 1
            if (key === 'textLines') {
                mappings[cssShort] = 'WebkitLineClamp'
            } else {
                mappings[cssShort] = formatHVValue(key)
            }
            if (cssProps.directions) {
                cssProps.directions.map((d: string) => {
                    let formattedkey = toArr(utils.formatKey(d),'-')
                    if (formattedkey[0] === d) {
                        mappings[cssShort + d.charAt(0)] = formatHVValue(key + capitalize(d))
                    } else {
                        let fkey = [cssShort]
                        formattedkey.map((k: string) => {
                            fkey.push(k.charAt(0))
                        })

                        // border radius
                        mappings[fkey.join('')] = formatHVValue('border' + capitalize(d) + 'Radius')
                    }
                    if (cssProps.attributes) {
                        cssProps.attributes.map((a: string) => {
                            groups[cssShort + a.charAt(0)] = 1
                            mappings[cssShort + a.charAt(0)] = formatHVValue(key + capitalize(a))
                            mappings[cssShort + getShortcut(d) + a.charAt(0)] = formatHVValue(key + capitalize(d) + capitalize(a))
                        })
                    } else {
                        cssProps.values?.map((v: any) => {
                            groups[cssShort + v] = 1
                            groups[cssShort + getShortcut(d)] = 1
                            groups[cssShort + getShortcut(d) + v] = 1
                            if (key === 'borderRadius') {
                                mappings[cssShort + getShortcut(d)] = formatHVValue('border' + capitalize(d) + 'Radius')
                            } else {
                                mappings[cssShort + getShortcut(d)] = formatHVValue(key + capitalize(d))
                            }
                        })
                    }
                })
            } else {
                cssProps.values?.map((v: any) => {
                    groups[cssShort + v] = 1
                })
            }
        }
    })

    return {elements, styleMappings: mappings, builtinClasses: Object.keys(groups)}
}

const utils = {
    mappingsAndClasses: initialBuiltinClassAndStyleMappings,
    formatKey(key: string) {
        return key.replace(/[A-Z]/g, match => {
            return '-' + match.toLowerCase()
        })
    },
    checkGridKey(key: string) {
        let tempKey = toArr(key,/(\d+)/)
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
    getPercentageHandler(k: string) {
        let arr = toArr(k,/-/g)
        if (arr.length > 0 && arr[0] !== k) {
            return arr
        }

        return null
    },
    getPixelHandler(k: string) {
        let arr = toArr(k,/(\d+)/g)
        if (arr.length > 0 && arr[0] !== k) {
            return arr
        }

        return null
    },
    isBoolean(b: any) {
        return typeof b === 'boolean'
    },
    setConfig(config: any) {
        let colorCssProperties: any = {}
        Object.keys(config.colors).map((key: string) => {
            const color = config.colors[key]
            colorsValues[key] = color[0]
            colorCssProperties['rme--' + key] = {
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
    getValue(val: any) {
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
    reservedWord: elements,
    colorsValues: colorsValues,
    boxSize: boxSize,
    isArray(arr: any) {
        return Array.isArray(arr)
    },
    toArr: toArr
}

export default utils