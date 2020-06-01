import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li href="HomePage">Home</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
            </div>
        );
    }
}

export default Header;