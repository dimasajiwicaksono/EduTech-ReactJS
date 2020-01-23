import React, { Component } from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../Style/CardItem.scss'

export default class CardItem extends Component {
    constructor(){
        super();
        this.state = {
        DATA : [
            {id:1, title:'Mobile App Design Step By Step', category:'Tech', image:'https://www.foodbusinessnews.net/ext/resources/2019/9/TractorFarm_Lead.jpg?1569426080'},
            {id:2, title:'Agriculture Modern ', category:'Tech', image:'https://www.solvay.com/sites/g/files/srpend221/files/styles/header/https/media.solvay.com/medias/domain1446/media403/61160-8sbe5pbpfw.jpg?itok=J8bcCEpd'},
            {id:3, title:'AgriStartUp Company', category:'Tech', image:'https://leica-geosystems.com/-/media/images/leicageosystems/industries/sliders%201766x750/agriculture_portfolio_leica_geosystems_1766x750.ashx?h=750&w=1766&la=pt-BR&hash=F13245E128FE8EC45D89F2F60CA1BC34'},
            {id:4, title:'Mobile App Design Step By Step', category:'Tech', image:'https://www.foodbusinessnews.net/ext/resources/2019/9/TractorFarm_Lead.jpg?1569426080'},
            {id:5, title:'Agriculture Modern ', category:'Tech', image:'https://www.solvay.com/sites/g/files/srpend221/files/styles/header/https/media.solvay.com/medias/domain1446/media403/61160-8sbe5pbpfw.jpg?itok=J8bcCEpd'},
            {id:6, title:'AgriStartUp Company', category:'Tech', image:'https://leica-geosystems.com/-/media/images/leicageosystems/industries/sliders%201766x750/agriculture_portfolio_leica_geosystems_1766x750.ashx?h=750&w=1766&la=pt-BR&hash=F13245E128FE8EC45D89F2F60CA1BC34'},
        ]
    }
    }
    render() {
        return (
            <div className='container'>
            <Row>
            {this.state.DATA.map (item => 
            <Col md={4} xs={12}>
                <Card style={styles.cardMenu}>
                    <img src ={item.image} alt='imgae' className='image' />
                    <Card.Body >
                        <p1>{item.category}</p1>
                        <h5>{item.title.substring(0,25)}</h5>
                        <Row>
                            <Col md={6} xs={6}>
                                <FontAwesomeIcon icon={faStar} />
                            </Col>
                            <Col md={6} xs={6}>2</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            )}
            </Row>
        </div>
        )
    }
}


const styles = {
    cardMenu : {
        marginBottom : 30,
        outline:'none',
        border:'none',
    }
}