//rcc: Create a React Component Class
import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import {GiTankTread} from 'react-icons/gi';

export default class Navbar extends Component {

    state = {
        isOpen: false
    }
    hangleToggle = () => {

        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <h4>FARMi</h4>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.hangleToggle}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/drive">Drive</Link>
                    </li>
                    <li>
                        <Link to="/I+D+i">I+D+i</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>

        </nav>
    }
}
