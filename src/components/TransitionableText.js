import React from 'react'
import PropTypes from 'prop-types'

const TransitionableText = props => {
  const {
    dark,
    light,
    background,
    bold,
    as = 'h1',
    size = '4xl',
    resize = true,
    midSize = '6xl',
    className = '',
    children
  } = props

  const As = as

  const classes = [
    'transition',
    'duration-500',
    'ease-in-out',
    `text-${size}`,
    resize ? `md:text-${midSize}` : '',
    ...className.split(' ')
  ]

  if (bold) classes.push('font-bold')

  if (dark) {
    if (background) {
      classes.push('text-black')
      classes.push('bg-white')
    } else {
      classes.push('text-white')
    }
  } else if (light) {
    if (background) {
      classes.push('text-white')
      classes.push('bg-black')
    } else {
      classes.push('text-black')
    }
  }

  return <As className={classes.join(' ')}>{children}</As>
}

TransitionableText.propTypes = {
  dark: PropTypes.bool,
  light: PropTypes.bool,
  background: PropTypes.bool,
  bold: PropTypes.bool,
  as: PropTypes.string,
  size: PropTypes.string,
  resize: PropTypes.bool,
  midSize: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default TransitionableText
