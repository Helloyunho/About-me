import Base from './base'
import React from 'react'
import Link from 'next/link'
import { Container, Segment, Card, Icon, Image, Popup, Header, Button, Divider } from 'semantic-ui-react'
import '../static/index.css'

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
            <Card centered>
              <Image src='/static/profile.png' />
              <Card.Content>
                <Card.Header>Helloyunho</Card.Header>
                <Card.Meta><span className='date'>Borned at 10/08/2005</span></Card.Meta>
                <Card.Description>I'm Helloyunho</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Popup trigger={
                  <a>
                    <Icon name='discord' />
                    Discord
                  </a>
                } content='[🅷🅴🅻🅻🅾🆈🆄🅽🅷🅾]#0100' />
              </Card.Content>
              <Card.Content extra>
                <Popup trigger={
                  <a href='https://www.youtube.com/channel/UCjtqPIrfV2BZFf3T-03iq9A'>
                    <Icon name='youtube' />
                    Youtube
                  </a>
                } content='My youtube channel!' />
              </Card.Content>
              <Card.Content extra>
                <Popup trigger={
                  <a href='https://twitter.com/yunho098765'>
                    <Icon name='twitter' />
                    Twitter
                  </a>
                } content='@yunho098765' />
              </Card.Content>
              <Card.Content extra>
                <Popup trigger={
                  <a href='https://github.com/Helloyunho'>
                    <Icon name='github' />
                    Github
                  </a>
                } content='@Helloyunho' />
              </Card.Content>
            </Card>
            <Divider hidden />
            <Segment inverted={this.state.darkMode}>
              <Header as='h4'>Current using</Header>
              <Card.Group centered>
                <Card>
                  <Card.Content>
                    <Card.Header>node.js</Card.Header>
                    <Card.Description>My main language</Card.Description>
                  </Card.Content>
                  <Link href='https://nodejs.org' passHref>
                    <Button inverted as='a' attached='bottom'>Go to website</Button>
                  </Link>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Python</Card.Header>
                    <Card.Description>My second language</Card.Description>
                  </Card.Content>
                  <Link href='https://www.python.org' passHref>
                    <Button inverted as='a' attached='bottom'>Go to website</Button>
                  </Link>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Kotlin</Card.Header>
                    <Card.Description>Learning for make minecraft mods and plugins(I don't like to use Java because it's hard)</Card.Description>
                  </Card.Content>
                  <Link href='https://kotlinlang.org' passHref>
                    <Button inverted as='a' attached='bottom'>Go to website</Button>
                  </Link>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Typescript</Card.Header>
                    <Card.Description>(Maybe) It's going to be my main language</Card.Description>
                  </Card.Content>
                  <Link href='https://www.typescriptlang.org' passHref>
                    <Button inverted as='a' attached='bottom'>Go to website</Button>
                  </Link>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Swift</Card.Header>
                    <Card.Description>Learning for use native things on React Native</Card.Description>
                  </Card.Content>
                  <Link href='https://swift.org' passHref>
                    <Button inverted as='a' attached='bottom'>Go to website</Button>
                  </Link>
                </Card>
              </Card.Group>
            </Segment>
          </Container>
        </Container>
      </React.Fragment>
    )
  }
}
