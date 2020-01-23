import React, { Component } from 'react'
import '../Style/Header.scss'
import Login from '../Components/Form/LoginModal'

export default class Header extends Component {
    render() {
        return (
            <div className='header-area row'>
                <div className='brand col-2'>
                    <h1>EduTech</h1>
                </div>
                <div className='categories col-8'>
                    <p>Home</p>
                    <p>Courses</p>
                    <p>Pages</p>
                </div>
                <div className='btn-login col-2'>
                    <Login />
                </div>
            </div>
        )
    }
}
