import React                                     from 'react'
import '../../scss/main.scss'
import { isBoolean, setConfig, includes, toArr } from './fns'
import { elements, rmeConfig }                   from './consts'
import utils                                     from './utils'

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

  let keys: string [] = []
  Object.keys(props).map((key: string) => {
    if (!includes(toArr('children,label,value'), key)) {
      keys.push(key)
    }
  })

  let classNameList: Array<any> = []
  let styleList: any = {}

  const initialClassesAndStyles = () => {
    classNameList = []

    styleList = {}

    keys.map((key: string) => {
      if (includes(key, 'lc')) {
        classNameList.push('rme--lc')
      }
      if (elements.indexOf(key) === -1 || !isBoolean(props[key])) {
        const iKeyVal = utils.getKeyValue(key, props[key])
        classNameList.push(iKeyVal.classNames.map((cn: string) => `rme--${cn}`))
        classNameList.push(...iKeyVal.customerClassNames)
        Object.assign(styleList, iKeyVal.styles)
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
    let classNames = ['rme--flex rme--w-100', props.col ? 'rme--col' : '', props.row ? 'rme--row' : ''].join(' ')
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
    if (keys.indexOf('bgi') > -1) {
      computerProps.style.backgroundImage = 'url(' + props['bgi'] + ')'
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