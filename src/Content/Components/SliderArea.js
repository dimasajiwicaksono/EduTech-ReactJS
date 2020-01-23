import React, { Component } from 'react';
import {Button, Col, Row} from 'react-bootstrap'
import '../Style/SliderArea.scss'
import Edu from '../Image/edu_ilastration.png'

export default class SliderArea extends Component {
    render() {
        return (
            <div className='body'>
                <Row>
                    <Col md={6} xs={12} xl={6}>
                        <div className='slider-area'>
                            <img className='img' src = {Edu} alt='eduImage'/>
                        </div>
                    </Col>
                    <Col md={5}  xs={12} xl={5}>
                    <div className ='slider-info'>
                            <h1>Learn Your Favourite Course From Online</h1>
                            <Button className='btn-submit'  >Browse Our Course</Button>
                    </div>
                </Col>
                </Row>
                
            </div>
        )
    }
}
