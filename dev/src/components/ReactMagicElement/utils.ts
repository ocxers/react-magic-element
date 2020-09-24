const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'nav', 'label', 'header', 'footer', 'button', 'btn', 'a', 'ul', 'ol', 'li', 'span', 'section', 'address']
const colors = ['-primary', '-secondary', '-success', '-danger', '-warning', '-info', '-light', '-dark', '-white', '-transparent']
const gridKeys: Array<string> = ['col', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']

let cssProperties: any = {
    defaultProperties: {
        keyValues: [{
            keys: [''],
            values: colors.map((color: string) => color.replace('-', ''))
        }, {
            // background, border
            keys: 'bg,bc,btc,brc,bbc,bhc,bvc'.split(','),
            values: colors
        }, {
            // border style
            keys: 'bs,bts,brs,bbs,bls,bhs,bvs'.split(','),
            values: '-none,-hidden,-dotted,-dashed,-solid,-double,-groove,-ridge,-inset,-outset,-initial,-inherit'.split(',')
        }, {
            // box sizing
            keys: [''],
            values: 'tiny,mini,small,medium,big,large,huge,gigantic'.split(',')
        }, {
            keys: [''],
            values: `circle,tag,alert,plain,link,left,center,right,top,middle,bottom,txt-left,txt-center,txt-right,underline,hover-underline,line-through,pointer,row,col,flex,rest,d-row,d-col,disabled,group,bgi`.split(',')
        }]
    },
    width: {
        shortcut: 'w',
        percentValues: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        values: [8, 16, 32, 48, 64, 96, 128, 256]
    },
    height: {
        shortcut: 'h',
        percentValues: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        values: [8, 16, 32, 48, 64, 96, 128, 256]
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
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        styleValues: ['-none', '-hidden', '-dotted', '-dashed', '-solid', '-double', '-groove', '-ridge', '-inset', '-outset', '-initial', '-inherit'],
        colorValues: colors
    },
    borderRadius: {
        shortcut: 'r',
        directions: ['topRight', 'bottomRight', 'topLeft', 'bottomLeft'],
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    color: {
        shortcut: 'fc',
        values: colors
    },
    fontSize: {
        shortcut: 'fs',
        values: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '24', '32', '48', '64', '72']
    },
    fontWeight: {
        shortcut: 'fw',
        values: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textLines: {
        shortcut: 'l',
        values: [1, 2, 3, 4, 5]
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
    let mappings: any = {}

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
                            if (!cssProps[a + 'Values']) {
                                cssProps.values.map((v: any) => {
                                    // for width: border top width => btw, btw0
                                    groups[cssShort + getShortcut(d) + a.charAt(0)] = 1
                                    groups[cssShort + getShortcut(d) + a.charAt(0) + v] = 1
                                })
                            } else {
                                cssProps[a + 'Values'].map((v: string) => {
                                    groups[cssShort + getShortcut(d) + a.charAt(0)] = 1
                                    groups[cssShort + getShortcut(d) + a.charAt(0) + v] = 1
                                })
                            }
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

            cssProps.percentValues?.map((v: any) => {
                groups[cssShort + '-' + v] = 1
            })
        }
    })

    console.log(mappings.bsz)
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
        Object.keys(config.colors).map((key: any) => {
            const color = config.colors[key]
            colorCssProperties['rme--' + key] = {
                color: color[0]
            }
            colorCssProperties['rme--bg-' + key] = {
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

        // rmeConfig = config
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
    reservedWord: elements
}

export default utils