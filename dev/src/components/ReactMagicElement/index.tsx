import React from 'react'
import '../../scss/main.scss'
import cx from 'classnames'

const elements = ['a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'section', 'address']
const fontColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'transparent']
const fontSizes = {
    fs: ['fontSize', 'fontSize9', 'fontSize10', 'fontSize11', 'fontSize12', 'fontSize13', 'fontSize14', 'fontSize15', 'fontSize16', 'fontSize17', 'fontSize18', 'fontSize24', 'fontSize32', 'fontSize48', 'fontSize64', 'fontSize72', 'fs', 'fs9', 'fs10', 'fs11', 'fs12', 'fs13', 'fs14', 'fs15', 'fs16', 'fs17', 'fs18', 'fs24', 'fs32', 'fs48', 'fs64', 'fs72']
}
const boxSizings = {
    bs: ['tiny', 'mini', 'small', 'medium', 'big', 'large', 'huge', 'gigantic']
}
const boxShadow = {
    s: ['shadow', 's']
}
const bgColors = ['bgPrimary', 'bgSecondary', 'bgSuccess', 'bgDanger', 'bgWarning', 'bgInfo', 'bgLight', 'bgDark', 'bgWhite', 'bgTransparent']

// Border styles
const borderColors = ['bc', 'bcPrimary', 'bcSecondary', 'bcSuccess', 'bcDanger', 'bcWarning', 'bcInfo', 'bcLight', 'bcDark', 'bcWhite', 'bcTransparent']
const borderWidths = {
    bw: ['borderWidth', 'borderWidth1', 'borderWidth2', 'borderWidth3', 'borderWidth4', 'borderWidth5', 'borderWidth6', 'borderWidth7', 'borderWidth8', 'borderWidth9', 'borderWidth10', 'bw', 'bw1', 'bw2', 'bw3', 'bw4', 'bw5', 'bw6', 'bw7', 'bw8', 'bw9', 'bw10'],
    btw: ['borderTopWidth', 'borderTopWidth1', 'borderTopWidth2', 'borderTopWidth3', 'borderTopWidth4', 'borderTopWidth5', 'borderTopWidth6', 'borderTopWidth7', 'borderTopWidth8', 'borderTopWidth9', 'borderTopWidth10', 'btw', 'btw1', 'btw2', 'btw3', 'btw4', 'btw5', 'btw6', 'btw7', 'btw8', 'btw9', 'btw10'],
    brw: ['borderRightWidth', 'borderRightWidth1', 'borderRightWidth2', 'borderRightWidth3', 'borderRightWidth4', 'borderRightWidth5', 'borderRightWidth6', 'borderRightWidth7', 'borderRightWidth8', 'borderRightWidth9', 'borderRightWidth10', 'brw', 'brw1', 'brw2', 'brw3', 'brw4', 'brw5', 'brw6', 'brw7', 'brw8', 'brw9', 'brw10'],
    bbw: ['borderBottomWidth', 'borderBottomWidth1', 'borderBottomWidth2', 'borderBottomWidth3', 'borderBottomWidth4', 'borderBottomWidth5', 'borderBottomWidth6', 'borderBottomWidth7', 'borderBottomWidth8', 'borderBottomWidth9', 'borderBottomWidth10', 'bbw', 'bbw1', 'bbw2', 'bbw3', 'bbw4', 'bbw5', 'bbw6', 'bbw7', 'bbw8', 'bbw9', 'bbw10'],
    blw: ['borderLeftWidth', 'borderLeftWidth1', 'borderLeftWidth2', 'borderLeftWidth3', 'borderLeftWidth4', 'borderLeftWidth5', 'borderLeftWidth6', 'borderLeftWidth7', 'borderLeftWidth8', 'borderLeftWidth9', 'borderLeftWidth10', 'blw', 'blw1', 'blw2', 'blw3', 'blw4', 'blw5', 'blw6', 'blw7', 'blw8', 'blw9', 'blw10'],
    bhw: ['borderHorizontalWidth', 'borderHorizontalWidth1', 'borderHorizontalWidth2', 'borderHorizontalWidth3', 'borderHorizontalWidth4', 'borderHorizontalWidth5', 'borderHorizontalWidth6', 'borderHorizontalWidth7', 'borderHorizontalWidth8', 'borderHorizontalWidth9', 'borderHorizontalWidth10', 'bhw', 'bhw1', 'bhw2', 'bhw3', 'bhw4', 'bhw5', 'bhw6', 'bhw7', 'bhw8', 'bhw9', 'bhw10'],
    bvw: ['borderVerticalWidth', 'borderVerticalWidth1', 'borderVerticalWidth2', 'borderVerticalWidth3', 'borderVerticalWidth4', 'borderVerticalWidth5', 'borderVerticalWidth6', 'borderVerticalWidth7', 'borderVerticalWidth8', 'borderVerticalWidth9', 'borderVerticalWidth10', 'bvw', 'bvw1', 'bvw2', 'bvw3', 'bvw4', 'bvw5', 'bvw6', 'bvw7', 'bvw8', 'bvw9', 'bvw10']
}
const borderStyle = ['bsNone', 'bsHidden', 'bsDotted', 'bsDashed', 'bsSolid', 'bsDouble', 'bsGroove', 'bsRidge', 'bsInset', 'bsOutset', 'bsInitial', 'bsInherit']
const borderRadius = {
    r: ['radius', 'radius1', 'radius2', 'radius3', 'radius4', 'radius5', 'radius6', 'radius7', 'radius8', 'radius9', 'radius10', 'r', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10']
}

const margins = {
    m: ['margin', 'margin0', 'margin5', 'margin10', 'margin15', 'margin20', 'margin25', 'margin30', 'm', 'm0', 'm5', 'm10', 'm15', 'm20', 'm25', 'm30'],
    mt: ['marginTop', 'marginTop0', 'marginTop5', 'marginTop10', 'marginTop15', 'marginTop20', 'marginTop25', 'marginTop30', 'mt', 'mt0', 'mt5', 'mt10', 'mt15', 'mt20', 'mt25', 'mt30'],
    mr: ['marginRight', 'marginRight0', 'marginRight5', 'marginRight10', 'marginRight15', 'marginRight20', 'marginRight25', 'marginRight30', 'mr', 'mr0', 'mr5', 'mr10', 'mr15', 'mr20', 'mr25', 'mr30'],
    mb: ['marginBottom', 'marginBottom0', 'marginBottom5', 'marginBottom10', 'marginBottom15', 'marginBottom20', 'marginBottom25', 'marginBottom30', 'mb', 'mb0', 'mb5', 'mb10', 'mb15', 'mb20', 'mb25', 'mb30'],
    ml: ['marginLeft', 'marginLeft0', 'marginLeft5', 'marginLeft10', 'marginLeft15', 'marginLeft20', 'marginLeft25', 'marginLeft30', 'ml', 'ml0', 'ml5', 'ml10', 'ml15', 'ml20', 'ml25', 'ml30'],
    mh: ['marginHorizontal', 'marginHorizontal0', 'marginHorizontal5', 'marginHorizontal10', 'marginHorizontal15', 'marginHorizontal20', 'marginHorizontal25', 'marginHorizontal30', 'mh', 'mh0', 'mh5', 'mh10', 'mh15', 'mh20', 'mh25', 'mh30'],
    mv: ['marginVertical', 'marginVertical0', 'marginVertical5', 'marginVertical10', 'marginVertical15', 'marginVertical20', 'marginVertical25', 'marginVertical30', 'mv', 'mv0', 'mv5', 'mv10', 'mv15', 'mv20', 'mv25', 'mv30']
}
const paddings = {
    p: ['padding', 'padding0', 'padding5', 'padding10', 'padding15', 'padding20', 'padding25', 'padding30', 'p', 'p0', 'p5', 'p10', 'p15', 'p20', 'p25', 'p30'],
    pt: ['paddingTop', 'paddingTop0', 'paddingTop5', 'paddingTop10', 'paddingTop15', 'paddingTop20', 'paddingTop25', 'paddingTop30', 'pt', 'pt0', 'pt5', 'pt10', 'pt15', 'pt20', 'pt25', 'pt30'],
    pr: ['paddingRight', 'paddingRight0', 'paddingRight5', 'paddingRight10', 'paddingRight15', 'paddingRight20', 'paddingRight25', 'paddingRight30', 'pr', 'pr0', 'pr5', 'pr10', 'pr15', 'pr20', 'pr25', 'pr30'],
    pb: ['paddingBottom', 'paddingBottom0', 'paddingBottom5', 'paddingBottom10', 'paddingBottom15', 'paddingBottom20', 'paddingBottom25', 'paddingBottom30', 'pb', 'pb0', 'pb5', 'pb10', 'pb15', 'pb20', 'pb25', 'pb30'],
    pl: ['paddingLeft', 'paddingLeft0', 'paddingLeft5', 'paddingLeft10', 'paddingLeft15', 'paddingLeft20', 'paddingLeft25', 'paddingLeft30', 'pl', 'pl0', 'pl5', 'pl10', 'pl15', 'pl20', 'pl25', 'pl30'],
    ph: ['paddingHorizontal', 'paddingHorizontal0', 'paddingHorizontal5', 'paddingHorizontal10', 'paddingHorizontal15', 'paddingHorizontal20', 'paddingHorizontal25', 'paddingHorizontal30', 'ph', 'ph0', 'ph5', 'ph10', 'ph15', 'ph20', 'ph25', 'ph30'],
    pv: ['paddingVertical', 'paddingVertical0', 'paddingVertical5', 'paddingVertical10', 'paddingVertical15', 'paddingVertical20', 'paddingVertical25', 'paddingVertical30', 'pv', 'pv0', 'pv5', 'pv10', 'pv15', 'pv20', 'pv25', 'pv30']
}
const ellipsis = {
    l: ['lines', 'lines1', 'lines2', 'lines3', 'lines4', 'lines5', 'l', 'l1', 'l2', 'l3', 'l4', 'l5']
}
const fontWeights = {
    fw: ['fontWeight', 'fontWeight100', 'fontWeight200', 'fontWeight300', 'fontWeight400', 'fontWeight500', 'fontWeight600', 'fontWeight700', 'fontWeight800', 'fontWeight900', 'fw', 'fw100', 'fw200', 'fw300', 'fw400', 'fw500', 'fw600', 'fw700', 'fw800', 'fw900']
}

const shapes = ['circle']

const superLabel = (props: any) => {
    // const [classes, setClasses] = useState([] as any)
    const {
        // Font weight
        fontWeight,
        fw,
        // Font lineheight
        lineHeight, lh,
        // Margin
        margin, m,
        marginTop, mt,
        marginRight, mr,
        marginBottom, mb,
        marginLeft, ml,
        marginHorizontal, mh,
        marginVertical, mv,
        // Padding
        padding, p,
        paddingTop, pt,
        paddingRight, pr,
        paddingBottom, pb,
        paddingLeft, pl,
        paddingHorizontal, ph,
        paddingVertical, pv,
        // Font size
        fontSize, fs,
        // Text color
        color,
        // Background color
        bgColor,
        avatar, bgImg,
        // Ellipsis
        lines, l,
        // Text align
        center, right, left,
        // Border
        border, borderTop, borderRight, borderBottom, borderLeft, bt, br, bb, bl,
        // Border radius
        radius, r,
        // Decoration
        underline, hoverUnderline,
        lineThrough,
        pointer,
        // elements
        tag, alert,
        // Heading
        h1, h2, h3, h4, h5, h6,
        width, width100, height, height100, // height100 => height = 100%
        // Flex direction
        row, col, fill
    } = props

    const isBoolean = (b: any) => {
        return typeof b === 'boolean'
    }

    const getValue = (val: any) => {
        if (!isBoolean(val) && val) {
            val = val.toString()
            if (val.indexOf('%') > -1) {
                return val
            } else {
                return val.replace(/px/, '') + 'px'
            }
        } else {
            return val
        }
    }

    const getFontColorClass = () => {
        let fcs: Array<string> = []
        fontColors.map(c => {
            if (props[c]) {
                fcs.push('rme--' + c)
            }
        })

        return fcs.join(' ')
    }

    const getMatching: any = (str: string) => {
        return {
            o: str,
            l: str.toLowerCase(),
            d: str.replace(/[A-Z]/g, (match) => {
                return '-' + match.toLowerCase()
            }),
            n: str.replace(/[a-zA-Z]/g, '') || ''
        }
    }

    const getColorClass = (colors: any, rootClass?: string) => {
        let cls: Array<string> = []
        colors.map((cl: any) => {
            // bgDanger, bgdanger, bg-danger
            let cs = getMatching(cl)
            if (props[cs.o] || props[cs.l] || props[cs.d]) {
                cls.push('rme--' + cs.d)
            }

            if (cls.indexOf('rme--' + rootClass) <= -1 && cls.length && rootClass) {
                cls.unshift('rme--' + rootClass)
            }
        })

        return cls.join(' ')
    }

    /**
     * Get general class
     */
    const getGeneralClass = (pm: any, directly?: boolean, appendRoot?: boolean) => {
        let pms: Array<string> = []
        let keys: Array<string> = Object.keys(pm)
        let count = 0
        if (directly) {
            keys.map(key => {
                count = 0
                pm[key].map((m: string) => {
                    if (isBoolean(props[m])) {
                        pms.push('rme--' + m)
                        count++
                    }
                })

                if (pms.indexOf('rme--' + key) <= -1 && count && appendRoot) {
                    pms.unshift('rme--' + key)
                }
            })
        } else {
            keys.map(key => {
                count = 0
                pm[key].map((m: string) => {
                    let matching = getMatching(m)

                    if (isBoolean(props[matching.o]) || isBoolean(props[matching.l]) || isBoolean(props[matching.d])) {
                        count++
                        pms.push('rme--' + key + matching.n)
                    }
                })

                if (pms.indexOf('rme--' + key) <= -1 && count && appendRoot) {
                    pms.unshift('rme--' + key)
                }
            })
        }

        return pms.join(' ')
    }

    /**
     * Get shape class
     */
    const getShapeClass = () => {
        if (props.circle) {
            return 'rme--circle'
        }
    }

    /**
     * Get shadow class
     */

    const getClasses = () => {
        return [
            // tag
            (isBoolean(tag)) && 'rme--tag',
            // alert
            isBoolean(alert) && 'rme--alert',
            // Font
            // Color
            getFontColorClass(),
            // Font size
            getGeneralClass(fontSizes),
            // (size9 || s9) && 's9', (size10 || s10) && 's10', (size11 || s11) && 's11', (isBoolean(size) || isBoolean(s) || size12 || s12) && 's12', (size13 || s13) && 's13', (size14 || s14) && 's14', (size15 || s15) && 's15', (size16 || s16) && 's16', (size17 || s17) && 's17', (size18 || s18) && 's18',
            // Ellipsis
            getGeneralClass(ellipsis),
            // Text align
            center && 'rme--center', right && 'rme--right', left && 'rme--left',
            // Decoration
            underline && 'rme--underline', hoverUnderline && 'rme--hoverUnderline', lineThrough && 'rme--lineThrough',
            pointer && 'rme--pointer',

            // Font weight
            getGeneralClass(fontWeights),

            // Border radius
            getGeneralClass(borderRadius),

            // Margin
            getGeneralClass(margins),

            // Padding
            getGeneralClass(paddings),

            // Background
            getColorClass(bgColors),
            (avatar || bgImg) && 'rme--bg-img',

            // Shape
            getShapeClass(),

            // Box size
            getGeneralClass(boxSizings, true),
            // Box shadow
            getGeneralClass(boxShadow, true),

            // Border
            isBoolean(border) && 'rme--border',
            getColorClass(borderColors, 'border'),
            getGeneralClass(borderWidths),
            getColorClass(borderStyle),

            // flex direction
            row && 'rme--row',
            col && 'rme--col',
            fill && 'rme--fill',
        ]
    }

    const getStyles = () => {
        let currStyles: any = {
            color: color,
            fontWeight: fontWeight || fw,
            width: isBoolean(width100) ? '100%' : getValue(width),
            height: isBoolean(height100) ? '100%' : getValue(height),
            lineHeight: getValue(lineHeight || lh),
            marginTop: getValue(marginTop || mt || marginVertical || mv || margin || m),
            marginRight: getValue(marginRight || mr || marginHorizontal || mh || margin || m),
            marginBottom: getValue(marginBottom || mb || marginVertical || mv || margin || m),
            marginLeft: getValue(marginLeft || ml || marginHorizontal || mh || margin || m),
            paddingTop: getValue(paddingTop || pt || paddingVertical || pv || padding || p),
            paddingRight: getValue(paddingRight || pr || paddingHorizontal || ph || padding || p),
            paddingBottom: getValue(paddingBottom || pb || paddingVertical || pv || padding || p),
            paddingLeft: getValue(paddingLeft || pl || paddingHorizontal || ph || padding || p),
            fontSize: getValue(fontSize || fs),
            borderTop: borderTop || bt || border,
            borderRight: borderRight || br || border,
            borderBottom: borderBottom || bb || border,
            borderLeft: borderLeft || bl || border,
        }
        if (props.circle) {
            currStyles.width = getValue(props.width ? props.width : props.height)
            if (currStyles.width?.indexOf('px') > -1) {
                currStyles.height = currStyles.width
            } else {
                currStyles.paddingBottom = currStyles.width
            }
        }
        return currStyles
    }

    const getCloseIcon = () => {
        if (props.closable || props.onClose) {
            return (
                <span onClick={props.onClose}
                      className={'rme-close'}>&times;</span>
            )
        }
    }

    const getChildren = () => {
        if (props.alert) {
            return (
                <div className={cx('rme-container', props.col ? 'rme--col' : '', props.row ? 'rme---row' : '')}>
                    {props.children}
                </div>
            )
        }
        if (props.circle) {
            return (
                <div className={cx('rme--circle-container', props.col ? 'rme--col' : '', props.row ? 'rme---row' : '')}>
                    {props.children}
                </div>
            )
        } else {
            return props.children
        }
    }

    const renderElement = () => {
        let currElement = isBoolean(tag) ? 'span' : 'div'
        elements.map((el: any) => {
            if (props[el]) {
                currElement = el
            }
        })

        let computerProps: any = {
            href: props.href,
            target: props.target,
            className: cx('rme', ...getClasses()),
            style: getStyles()
        }

        if (props.href) {
            computerProps.href = props.href
        }
        if (props.target) {
            computerProps.target = props.target
        }
        if (props.bgImg) {
            computerProps.style.backgroundImage = 'url(' + props.bgImg + ')'
        }

        return React.createElement(currElement, computerProps, [getChildren(), getCloseIcon()].map((child: any, key: number) => {
            return (
                <React.Fragment key={key}>{child}</React.Fragment>
            )
        }))
    }

    return (
        <>
            {renderElement()}
        </>
    )
}

superLabel.displayName = 'ReactMagicElement'

export default superLabel