const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'nav', 'label', 'header', 'footer', 'button', 'btn', 'a', 'ul', 'ol', 'li', 'span', 'section', 'address']
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
const gridKeys: Array<string> = ['col', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
const boxSize = 'mini,small,medium,big,large,huge'.split(',')

let cssProperties: any = {
    defaultProperties: {
        keyValues: [{
            keys: [''],
            values: Object.keys(colorsValues)
        }, {
            // background, border
            keys: 'bg,bc'.split(','),
            values: colors
        }, {
            // border style
            keys: ['bs'],
            values: '-dotted,-dashed,-solid,-double'.split(',')
        }, {
            // radius
            keys: ['r'],
            values: '-100'.split(',')
        }, {
            // box sizing
            keys: [''],
            values: boxSize
        }, {
            keys: [''],
            values: `fixed,absolute,relative,fill,circle,tag,alert,plain,link,left,center,right,top,middle,bottom,txt-left,txt-center,txt-right,underline,hover-underline,line-through,pointer,row,col,flex,rest,d-row,d-col,disabled,group,bgi`.split(',')
        }, {
            keys: ['lc'],
            values: '1,2,3,4'.split(',')
        }, {
            // border width
            keys: 'bw'.split(','),
            values: '1,2,3,4'.split(',')
        }, {
            keys: ['w', 'h'],
            values: '-10,-20,-30,-40,-50,-100'.split(',')
        }]
    },
    padding: {
        shortcut: 'p',
        directions: ['top', 'right', 'bottom', 'left', 'horizontal', 'vertical'],
        values: [0, 5, 10, 15, 20, 25, 30]
    },
    margin: {
        shortcut: 'm',
        directions: ['top', 'right', 'bottom', 'left', 'horizontal', 'vertical'],
        values: [0, 5, 10, 15, 20, 25, 30]
    },
    border: {
        shortcut: 'b',
        directions: ['top', 'right', 'bottom', 'left', 'horizontal', 'vertical'],
        attributes: ['width', 'style', 'color'],
        values: [1, 2, 3, 4]
    },
    borderRadius: {
        shortcut: 'r',
        directions: ['topRight', 'bottomRight', 'topLeft', 'bottomLeft'],
        values: [1, 2, 3, 4]
    },
    color: {
        shortcut: 'fc',
        values: colors
    },
    fontSize: {
        shortcut: 'fs',
        values: '9,10,11,12,13,14,15,16,17,18,24,32,48,64,72'.split(',')
    },
    fontWeight: {
        shortcut: 'fw',
        values: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textLines: {
        shortcut: 'lc',
        values: [1, 2, 3, 4]
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
    return str.replace(/[A-Z]/g, match => {
        return '-' + match.toLowerCase()
    }).split('-').map(k => k.charAt(0)).join('')
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
                    let formattedkey = utils.formatKey(d).split('-')
                    if (formattedkey[0] === d) {
                        mappings[cssShort + d.charAt(0)] = formatHVValue(key + capitalize(d))
                    } else {
                        let fkey = [cssShort]
                        formattedkey.map((k: string) => {
                            fkey.push(k.split('').shift())
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
        let tempKey = key.split(/(\d+)/)
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
        let arr = k.split(/-/g)
        if (arr.length > 0 && arr[0] !== k) {
            return arr
        }

        return null
    },
    getPixelHandler(k: string) {
        let arr = k.split(/(\d+)/g)
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
            if (val.indexOf('%') > -1) {
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
    }
}

export default utils