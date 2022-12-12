
import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Tarjetas from '../Componentes/Tarjetas';

let nombre = 'pepe';
nombre = 'Rodo';

const Api = () => {
    
    const [characters, setCharacters] = useState([]);

    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character')//URL del back de mi app deployada
        .then(res => res.json())
        .then(res => setCharacters(res.results))//apuntamos a la data que necesitemos

        //trae todos los datos y después hay que especificar
        /* .then(response => response.json())
        .then(json => setCharacters(json))
        */

    },[])
    
    const handleImprimir = () => {
        console.log('Buenas tardes, soy la función');
        console.log(characters);
        //console.log(characters.results); //en caso de traer todos los datos
    };

    return (
        <div className='section m-5'>
            <hr></hr>
            <h2>
                Api Page - { nombre }
            </h2>
            <hr></hr>
            <div className='text-center m-4'>
                <Button onClick={ handleImprimir } variant="w-50 m-2 bg-danger">
                    Imprimir en la Consola los Datos
                </Button>
            </div>
            <div>
                <Row>
                    {characters.map((c)=>(
                        <Col key={c.id}>
                            <Tarjetas characters={c} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Api;