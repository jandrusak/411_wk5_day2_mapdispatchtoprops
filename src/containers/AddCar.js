// import React from "react"
import { connect } from 'react-redux'
import { addCar } from "../redux/action"
import AddCar from '../components/AddCar'

const mapDispatchToProps = (dispatch, props) => {
    return {
        addCar: (car) => dispatch(addCar(car))
    }
}

export default connect(null, mapDispatchToProps)(AddCar);
