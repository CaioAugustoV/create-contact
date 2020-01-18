import React from 'react'
import { Container } from '../common/styled'
import CreateContact from './CreateContact'
import ListContacts from './ListContacts'
import DetailsContact from './DetailsContact'

export default function index() {
  return (
    <Container>
      <CreateContact />
      <ListContacts dark/>
      <DetailsContact />
    </Container>
  )
}