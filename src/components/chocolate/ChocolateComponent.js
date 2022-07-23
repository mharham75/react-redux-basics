import React from 'react'
import { connect } from 'react-redux'

import { buyChocolate } from '../../redux/chocolate/ChocolatesAction'

import "./ChocolateStyle.css"

const ChocolateComponent = ({numberOfChocolates, buyChocolate}) => {
  return (
    <>
        <p>Number Of Chocolates - {numberOfChocolates}</p>
        <input className="input" type="text" placeholder="enter no of chocolates"/>
        <button>Click to buy Chocolate!</button>
    </>
  )
}

const mapStateToProps = state => {
    return{
        numberOfChocolates: state.chocolate.numOfChocolates
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCholocate: () => dispatch(buyChocolate())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChocolateComponent)