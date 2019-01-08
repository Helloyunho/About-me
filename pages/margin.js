import React from 'react'

export default class Margin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <React.Fragment>
        <div style={{
          marginTop: '1%'
        }} />
      </React.Fragment>
    )
  }
}
