import React from 'react'
import { buyCake } from '../../redux/cake/CakeActions';
import { connect } from 'react-redux';

import "./CakeComponent.css";

const CakeComponent = ({ numberOfCakes, buyCake}) => {
  return (
    <div>
        <p>Number Of Cakes : {numberOfCakes}</p>
        <button onClick={buyCake}>Click to Buy 1 Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numberOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect
    (mapStateToProps,
    mapDispatchToProps
    )(CakeComponent)