import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Mensaje from './Mensaje';
import { useState } from 'react';




const Formulario = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [contraseña2, setContraseña2] = useState("");
    const [error, setError] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorContraseña, setErrorContraseña] = useState(false);
    const [registroExitoso, setRegistroExitoso ] = useState(false);
    


    const handleSubmit = (e) => {
        e.preventDefault();

    
        
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    
    if (nombre === "" || email === "" || contraseña === "" || contraseña2 === "" ){  
        setError(true)
        return;
    }else{
        setError(false)    
    }
        
    if(!emailRegex.test(email)) {
        setErrorEmail(true)
        return;
    }else{
        setErrorEmail(false)
        
    }
       
        
    if(setContraseña === setContraseña2){
        setErrorContraseña(false)
        
    }else{

        setErrorContraseña(true)
        return;
    }
    
    if ((nombre === "" || email === "" || contraseña === "" || contraseña2 === "" ) || (!emailRegex.test(email)) || (setContraseña === setContraseña2)){
        setRegistroExitoso(true)
        return;
    }else { 
        setRegistroExitoso(false)
    }

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
                {error ?
                <Mensaje variant={"danger"} textMensaje={"Todos los campos son obligatorios"}/> :null}
                {errorEmail ?
                <Mensaje variant={"danger"} textMensaje={"Ingrese un correo electrónico válido"}/> :null}
                {errorContraseña ?
                <Mensaje variant={"danger"} textMensaje={"Las contraseñas no coinciden"}/> :null}
                {registroExitoso?
                <Mensaje variant={"primary"} textMensaje={"Formulario Enviado"}/> :null}
            </Form>
        </>
    )
}


export default Formulario;