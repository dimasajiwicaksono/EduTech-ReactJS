import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import '../Style/Header.scss'

export default class NavCategory extends Component {
 
    render() {
        const categories = [
            { id: 1, name:'All Courses', icon:''},
            {id: 2, name:'Math', icon:''},
            {id:3, name:'Physic', icon:''},
            {id:4, name:'Agriculture', icon:'leaf'},
            {id:4, name:'Art', icon:''}
        ]

        return (
            <div className='container'>
              {categories.map((item,index)=> 
              <Button style={styles.btn}key={index} variant="outline-light" >{item.name}</Button>)}
            </div>
        )
    }
}

const styles = {
    btn : {
        backgroundColor:'transparent',
        color:'black',
        fontWeight:'bold',
        width:'10%',
        height:'10%',
        border:'none',
    }
}