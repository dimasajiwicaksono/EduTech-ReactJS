import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import '../Style/Description.scss'
import Learning from '../Image/learning.png'

export default class Description extends Component {
    render() {
        return (
            <div className='body-description'>
                <Row className='body-row'>
                    <Col md={6} xl={6} xs={12} style={styles.colRight}>
                        <div >

                            <h1>Over 7000 Tutorial from 20 Courses</h1>

                            <p>Our set he for firmament morning sixth
                                subdue darkness creeping gathered divide our let
                                god moving. Moving in fourth air night bring upon
                                you’re it beast let you dominion likeness open place
                                    day great wherein heaven sixth lesser subdue fowl</p>
                            <Button className='btn-enroll' style={styles.btnEnroll}> Enroll a Course</Button>
                        </div>
                    </Col>
                    <Col md={6} xl={6} xs={12} style={styles.colLeft}>
                        <img src={Learning} alt='learning' />
                    </Col>
                </Row>
            </div>
        )
    }
}


const styles = {
    colRight: {
        // backgroundColor: 'red'
    },
    colLeft: {
        // backgroundColor: 'blue'
    },
    btnEnroll : {
        borderRadius : 50
    }
}