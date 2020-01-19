import React, { Component } from 'react'
import { ContainerCard, ContainerContacts, ContactsList, ContactCard, IconName, ContactContent } from '../common/styled'
import { IoIosMail, IoIosPhonePortrait } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

export default class ListContacts extends Component {
  render() {
    return (
      <ContainerCard dark={this.props.dark}>
        <ContainerContacts>
          <h1>Lista de contatos</h1>
          <p>Para visualizar o contato completo clique no item!</p>
          <ContactsList>
            <ContactCard>
              <IconName>
                CA
            </IconName>
              <ContactContent>
                <h2>Caio Augusto</h2>
                <div>
                  <IoIosMail />
                  <IoIosPhonePortrait />
                  <MdLocalPhone />
                </div>
              </ContactContent>
            </ContactCard>
            <ContactCard active>
              <IconName>
                YA
            </IconName>
              <ContactContent>
                <h2>Yago Freitas</h2>
                <div>
                  <IoIosPhonePortrait />
                  <MdLocalPhone />
                </div>
              </ContactContent>
            </ContactCard>
            <ContactCard>
              <IconName>
                MA
            </IconName>
              <ContactContent>
                <h2>Marcelo Leal</h2>
                <div>
                  <IoIosMail />
                  <MdLocalPhone />
                </div>
              </ContactContent>
            </ContactCard>
          </ContactsList>
        </ContainerContacts>
      </ContainerCard>
    )
  }
}
