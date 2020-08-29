const elements = ['nav', 'header', 'footer', 'button', 'btn', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'section', 'address']
const colors = ['-primary', '-secondary', '-success', '-danger', '-warning', '-info', '-light', '-dark', '-white', '-transparent']
let cssProperties: any = {
    defaultProperties: {
        shortcut: '',
        values: [
            // color
            'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'transparent',
            // circle
            'circle',
            // tag
            'tag',
            // alert
            'alert',
            // plain
            'plain',
            // link
            'link',
            // text align
            'left', 'center', 'right',
            // text decoration
            'underline', 'hoverUnderline', 'lineThrough', 'pointer',
            // row, col, fill
            'row', 'col', 'fill',
            // disabled
            'disabled',
            // group
            'group',
            // size
            'tiny', 'mini', 'small', 'medium', 'big', 'large', 'huge', 'gigantic',
        ]
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
    fontColor: {
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
    boxSizing: {
        shortcut: 'bsz',
        values: ['-tiny', '-mini', '-small', '-medium', '-big', '-large', '-huge', '-gigantic']
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
    let ls = JSON.parse(localStorage.getItem('rme_builtin_class_style_mappings') || '{}')
    if (ls && ls.styleMappings && false) {
        return {
            elements: elements,
            styleMappings: ls.styleMappings,
            builtinClasses: ls.builtinClasses
        }
    }

    let keys = Object.keys(cssProperties)
    let groups: any = {}
    let mappings: any = {}

    keys.map(key => {
        if (key === 'defaultProperties') {
            cssProperties.defaultProperties.values.map((v: string) => {
                groups[v] = 1
            })
        } else {
            groups[cssProperties[key].shortcut] = 1
            mappings[cssProperties[key].shortcut] = formatHVValue(key)
            if (cssProperties[key].directions) {
                cssProperties[key].directions.map((d: string) => {
                    if (cssProperties[key].attributes) {
                        cssProperties[key].attributes.map((a: string) => {
                            groups[cssProperties[key].shortcut + a.charAt(0)] = 1
                            mappings[cssProperties[key].shortcut + a.charAt(0)] = formatHVValue(key + capitalize(a))
                            mappings[cssProperties[key].shortcut + getShortcut(d) + a.charAt(0)] = formatHVValue(key + capitalize(d) + capitalize(a))
                            if (!cssProperties[key][a + 'Values']) {
                                cssProperties[key].values.map((v: any) => {
                                    // for width: border top width => btw, btw0
                                    groups[cssProperties[key].shortcut + getShortcut(d) + a.charAt(0)] = 1
                                    groups[cssProperties[key].shortcut + getShortcut(d) + a.charAt(0) + v] = 1
                                })
                            } else {
                                cssProperties[key][a + 'Values'].map((v: string) => {
                                    groups[cssProperties[key].shortcut + getShortcut(d) + a.charAt(0)] = 1
                                    groups[cssProperties[key].shortcut + getShortcut(d) + a.charAt(0) + v] = 1
                                })
                            }
                        })
                    } else {
                        cssProperties[key].values?.map((v: any) => {
                            groups[cssProperties[key].shortcut + v] = 1
                            groups[cssProperties[key].shortcut + getShortcut(d)] = 1
                            groups[cssProperties[key].shortcut + getShortcut(d) + v] = 1
                            mappings[cssProperties[key].shortcut + getShortcut(d)] = formatHVValue(key + capitalize(d))
                        })
                    }
                })
            } else {
                cssProperties[key].values?.map((v: any) => {
                    groups[cssProperties[key].shortcut + v] = 1
                })
            }

            cssProperties[key].percentValues?.map((v: any) => {
                groups[cssProperties[key].shortcut + '-' + v] = 1
            })
        }
    })

    console.log('calculate')
    let rme_builtin_class_style_mappings = {elements, styleMappings: mappings, builtinClasses: Object.keys(groups)}
    localStorage.setItem('rme_builtin_class_style_mappings', JSON.stringify(rme_builtin_class_style_mappings))
    return rme_builtin_class_style_mappings
}

export default {
    mappingsAndClasses: initialBuiltinClassAndStyleMappings,
    formatKey(key: string) {
        return key.replace(/[A-Z]/g, match => {
            return '-' + match.toLowerCase()
        })
    }
}