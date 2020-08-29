import React, {useEffect, useState} from 'react'
import '../../scss/main.scss'
import cx from 'classnames'
import utils from './utils'

const fontColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'transparent']

const {elements, styleMappings, builtinClasses} = utils.mappingsAndClasses()
const ReactMagicElement = (props: any) => {
    const [elementType, setElementType] = useState('div')

    useEffect(() => {
        let currType = elementType
        elements.map((el: any) => {
            if (props[el]) {
                currType = el === 'btn' ? 'button' : el
                if (props.link && props.href) {
                    currType = 'a'
                }
            }
        })

        setElementType(currType)
    }, [])

    const getPercentageHandler = (k: string) => {
        let arr = k.split(/-/g)
        if (arr.length > 0 && arr[0] !== k) {
            return arr
        }

        return null
    }

    const getPixelHandler = (k: string) => {
        let arr = k.split(/\d+/g)
        if (arr.length > 0 && arr[0] !== k) {
            return arr
        }

        return null
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

    const isBoolean = (b: any) => {
        return typeof b === 'boolean'
    }

    let classNameList: Array<any> = []
    let styleList: any = {}
    const initialClassesAndStyles = () => {
        classNameList = [
            // tag
            (isBoolean(props.tag)) && 'rme--tag',
            // alert
            isBoolean(props.alert) && 'rme--alert',
            // button
            (props.button || props.btn || props.link) && 'rme--btn',
            props.plain && 'rme--plain',
            props.link && 'rme--link',
            // Text align
            props.center && 'rme--center', props.right && 'rme--right', props.left && 'rme--left',
            // Decoration
            props.underline && 'rme--underline', props.hoverUnderline && 'rme--hoverUnderline', props.lineThrough && 'rme--lineThrough',
            props.pointer && 'rme--pointer',
            // // Background
            (props.avatar || props.bgImg) && 'rme--bg-img',

            // Box size
            props.h100 && 'rme--h100',
            props['h-100'] && 'rme--h-100',
            props.w100 && 'rme--w100',
            // flex direction
            props.row && 'rme--row',
            props.col && 'rme--col',
            props.fill && 'rme--fill',

            // disabled
            props.disabled && 'rme--disabled',

            // group
            props.group && 'rme--group'
        ]

        styleList = {}
        let keys: Array<string> = Object.keys(props)

        keys.map((key: string) => {
            let fmtKey = utils.formatKey(key)

            if (isBoolean(props[key]) && builtinClasses?.includes(fmtKey)) {
                classNameList.push('rme--' + fmtKey)
            } else {
                if (key === 'b') {
                    styleList[styleMappings[key]] = props[key]
                } else {
                    let percentage = getPercentageHandler(key)
                    if (percentage) {
                        styleList[percentage[0]] = percentage[1] + '%'
                    } else {
                        if (Object.keys(styleMappings).includes(key)) {
                            styleList[styleMappings[key]] = getValue(props[key])
                        }
                    }

                    let pixel = getPixelHandler(key)
                    if (pixel) {
                        styleList[pixel[0]] = pixel[1] + 'px'
                    } else {
                        if (Object.keys(styleMappings).includes(key)) {
                            styleList[styleMappings[key]] = getValue(props[key])
                        }
                    }
                }
            }
        })
    }

    initialClassesAndStyles()

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
        let computerProps: any = {
            className: cx('rme', props.className, ...classNameList),
            style: styleList
        }

        if (props.onClick) {
            computerProps.onClick = props.onClick
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

        return React.createElement(elementType, computerProps, [getChildren(), getCloseIcon()].map((child: any, key: number) => {
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

ReactMagicElement.displayName = 'ReactMagicElement'

export default ReactMagicElement