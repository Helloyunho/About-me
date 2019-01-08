import Base from './base'
import Margin from './margin'
import React from 'react'
import { Container, Segment, Card, Icon, Image, Popup } from 'semantic-ui-react'

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <React.Fragment>
        <Base />
        <Container>
          <Margin />
          <Card centered>
            <Image src='/static/profile.png' />
            <Card.Content>
              <Card.Header>Helloyunho</Card.Header>
              <Card.Meta><span className='date'>Borned at 10/08/2005</span></Card.Meta>
              <Card.Description>I'm Helloyunho</Card.Description>
            </Card.Content>
            <Popup trigger={
              <Card.Content extra>
                <a>
                  <Icon name='discord' />
                  Discord
                </a>
              </Card.Content>
            } content='[🅷🅴🅻🅻🅾🆈🆄🅽🅷🅾]#0100' />
            <Popup trigger={
              <Card.Content extra>
                <a href='https://www.youtube.com/channel/UCjtqPIrfV2BZFf3T-03iq9A'>
                  <Icon name='youtube' />
                  Youtube
                </a>
              </Card.Content>
            } content='My youtube channel!' />
            <Popup trigger={
              <Card.Content extra>
                <a href='https://twitter.com/yunho098765'>
                  <Icon name='twitter' />
                  Twitter
                </a>
              </Card.Content>
            } content='@yunho098765' />
            <Popup trigger={
              <Card.Content extra>
                <a href='https://github.com/Helloyunho'>
                  <Icon name='github' />
                  Github
                </a>
              </Card.Content>
            } content='@Helloyunho' />
          </Card>
        </Container>
      </React.Fragment>
    )
  }
}
