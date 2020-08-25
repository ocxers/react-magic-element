import React from 'react'
import '../scss/main.scss'
import cx from 'classnames'

const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'section', 'address']
const fontColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'transparent']
const bgColors = ['bgPrimary', 'bgSecondary', 'bgSuccess', 'bgDanger', 'bgWarning', 'bgInfo', 'bgLight', 'bgDark', 'bgWhite', 'bgTransparent']
const borderRadius = ['radius', 'radius1', 'radius2', 'radius3', 'radius4', 'radius5', 'radius10', 'r', 'r1', 'r2', 'r3', 'r4', 'r5', 'r10']
const superLabel = (props: any) => {
    // const [classes, setClasses] = useState([] as any)
    const {
        // Font weight
        weight, weight100, weight200, weight300, weight400, weight500, weight600, weight700, weight800, weight900,
        w, w100, w200, w300, w400, w500, w600, w700, w800, w900,
        // Font lineheight
        lineHeight, lh,
        // Margin
        margin, margin0, margin5, margin10, margin15, margin20, margin25, margin30,
        m, m0, m5, m10, m15, m20, m25, m30,
        marginTop, marginTop0, marginTop5, marginTop10, marginTop15, marginTop20, marginTop25, marginTop30,
        mt, mt0, mt5, mt10, mt15, mt20, mt25, mt30,
        marginRight, marginRight0, marginRight5, marginRight10, marginRight15, marginRight20, marginRight25, marginRight30,
        mr, mr0, mr5, mr10, mr15, mr20, mr25, mr30,
        marginBottom, marginBottom0, marginBottom5, marginBottom10, marginBottom15, marginBottom20, marginBottom25, marginBottom30,
        mb, mb0, mb5, mb10, mb15, mb20, mb25, mb30,
        ml, ml0, ml5, ml10, ml15, ml20, ml25, ml30,
        marginLeft, marginLeft0, marginLeft5, marginLeft10, marginLeft15, marginLeft20, marginLeft25, marginLeft30,
        marginHorizontal, marginHorizontal0, marginHorizontal5, marginHorizontal10, marginHorizontal15, marginHorizontal20, marginHorizontal25, marginHorizontal30,
        mh, mh0, mh5, mh10, mh15, mh20, mh25, mh30,
        marginVertical, marginVertical0, marginVertical5, marginVertical10, marginVertical15, marginVertical20, marginVertical25, marginVertical30,
        mv, mv0, mv5, mv10, mv15, mv20, mv25, mv30,
        // Padding
        padding, padding0, padding5, padding10, padding15, padding20, padding25, padding30,
        p, p0, p5, p10, p15, p20, p25, p30,
        paddingTop, paddingTop0, paddingTop5, paddingTop10, paddingTop15, paddingTop20, paddingTop25, paddingTop30,
        pt, pt0, pt5, pt10, pt15, pt20, pt25, pt30,
        paddingRight, paddingRight0, paddingRight5, paddingRight10, paddingRight15, paddingRight20, paddingRight25, paddingRight30,
        pr, pr0, pr5, pr10, pr15, pr20, pr25, pr30,
        paddingBottom, paddingBottom0, paddingBottom5, paddingBottom10, paddingBottom15, paddingBottom20, paddingBottom25, paddingBottom30,
        pb, pb0, pb5, pb10, pb15, pb20, pb25, pb30,
        paddingLeft, paddingLeft0, paddingLeft5, paddingLeft10, paddingLeft15, paddingLeft20, paddingLeft25, paddingLeft30,
        pl, pl0, pl5, pl10, pl15, pl20, pl25, pl30,
        paddingHorizontal, paddingHorizontal0, paddingHorizontal5, paddingHorizontal10, paddingHorizontal15, paddingHorizontal20, paddingHorizontal25, paddingHorizontal30,
        ph, ph0, ph5, ph10, ph15, ph20, ph25, ph30,
        paddingVertical, paddingVertical0, paddingVertical5, paddingVertical10, paddingVertical15, paddingVertical20, paddingVertical25, paddingVertical30,
        pv, pv0, pv5, pv10, pv15, pv20, pv25, pv30,
        // Font size
        size, size9, size10, size11, size12, size13, size14, size15, size16, size17, size18,
        s, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18,
        // Text color
        color, primary, secondary, success, danger, warning, info, light, dark, white, transparent,
        // Background color
        bgColor, bgPrimary, bgSecondary, bgSuccess, bgDanger, bgWarning, bgInfo, bgLight, bgDark, bgWhite, bgTransparent,
        // Ellipsis
        lines, lines1, lines2, lines3, lines4, lines5,
        l, l1, l2, l3, l4, l5,
        // Text align
        top, right, bottom, left,
        // Border
        border,
        borderTop, borderRight, borderBottom, borderLeft,
        bt, br, bb, bl,
        // Border radius
        radius, radius1, radius2, radius3, radius4, radius5, radius10,
        r, r1, r2, r3, r4, r5, r10,
        // Decoration
        underline, hoverUnderline,
        lineThrough,
        pointer,
        // elements
        tag,
        // Heading
        h1, h2, h3, h4, h5, h6
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
                fcs.push('r-m-e--' + c)
            }
        })

        return fcs.join(',')
    }

    const getBackgroundColorClass = () => {
        let bgcs: Array<string> = []
        bgColors.map(bgc => {
            // bgDanger
            // bgdanger
            // bg-danger
            let cs: Array<string> = [bgc, bgc.toLowerCase(), bgc.toLowerCase().replace(/bg/, 'bg-')]
            if (props[cs[0]] || props[cs[1]] || props[cs[2]]) {
                bgcs.push('r-m-e--' + cs[2])
            }
        })

        return bgcs.join(',')
    }

    const getShortcut = (key: string) => {
        if (key.length <= 1) {
            return key
        } else {
            return key.split('')[0] + key.split('').pop()
        }
    }

    /**
     * Get border radius class
     */
    const getBorderRadiusClass = () => {
        let rds: Array<string> = []
        borderRadius.map(br => {
            if (isBoolean(props[br])) {
                rds.push('r-m-e--' + getShortcut(br))
            }
        })

        return rds.join(',')
    }

    const getClasses = () => {
        return [
            // tag
            (isBoolean(tag)) && 'r-m-e--tag',
            // Font
            // Color
            getFontColorClass(),
            // Font size
            (size9 || s9) && 's9', (size10 || s10) && 's10', (size11 || s11) && 's11', (isBoolean(size) || isBoolean(s) || size12 || s12) && 's12', (size13 || s13) && 's13', (size14 || s14) && 's14', (size15 || s15) && 's15', (size16 || s16) && 's16', (size17 || s17) && 's17', (size18 || s18) && 's18',
            // Ellipsis
            (isBoolean(lines) || lines1 || isBoolean(l) || l1) && 'l l1',
            (lines2 || l2) && 'l l2', (lines3 || l3) && 'l l3', (lines4 || l4) && 'l l4', (lines5 || l5) && 'l l5',
            // Text align
            top && 'top', right && 'right', bottom && 'bottom', left && 'left',
            // Decoration
            underline && 'underline', hoverUnderline && 'hoverUnderline', lineThrough && 'lineThrough',
            pointer && 'pointer',
            // Font weight
            (isBoolean(weight) || weight700 || isBoolean(w) || w700) && 'w700',
            (weight100 || w100) && 'w100',
            (weight200 || w200) && 'w200',
            (weight300 || w300) && 'w300',
            (weight400 || w400) && 'w400',
            (weight500 || w500) && 'w500',
            (weight600 || w600) && 'w600',
            (weight800 || w800) && 'w800',
            (weight900 || w900) && 'w900',

            // Border radius
            getBorderRadiusClass(),

            // Margin
            (isBoolean(margin) || margin0 || isBoolean(m) || m0) && 'm0',
            (margin5 || m5) && 'm5', (margin10 || m10) && 'm10', (margin15 || m15) && 'm15', (margin20 || m20) && 'm20', (margin25 || m25) && 'm25', (margin30 || m30) && 'm30',
            (isBoolean(marginTop) || marginTop0 || isBoolean(mt) || mt0) && 'mt0',
            (marginTop5 || mt5) && 'mt5', (marginTop10 || mt10) && 'mt10', (marginTop15 || mt15) && 'mt15', (marginTop20 || mt20) && 'mt20', (marginTop25 || mt25) && 'mt25', (marginTop30 || mt30) && 'mt30',
            (isBoolean(marginRight) || marginRight0 || isBoolean(mr) || mr0) && 'mr0',
            (marginRight5 || mr5) && 'mr5', (marginRight10 || mr10) && 'mr10', (marginRight15 || mr15) && 'mr15', (marginRight20 || mr20) && 'mr20', (marginRight25 || mr25) && 'mr25', (marginRight30 || mr30) && 'mr30',
            (isBoolean(marginBottom) || marginBottom0 || isBoolean(mb) || mb0) && 'mb0',
            (marginBottom5 || mb5) && 'mb5', (marginBottom10 || mb10) && 'mb10', (marginBottom15 || mb15) && 'mb15', (marginBottom20 || mb20) && 'mb20', (marginBottom25 || mb25) && 'mb25', (marginBottom30 || mb30) && 'mb30',
            (isBoolean(marginLeft) || marginLeft0 || isBoolean(ml) || ml0) && 'ml0',
            (marginLeft5 || ml5) && 'ml5', (marginLeft10 || ml10) && 'ml10', (marginLeft15 || ml15) && 'ml15', (marginLeft20 || ml20) && 'ml20', (marginLeft25 || ml25) && 'ml25', (marginLeft30 || ml30) && 'ml30',
            (isBoolean(marginHorizontal) || marginHorizontal0 || isBoolean(mh) || mh0) && 'mh0',
            (marginHorizontal5 || mh5) && 'mh5', (marginHorizontal10 || mh10) && 'mh10', (marginHorizontal15 || mh15) && 'mh15', (marginHorizontal20 || mh20) && 'mh20', (marginHorizontal25 || mh25) && 'mh25', (marginHorizontal30 || mh30) && 'mh30',
            (isBoolean(marginVertical) || marginVertical0 || isBoolean(mv) || mv0) && 'mv0',
            (marginVertical5 || mv5) && 'mv5', (marginVertical10 || mv10) && 'mv10', (marginVertical15 || mv15) && 'mv15', (marginVertical20 || mv20) && 'mv20', (marginVertical25 || mv25) && 'mv25', (marginVertical30 || mv30) && 'mv30',

            // Padding
            (isBoolean(padding) || padding0 || isBoolean(p) || p0) && 'p0',
            (padding5 || p5) && 'p5', (padding10 || p10) && 'p10', (padding15 || p15) && 'p15', (padding20 || p20) && 'p20', (padding25 || p25) && 'p25', (padding30 || p30) && 'p30',
            (isBoolean(paddingTop) || paddingTop0 || isBoolean(pt) || pt0) && 'pt0',
            (paddingTop5 || pt5) && 'pt5', (paddingTop10 || pt10) && 'pt10', (paddingTop15 || pt15) && 'pt15', (paddingTop20 || pt20) && 'pt20', (paddingTop25 || pt25) && 'pt25', (paddingTop30 || pt30) && 'pt30',
            (isBoolean(paddingRight) || paddingRight0 || isBoolean(pr) || pr0) && 'pr0',
            (paddingRight5 || pr5) && 'pr5', (paddingRight10 || pr10) && 'pr10', (paddingRight15 || pr15) && 'pr15', (paddingRight20 || pr20) && 'pr20', (paddingRight25 || pr25) && 'pr25', (paddingRight30 || pr30) && 'pr30',
            (isBoolean(paddingBottom) || paddingBottom0 || isBoolean(pb) || pb0) && 'pb0',
            (paddingBottom5 || pb5) && 'pb5', (paddingBottom10 || pb10) && 'pb10', (paddingBottom15 || pb15) && 'pb15', (paddingBottom20 || pb20) && 'pb20', (paddingBottom25 || pb25) && 'pb25', (paddingBottom30 || pb30) && 'pb30',
            (isBoolean(paddingLeft) || paddingLeft0 || isBoolean(pl) || pl0) && 'pl0',
            (paddingLeft5 || pl5) && 'pl5', (paddingLeft10 || pl10) && 'pl10', (paddingLeft15 || pl15) && 'pl15', (paddingLeft20 || pl20) && 'pl20', (paddingLeft25 || pl25) && 'pl25', (paddingLeft30 || pl30) && 'pl30',
            (isBoolean(paddingHorizontal) || paddingHorizontal0 || isBoolean(ph) || ph0) && 'ph0',
            (paddingHorizontal5 || ph5) && 'ph5', (paddingHorizontal10 || ph10) && 'ph10', (paddingHorizontal15 || ph15) && 'ph15', (paddingHorizontal20 || ph20) && 'ph20', (paddingHorizontal25 || ph25) && 'ph25', (paddingHorizontal30 || ph30) && 'ph30',
            (isBoolean(paddingVertical) || paddingVertical0 || isBoolean(pv) || pv0) && 'pv0',
            (paddingVertical5 || pv5) && 'pv5', (paddingVertical10 || pv10) && 'pv10', (paddingVertical15 || pv15) && 'pv15', (paddingVertical20 || pv20) && 'pv20', (paddingVertical25 || pv25) && 'pv25', (paddingVertical30 || pv30) && 'pv30',

            // Background
            getBackgroundColorClass()
        ]
    }

    const getStyles = () => {
        return {
            color: color,
            fontWeight: weight || w,
            lineHeight: getValue(lineHeight || lh),
            marginTop: getValue(marginTop || mt || marginVertical || mv || margin || m),
            marginRight: getValue(marginRight || mr || marginHorizontal || mh || margin || m),
            marginBottom: getValue(marginBottom || mb || marginVertical || mv || margin || m),
            marginLeft: getValue(marginLeft || ml || marginHorizontal || mh || margin || m),
            paddingTop: getValue(paddingTop || pt || paddingVertical || pv || padding || p),
            paddingRight: getValue(paddingRight || pr || paddingHorizontal || ph || padding || p),
            paddingBottom: getValue(paddingBottom || pb || paddingVertical || pv || padding || p),
            paddingLeft: getValue(paddingLeft || pl || paddingHorizontal || ph || padding || p),
            fontSize: getValue(size || s),
            borderTop: borderTop || bt || border,
            borderRight: borderRight || br || border,
            borderBottom: borderBottom || bb || border,
            borderLeft: borderLeft || bl || border,
        }
    }

    const getCloseIcon = () => {
        if (props.closable || props.onClose) {
            return (
                <span onClick={props.onClose} className={'close'}>&times;</span>
            )
        } else {
            return (
                <></>
            )
        }
    }

    const renderElement = () => {
        let currElement = isBoolean(tag) ? 'span' : 'div'
        elements.map((el: any) => {
            if (props[el]) {
                currElement = el
            }
        })

        // let children = props.children
        // children.push(getCloseIcon())

        return React.createElement(currElement, {
            className: cx('r-m-e', ...getClasses()),
            style: getStyles()
        }, [props.children, getCloseIcon()])
    }

    return (
        <>
            {renderElement()}
        </>
    )
}

superLabel.displayName = 'ReactMagicElement'

export default superLabel