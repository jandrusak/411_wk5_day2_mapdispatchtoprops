import React from 'react'
import { Container, Paper, Chip } from '@mui/material';
import {useParams} from 'react-router-dom'

const Car = (props) => {
    // const id = props.match.params.id
    const {id} = useParams()
    console.log(id)
    {/* Change cars to props.cars and remove the cars.json import above */}
    const car = props.cars.find(c => c.id == id)
    if (!car) {
        return  (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>Error: Car not found</h2>
                </Paper>
            </Container>
        );
        }
        
        return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.name}</h2>
                {Object.keys(car).map((key, idx) => (
                    <Chip key={idx} label={`${key}: ${car[key]}`}></Chip>
                ))}
            </Paper>
        </Container>
        )
                }

export default Car;