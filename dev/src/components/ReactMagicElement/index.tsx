import React from 'react'
import '../../scss/main.scss'
import utils from './utils'

const { mappingsAndClasses, isBoolean, colorsValues, getValue, formatKey, reservedWord, checkGridKey, boxSize, getPercentageHandler, getPixelHandler, rmeConfig, setConfig, toArr } = utils
const { elements, styleMappings, builtinClasses } = mappingsAndClasses()
const RME = (props: any) => {
  let elementType = 'div'

  if (props.link && props.href) {
    elementType = 'a'
  }

  elements.map((el: any) => {
    if (props[el] && isBoolean(props[el])) {
      elementType = el === 'btn' ? 'button' : el
    }
  })

  let keys = Object.keys(props)
  let classNameList: Array<any> = []
  let styleList: any = {}
  const loopCssProperties = (key: string, val: string) => {
    if (key !== 'children') {
      (toArr(styleMappings[key] || '') || []).map((k: any) => {
        if (k === 'zIndex') {
          styleList[k] = Number.parseInt(val)
        } else {
          styleList[k] = colorsValues[val] || val
        }
      })
    }
  }
  const initialClassesAndStyles = () => {
    classNameList = []

    styleList = {}

    Object.keys(props).map((key: string) => {
      if (key.indexOf('cn-') === 0 || key === 'cn') {
        // outside classnames
        if (key.indexOf('cn-') === 0) {
          const cn = key.split('-')
          cn.shift()
          classNameList.push(cn.join('-'))
        } else {
          classNameList.push(toArr(props[key]).join(' '))
        }
      } else if (key === 'box') {
        // box size: width, height
        let bw: any = props.box
        let bh = 0
        if (toArr(bw).length > 1) {
          bw = toArr(bw)
          bh = bw[1]
          bw = bw[0]
        }
        loopCssProperties('w', getValue(bw))
        loopCssProperties('h', getValue(bh))
      } else if (key === 'fill' && !isBoolean(props.fill)) {
        // box size: width, height
        let pos: any = toArr(props.fill.toString())
        if (pos.length === 2) {
          pos = [pos[0], pos[1], pos[0], pos[1]]
        }

        loopCssProperties('top', getValue(pos[0]))
        loopCssProperties('right', getValue(pos[1]))
        loopCssProperties('bottom', getValue(pos[2]))
        loopCssProperties('left', getValue(pos[3]))
      } else {
        let fmtKey = formatKey(key)
        if (['button', 'btn'].indexOf(fmtKey) > -1) {
          classNameList.push('rme--btn')
        }
        if (['hover-underline', 'line-through', 'lc', 'bgi'].indexOf(fmtKey) > -1) {
          classNameList.push(`rme--${fmtKey}`)
        }

        if (reservedWord.indexOf(key) <= -1 || !isBoolean(props[key])) {
          let gridKey = checkGridKey(key)

          if (gridKey) {
            classNameList.push(`rme--${gridKey}`)
          } else if (isBoolean(props[key]) && builtinClasses?.indexOf(fmtKey) > -1) {
            if (boxSize.indexOf(fmtKey) > -1) {
              classNameList.push(`rme--sz-${fmtKey}`)
            } else {
              classNameList.push(`rme--${fmtKey}`)
            }
          } else {
            if (!isBoolean(props[key])) {
              loopCssProperties(key, props[key])
            } else {
              if (key.indexOf('-') > -1) {
                let percentage = getPercentageHandler(key)
                if (percentage) {
                  if (isNaN(Number(percentage[1]))) {
                    loopCssProperties(percentage[0], percentage[1])
                  } else {
                    loopCssProperties(percentage[0], percentage[1] + '%')
                  }
                } else {
                  if (Object.keys(styleMappings).indexOf(key) > -1) {
                    loopCssProperties(key, getValue(props[key]))
                  }
                }
              } else {
                let pixel = getPixelHandler(key)
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
    }

    if (props.label && !isBoolean(props.label)) {
      classNames = 'rme--label-item'
      let labelWidth = Number(props.labelWidth)
      if (typeof props.label === 'string') {
        return (
          <div className={classNames}>
                        <span className={'rme--label'}
                              style={{ width: labelWidth + 'px' }}>{props.label}:</span> {props.prefix}{props.value}{props.children}{props.suffix}
          </div>
        )
      } else {
        return (
          <div className={classNames}>
            {props.label} {props.prefix}{props.value}{props.children}{props.suffix}
          </div>
        )
      }
    }

    return props.children
  }

  const renderElement = () => {
    let computerProps: any = {
      className: ['rme', props.className, ...classNameList].reduce((cls: Array<string>, cn: any) => {
        if (cn) {
          cls.push(cn)
        }
        return cls
      }, []).join(' '),
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

    Object.keys(rmeConfig.colors).map((key: any) => {
      if (computerProps.className.indexOf(key) > -1) {
        if (computerProps.className.indexOf('rme--btn') > -1 || computerProps.className.indexOf('rme--tag') > -1) {
          if (computerProps.className.indexOf('rme--plain') > -1) {
            computerProps.style = Object.assign(computerProps.style, rmeConfig.colors['rme--btn-tag-plain'])
          } else {
            computerProps.style = Object.assign(computerProps.style, rmeConfig.colors['rme--btn-tag'])
          }
        } else {
          computerProps.style = Object.assign(computerProps.style, rmeConfig.colors[key])
        }
      }
    })

    if (elementType === 'input') {
      return (
        <input className={computerProps.className} style={computerProps.style} type={props.type || 'text'}
               placeholder={props.placeholder} onChange={props.onChange}/>
      )
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

RME.displayName = 'RME'
RME.config = setConfig
export default RME