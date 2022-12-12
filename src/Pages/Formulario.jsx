
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const Formulario = () => {

    //api de la database
    //const URL = 'http://localhost:3001/crear';//variable local

    const URL = 'https://backfinal-production-25c6.up.railway.app/crear'; //variable procucción

    //inicializamos variables vacías para el useState
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        dni:""
    })

    //función para setear las variables
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    //función del post
    const handleClick = async () => {
        await axios.post(URL, inputs)//enviamos datos
        setInputs({//limpiamos los inputs
            nombre: "",
            apellido: "",
            dni:""
        })
    }


    return (
        <div className='section m-5'>
            <h2>
                Formulario Page
            </h2>
                {Object.keys(inputs).map((key, index) => (
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label id="form">
                            {key}
                        </Form.Label>
                        <Form.Control 
                            name={key}
                            value={inputs[key]}
                            onChange={handleChange}
                        />
                    </Form.Group>
                ))}

                <div className="text-center w-100">
                    <Button variant="primary" type="submit" onClick={handleClick}>
                        Enviar Datos
                    </Button>
                </div>
        </div>
    )
}




export default Formulario;