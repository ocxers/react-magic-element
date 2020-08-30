import React from 'react'
import '../scss/main.scss'
import cx from 'classnames'
import utils from './utils'

const {elements, styleMappings, builtinClasses} = utils.mappingsAndClasses()
const ReactMagicElement = (props: any) => {
    let elementType = 'div'
    elements.map((el: any) => {
        if (props[el]) {
            elementType = el === 'btn' ? 'button' : el
            if (props.link && props.href) {
                elementType = 'a'
            }
        }
    })

    const getPercentageHandler = (k: string) => {
        let arr = k.split(/-/g)
        if (arr.length > 0 && arr[0] !== k) {
            return arr
        }

        return null
    }

    const getPixelHandler = (k: string) => {
        let arr = k.split(/(\d+)/g)
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
    const loopCssProperties = (key: string, val: string) => {
        let cssProperties: Array<string> = styleMappings[key]?.split(',') || []
        cssProperties.map(k => {
            styleList[k] = val
        })
    }
    const initialClassesAndStyles = () => {
        classNameList = []

        styleList = {}
        let keys: Array<string> = Object.keys(props)

        keys.map((key: string) => {
            let fmtKey = utils.formatKey(key)
            if (['button', 'btn', 'link'].indexOf(fmtKey) > -1) {
                classNameList.push('rme--btn')
            }
            if (fmtKey === 'hover-underline') {
                classNameList.push('rme--hover-underline')
            }
            if (fmtKey === 'line-through') {
                classNameList.push('rme--line-through')
            }
            if (fmtKey === 'bg-img') {
                classNameList.push('rme--bg-img')
            }

            if (!(utils.reservedWord.indexOf(key) > -1)) {
                let gridKey = utils.checkGridKey(key)

                if (gridKey) {
                    classNameList.push('rme--' + gridKey)
                } else if (isBoolean(props[key]) && builtinClasses?.includes(fmtKey)) {
                    classNameList.push('rme--' + fmtKey)
                } else {
                    switch (key) {
                        case 'b':
                            loopCssProperties(key, props[key])
                            break
                        default:
                            if (!isBoolean(props[key])) {
                                loopCssProperties(key, props[key])
                            } else {
                                if (key.indexOf('-') > -1) {
                                    let percentage = getPercentageHandler(key)
                                    if (percentage) {
                                        loopCssProperties(percentage[0], percentage[1] + '%')
                                    } else {
                                        if (Object.keys(styleMappings).indexOf(key) > -1) {
                                            loopCssProperties(key, getValue(props[key]))
                                        }
                                    }
                                } else {
                                    let pixel = getPixelHandler(key)
                                    if (pixel) {
                                        loopCssProperties(pixel[0], pixel[1] + 'px')
                                    } else {
                                        if (Object.keys(styleMappings).indexOf(key) > -1) {
                                            loopCssProperties(key, getValue(props[key]))
                                        }
                                    }
                                }
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
        } else {
            return <></>
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