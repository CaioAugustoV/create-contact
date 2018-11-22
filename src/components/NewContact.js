import React, { Component } from 'react'

export default class NewContact extends Component {
  render() {
    return (
      <div className="new-contact">
        <div className="title">
          <h1>Adicionar Contato</h1>
        </div>
        <div className="fields">
          <label>Nome</label>
          <input type="text" />
        </div>
        <div className="fields">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="fields">
          <label>Telefone Celular</label>
          <input type="text" />
        </div>
        <div className="fields">
          <label>Telefone Fixo</label>
          <input type="text" />
        </div>
        <div className="fields">
          <label>Trabalho</label>
          <input type="text" />
        </div>
        <div className="fields button">
          <button type="button">Salvar</button>
        </div>
      </div>
    )
  }
}
