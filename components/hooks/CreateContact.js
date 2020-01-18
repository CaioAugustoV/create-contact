import React from 'react'
import { ContainerCard, ContainerInputs, ContainerInput, Button } from '../common/styled'

export default function CreateContact() {
  return (
    <ContainerCard>
      <div>
        <h1>Criar Contato</h1>
        <p>Para criar contato preencha os campos abaixo!</p>
        <ContainerInputs>
          <ContainerInput>
            <label>Nome:</label>
            <input />
          </ContainerInput>
          <ContainerInput>
            <label>Email:</label>
            <input />
          </ContainerInput>
          <ContainerInput>
            <label>Telefone:</label>
            <input />
          </ContainerInput>
          <ContainerInput>
            <label>Celular:</label>
            <input />
          </ContainerInput>
        </ContainerInputs>
      </div>
      <Button>
        Criar Contato
      </Button>
    </ContainerCard>
  )
}
