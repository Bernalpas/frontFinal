
import React from 'react';
import { Card, Button } from 'react-bootstrap';


const Tarjetas = ({characters}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ characters.image } />
            <Card.Body>
                <Card.Title>{ characters.name }</Card.Title>
                    <Card.Text>
                        <span>Gender: { characters.gender }</span>
                        <span>Status: { characters.status }</span>
                        <span>Species: { characters.species }</span>
                    </Card.Text>
                <Button variant="primary">Tarjetas</Button>
            </Card.Body>
        </Card>
    )
}

export default Tarjetas;
