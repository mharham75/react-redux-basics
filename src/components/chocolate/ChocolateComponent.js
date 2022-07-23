import React, {useState} from 'react'
import { connect } from 'react-redux'

import { buyChocolate } from '../../redux/chocolate/ChocolatesAction'

import "./ChocolateStyle.css"

const ChocolateComponent = ({numberOfChocolates, buyCholocate}) => {

    const[number,setNumber] = useState(1)

  return (
    <>
        <p>Number Of Chocolates - {numberOfChocolates}</p>
        <input className="input" type="text" placeholder="enter no of chocolates"
            onChange={ e => setNumber(e.target.value)}
        />
        <button onClick={ () => buyCholocate(number)}>Click to buy {number} Chocolate!</button>
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
        buyCholocate: number => dispatch(buyChocolate(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChocolateComponent)