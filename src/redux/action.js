export const ADD_CAR = 'ADD_CAR'
export const REMOVE_CAR = 'REMOVE_CAR'

export const addCar = (car) => {
    return {
        type: ADD_CAR, 
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: REMOVE_CAR, 
        value: index
    }
}
