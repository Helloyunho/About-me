import Base from './base'
import React from 'react'
import Link from 'next/link'
import '../static/projects.css'
import { Container, Segment, Card, Icon, Image, Popup, Header, Button, Divider, Item } from 'semantic-ui-react'

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {darkMode: undefined}
  }

  toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      if (this.state.darkMode) {
        this.setState({
          darkMode: false
        })
        localStorage.setItem('dark', false)
      } else {
        this.setState({
          darkMode: true
        })
        localStorage.setItem('dark', true)
      }
    }
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      this.setState({
        darkMode: localStorage.getItem('dark') === 'false' ? false : true
      })
    }
  }
  
  render () {
    return (
      <React.Fragment>
        <Container fluid style={
          {
            minHeight: '100vh',
            backgroundColor: this.state.darkMode ? '#2d3436' : null
          }
        } className={this.state.darkMode ? 'dark' : null}>
          <Base dark={this.state.darkMode} onClickDark={this.toggleDarkMode} />
          <Divider hidden />
          <Container>
            <Header as='h2'>Projects</Header>
            <Divider hidden />
            <Item.Group divided>
              <Item as='a' href='https://kats.helloyunho.pw'>
                <Item.Image size='tiny' src='https://cdn.discordapp.com/avatars/360993394648023052/6b96e6c016aa5e92e9b40c8b922f25dc.png' />
                <Item.Content>
                  <Item.Header>Kats</Item.Header>
                  <Item.Description>Add some AWESOME things on your discord!</Item.Description>
                </Item.Content>
              </Item>
              <Item as='a' href='https://github.com/helloyunho/osuripple-on-nodejs'>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Item.Content>
                  <Item.Header>osuripple on nodejs</Item.Header>
                  <Item.Description>This is the osuripple but running on node.js</Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Container>
        </Container>
      </React.Fragment>
    )
  }
}
