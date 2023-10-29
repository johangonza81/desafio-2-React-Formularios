import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Mensaje from './Mensaje';
import { useState } from 'react';




const Formulario = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [contraseña2, setContraseña2] = useState("");
    const [alerta, setAlerta] = useState({tipo:null, mensaje:''})
    


    const handleSubmit = (e) => {
        e.preventDefault();

    
        
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    


    
    if (nombre === "" || email === "" || contraseña === "" || contraseña2 === "" ){  
        setAlerta({tipo:'danger', mensaje:'Todos los campos son obligatorios'})
        return;
    }
        
    if(!emailRegex.test(email)) {
        setAlerta({tipo:'danger', mensaje:'Ingrese un correo electrónico válido'})
        return; 
    }
       
    if(setContraseña !== setContraseña2){
        setAlerta({tipo:'danger', mensaje:'Contraseñas no Coinciden'})
       
    }
        
    setAlerta({tipo:'primary', mensaje:'Formulario Enviado'})    
    
        setNombre('');
        setEmail('');
        setContraseña('');
        setContraseña2('');

       

    }    
    
    

    
    
        
        
        
    

   




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
                    
                </Form.Group>
                <Button className='btn1' type="submit">Enviar</Button>
                {alerta.tipo && <Mensaje variant={alerta.tipo} textMensaje={alerta.mensaje}/>}
            </Form>
        </>
    )
}


export default Formulario;