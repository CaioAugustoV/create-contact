import React, { Component } from 'react'
import { Container } from '../common/styled'
import CreateContact from './CreateContact'
import ListContacts from './ListContacts'
import DetailsContact from './DetailsContact'

export default class index extends Component {
  render() {
    return (
      <Container>
        <CreateContact />
        <ListContacts dark/>
        <DetailsContact />
      </Container>
    )
  }
}
