import React, { Component } from 'react'
import '../../Style/Banner.scss'

export default class Banner extends Component {
    render() {
        return (
            <div className='banner-container'>
                <div className="banner">
                    <img src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="img"/>
                        <div className="overlay">
                            <blockquote className="description">
                                " Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught."
                            </blockquote>
                        </div>
                </div>
            </div>
                )
            }
        }
