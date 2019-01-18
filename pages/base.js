import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Container, Icon } from 'semantic-ui-react'
import Link from 'next/link'

export default class Base extends React.Component {
  static defaultProps = {
    onClickDark: () => {},
    dark: false
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <React.Fragment>
        <Menu attached='top' stackable inverted={this.props.dark}>
          <Container>
            <Link href='/' passHref>
              <Menu.Item
                name='home'
                as='a'>
                <Icon name='home' /> Home
              </Menu.Item>
            </Link>
            <Link href='/projects' passHref>
              <Menu.Item
                name='projects'
                as='a'>
                <Icon name='folder' /> Projects
              </Menu.Item>
            </Link>
            <Menu.Menu position='right'>
              <Menu.Item name='dark' onClick={this.props.onClickDark}>
                <Icon name={this.props.dark ? 'sun' : 'moon'} /> {this.props.dark ? 'Light' : 'Dark'}
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </React.Fragment>
    )
  }
}
