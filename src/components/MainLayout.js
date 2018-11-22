import React, { Component } from 'react';
import NewContact from './NewContact';
import ListContacts from './ListContacts'

export default class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <div className="left">
            <NewContact />
        </div>
        <div className="rigth">
            <ListContacts />
        </div>
      </div>
    )
  }
}
