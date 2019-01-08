import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Container, Icon } from 'semantic-ui-react'
import Link from 'next/link'

export default class Base extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <React.Fragment>
        <Menu attached='top' stackable>
          <Container>
            <Link href='/' passHref>
              <Menu.Item
                name='home'
                as='a'>
                <Icon name='home' /> Home
              </Menu.Item>
            </Link>
            <Menu.Menu position='right'>
              <Link href='/login' passHref>
                <Menu.Item
                  name='login'
                  as='a'>
                  <Icon name='sign-in' /> Sign In
                </Menu.Item>
              </Link>
              <Link href='/register' passHref>
                <Menu.Item
                  name='register'
                  as='a'>
                  <Icon name='edit' /> Register
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Container>
        </Menu>
      </React.Fragment>
    )
  }
}
