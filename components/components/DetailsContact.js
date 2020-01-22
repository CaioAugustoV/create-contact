import React, { Component } from 'react'
import { ContainerCard, DetalhesMenu, DetalhesContent } from '../common/styled'
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

export default class DetailsContact extends Component {
  render() {
    return (
      <ContainerCard>
        <DetalhesMenu>
          <h1>Detalhes do Contato</h1>
          <div>
            <FaRegEdit />
            <FaTrashAlt />
          </div>
        </DetalhesMenu>
        <DetalhesContent>
          <label>Nome:</label>
          <input type="text" value="Yago Freitas" />
          <label>Email:</label>
          <input type="text" value="" />
          <label>Telefone:</label>
          <input type="text" value="(24) 2245-6974" />
          <label>Celular:</label>
          <input type="text" value="(24) 98816-6554" />
          <button>Salvar</button>
        </DetalhesContent>
      </ContainerCard>
    )
  }
}
