import React from 'react'
import '../../scss/main.scss'
import { isBoolean, setConfig } from './fns'
import utils from './utils'

const RME = (props: any) => {
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
    let computerProps: any = utils.computeProps(props)
    let tagName = computerProps.tagName
    delete computerProps.tagName
    if (tagName === 'input') {
      return (
        <input type={props.type || 'text'}
               {...computerProps}
        />
      )
    }

    return React.createElement(tagName, computerProps, [getChildren(), getCloseIcon()].map((child: any, key: number) => {
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
RME.computeProps = utils.computeProps
export default RME