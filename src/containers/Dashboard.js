import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
// import { removeCar } action here
import { removeCar } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => ({
    removeCar: (index) => dispatch(removeCar(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)