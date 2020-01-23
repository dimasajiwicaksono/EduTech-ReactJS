import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Header from '../Components/Header';
import SliderArea from '../Components/SliderArea';
import Description from '../Components/Description';
import NavCategory from '../Components/NavCategory';
import CardItem from '../Components/Content/CardItem';
import Banner from '../Components/Content/Banner'


import '../Style/Home.scss'
// <---CSS React FrameWork -->
// import { Components } from 'react-bootstrap';

// <---connect react-redux--->
// import { connect } from 'react-redux';



class Home extends Component {
    render() {
        return (
            <>
            <div>
                <Header />
                <SliderArea />
                <Description />
                <br/>
                <NavCategory />
                <br/>  
                <CardItem />
                <div className='btn-more'>
                    <Button className='btn-more'>More Course</Button>
                </div>
                <Banner />
            </div>
            </>
        )
    }
}




export default Home;


// <---Initialization state from redux store--->
// const mapStateToProps = (state) => {
//     return {
//         name: state.stateFromStore,
//     }
// }


// <--- dispatching/trigger signal to redux Actions -->
// const mapDispacthToProps = (dispatch) => {
//     return {
//         name: () => dispatch(funcNameFromActions()),
//     }
// }

// <--- connect all redux func to component -->
// export default connect(
//     mapStateToProps,
//     mapDispacthToProps
// )
//      (Home)



