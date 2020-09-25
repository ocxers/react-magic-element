import React from 'react'
import '../../scss/main.scss'
import utils from './utils'

const {elements, styleMappings, builtinClasses} = utils.mappingsAndClasses()
const RME = (props: any) => {
    let elementType = 'div'

    if (props.link && props.href) {
        elementType = 'a'
    }

    elements.map((el: any) => {
        if (props[el] && utils.isBoolean(props[el])) {
            elementType = el === 'btn' ? 'button' : el
        }
    })

    let keys = Object.keys(props)
    let classNameList: Array<any> = []
    let styleList: any = {}
    const loopCssProperties = (key: string, val: string) => {
        (styleMappings[key]?.split(',') || []).map((k: any) => {
            if (k === 'zIndex') {
                styleList[k] = Number.parseInt(val)
            } else {
                styleList[k] = utils.colorsValues[val] || val
            }
        })
    }
    const initialClassesAndStyles = () => {
        classNameList = []

        styleList = {}

        Object.keys(props).map((key: string) => {
            if (key === 'box') {
                // box size: width, height
                let bw: any = props.box
                let bh = 0
                if (bw.split(',').length > 1) {
                    bw = bw.split(',')
                    bh = bw[1]
                    bw = bw[0]
                }
                loopCssProperties('w', utils.getValue(bw))
                loopCssProperties('h', utils.getValue(bh))
            } else if (key === 'fill' && !utils.isBoolean(props.fill)) {
                // box size: width, height
                let pos: any = props.fill.toString().split(',')
                if (pos.length === 2) {
                    pos = [pos[0], pos[1], pos[0], pos[1]]
                }

                loopCssProperties('top', utils.getValue(pos[0]))
                loopCssProperties('right', utils.getValue(pos[1]))
                loopCssProperties('bottom', utils.getValue(pos[2]))
                loopCssProperties('left', utils.getValue(pos[3]))
            } else {
                let fmtKey = utils.formatKey(key)
                if (['button', 'btn'].indexOf(fmtKey) > -1) {
                    classNameList.push('rme--btn')
                }
                if (['hover-underline', 'line-through', 'lc', 'bgi'].indexOf(fmtKey) > -1) {
                    classNameList.push(`rme--${fmtKey}`)
                }

                if (utils.reservedWord.indexOf(key) <= -1 || !utils.isBoolean(props[key])) {
                    let gridKey = utils.checkGridKey(key)

                    if (gridKey) {
                        classNameList.push(`rme--${gridKey}`)
                    } else if (utils.isBoolean(props[key]) && builtinClasses?.indexOf(fmtKey) > -1) {
                        if (utils.boxSize.indexOf(fmtKey) > -1) {
                            classNameList.push(`rme--sz-${fmtKey}`)
                        } else {
                            classNameList.push(`rme--${fmtKey}`)
                        }
                    } else {
                        if (!utils.isBoolean(props[key])) {
                            loopCssProperties(key, props[key])
                        } else {
                            if (key.indexOf('-') > -1) {
                                let percentage = utils.getPercentageHandler(key)
                                if (percentage) {
                                    if (isNaN(Number(percentage[1]))) {
                                        loopCssProperties(percentage[0], percentage[1])
                                    } else {
                                        loopCssProperties(percentage[0], percentage[1] + '%')
                                    }
                                } else {
                                    if (Object.keys(styleMappings).indexOf(key) > -1) {
                                        loopCssProperties(key, utils.getValue(props[key]))
                                    }
                                }
                            } else {
                                let pixel = utils.getPixelHandler(key)
                                if (pixel) {
                                    if (pixel[0] === 'g' || pixel[0] === 'gutter') {
                                        classNameList.push('rme--g')
                                        if (pixel[1]) {
                                            // @ts-ignore
                                            styleList['--gutter'] = `-${pixel[1] / 2}px`
                                            // @ts-ignore
                                            styleList['--child-gutter'] = `${pixel[1] / 2}px`
                                        }
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
        let classNames = ['rme-container', props.col ? 'rme--col' : '', props.row ? 'rme--row' : ''].join(' ')
        if (props.alert) {
            return (
                <div className={classNames}>
                    {props.children}
                </div>
            )
        }
        if (props.circle) {
            classNames = ['rme--circle-container', props.col ? 'rme--col' : '', props.row ? 'rme--row' : ''].join(' ')
            return (
                <div className={classNames}>
                    {props.children}
                </div>
            )
        } else {
            return props.children
        }
    }

    initialClassesAndStyles()

    const renderElement = () => {
        let computerProps: any = {
            className: ['rme', props.className, ...classNameList].join(' '),
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
        if (keys.indexOf('bgImg') > -1 || keys.indexOf('bg-img') > -1 || keys.indexOf('bgi') > -1) {
            computerProps.style.backgroundImage = 'url(' + (props.bgImg || props['bg-img'] || props['bgi']) + ')'
        }

        if (props.style) {
            Object.assign(computerProps.style, props.style)
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