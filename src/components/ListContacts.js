import React, { Component } from 'react'

export default class ListContacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
        }
    }
    openDetails = () => {
        this.setState({
            hidden: !this.state.hidden,
        })
    }
    render() {
        return (
            <div className="list-contacts">
                <div className="title">
                    <h1>Contatos</h1>
                </div>
                <div className="contact">
                    <div className="perfil">
                        <p>Caio Augusto</p>
                        <span>caioaugustov@gmail.com</span>
                    </div>
                    <div className="button">
                        <button type="button" onClick={this.openDetails} >Ver detalhes</button>
                    </div>
                </div>
                <div>
                    {this.state.hidden && <Details />}
                </div>
            </div>
        )
    }
}


const Details = () => (
    <div className="details">
        <div className="nunber">
            <p>+55 24 98816-6554</p>
            <p>+55 24 2222-2222</p>
        </div>
        <div className="job">
            <p>Web Developer</p>
        </div>
    </div>
)