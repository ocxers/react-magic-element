import React from 'react'
import '../../scss/main.scss'
import cx from 'classnames'
import utils from './utils'
import {string} from "prop-types";

const {elements, styleMappings, builtinClasses} = utils.mappingsAndClasses()
const RME = (props: any) => {
    let elementType = 'div'

    if (props.link && props.href) {
        elementType = 'a'
    }

    elements.map((el: any) => {
        if (props[el]) {
            elementType = el === 'btn' ? 'button' : el
        }
    })

    let classNameList: Array<any> = []
    let styleList: any = {}
    let gutter: any = ''
    const loopCssProperties = (key: string, val: string) => {
        (styleMappings[key]?.split(',') || []).map((k: any) => {
            styleList[k] = val
        })
    }
    const initialClassesAndStyles = () => {
        classNameList = []

        styleList = {}

        Object.keys(props).map((key: string) => {
            let fmtKey = utils.formatKey(key)

            console.log(fmtKey)
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
                } else if (utils.isBoolean(props[key]) && builtinClasses?.indexOf(fmtKey) > -1) {
                    classNameList.push('rme--' + fmtKey)
                } else {
                    switch (key) {
                        case 'b':
                            loopCssProperties(key, props[key])
                            break
                        default:
                            if (!utils.isBoolean(props[key])) {
                                loopCssProperties(key, props[key])
                            } else {
                                if (key.indexOf('-') > -1) {
                                    let percentage = utils.getPercentageHandler(key)
                                    if (percentage) {
                                        loopCssProperties(percentage[0], percentage[1] + '%')
                                    } else {
                                        if (Object.keys(styleMappings).indexOf(key) > -1) {
                                            loopCssProperties(key, utils.getValue(props[key]))
                                        }
                                    }
                                } else {
                                    let pixel = utils.getPixelHandler(key)
                                    if (pixel) {
                                        loopCssProperties(pixel[0], pixel[1] + 'px')
                                        if (pixel[0] === 'g' || pixel[0] === 'gutter') {
                                            classNameList.push('rme--g')
                                            if (pixel[1]) {
                                                // @ts-ignore
                                                styleList['--gutter'] = `-${pixel[1] / 2}px`
                                                // @ts-ignore
                                                styleList['--child-gutter'] = `${pixel[1] / 2}px`
                                            }
                                        }
                                        if (pixel[0] === 'b' || pixel[0] === 'border') {
                                            loopCssProperties(pixel[0], pixel[1] + 'px solid')
                                        } else {
                                            loopCssProperties(pixel[0], pixel[1] + 'px')
                                        }
                                    } else {
                                        if (Object.keys(styleMappings).indexOf(key) > -1) {
                                            loopCssProperties(key, utils.getValue(props[key]))
                                        }
                                    }
                                }
                            }
                    }
                }
            }
        })
    }

    console.log('initialClassesAndStyles')
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
                <div className={cx('rme-container', props.col ? 'rme--col' : '', props.row ? 'rme--row' : '')}>
                    {props.children}
                </div>
            )
        }
        if (props.circle) {
            return (
                <div className={cx('rme--circle-container', props.col ? 'rme--col' : '', props.row ? 'rme--row' : '')}>
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
            style: styleList,
            gutter: gutter
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

        Object.keys(utils.rmeConfig.colors).map((key: any) => {
            if (computerProps.className.indexOf(key) > -1) {
                if (computerProps.className.indexOf('rme--btn') > -1 || computerProps.className.indexOf('rme--tag') > -1) {
                    if (computerProps.className.indexOf('rme--plain') > -1) {
                        computerProps.style = Object.assign(computerProps.style, utils.rmeConfig.colors['rme--btn-tag-plain'])
                    } else {
                        computerProps.style = Object.assign(computerProps.style, utils.rmeConfig.colors['rme--btn-tag'])
                    }
                } else {
                    computerProps.style = Object.assign(computerProps.style, utils.rmeConfig.colors[key])
                }
            }
        })

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

RME.displayName = 'RME'
RME.config = utils.setConfig
export default RME