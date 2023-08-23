import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';




const Formulario = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [contraseña2, setContraseña2] = useState("");
    const [erro, setError] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorContraseña, setErrorContraseña] = useState('');
    


    const handleSubmit = (e) => {
        e.preventDefault();
    
        
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || email === "" || contraseña === "" || contraseña2 === "" ){  
        setError
        alert("Todos los campos son obligatorios");
        return;
    }else{
        setError('');
    }


    if (!emailRegex.test(email)) {
        setErrorEmail
        alert('Ingrese un correo electrónico válido');
        return;
    } else {
        setErrorEmail('');
    }
    
    
    
    if (contraseña !== contraseña2) {
        setErrorContraseña
        alert('Las contraseñas no coinciden');
        return;
    } else {
        setErrorContraseña('');
    }
    
    alert('Formulario enviado:', { nombre, email, contraseña });
    
        
        setNombre('');
        setEmail('');
        setContraseña('');
        setContraseña2('');
    };



    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label><h5><strong>Nombre</strong></h5></Form.Label>
                    <Form.Control 
                    name ='nombre' 
                    placeholder='Ingrese su Nombre'
                    value = {nombre}
                    onChange={(e) => setNombre(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label><h5><strong>Email</strong></h5></Form.Label>
                    <Form.Control
                    name ='email' 
                    placeholder='Ingrese su Email'
                    value= {email}
                    onChange={(e) => setEmail(e.target.value )}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label><h5><strong>Contraseña</strong></h5></Form.Label>
                    <Form.Control 
                    name ='contraseña' 
                    placeholder='Ingrese su Contraseña'
                    value = {contraseña}
                    type="password"
                    onChange={(e) => setContraseña(e.target.value )}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label><h5><strong>Confirme Contraseña</strong></h5></Form.Label>
                    <Form.Control 
                    name ='contraseña2' 
                    placeholder='Reingrese Contraseña'
                    value ={contraseña2} 
                    type="password"
                    onChange={(e) => setContraseña2(e.target.value )}/>  
                    {errorContraseña && <p className="error-text">{errorContraseña}</p>}
                </Form.Group>
                <Button className='btn1' type="submit">Enviar</Button>
            </Form>
        </>
    )
}

export default Formulario;