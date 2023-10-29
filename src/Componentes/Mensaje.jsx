
import React from "react";
import Alert from "react-bootstrap/Alert"

    const textMensaje= ""
    const Mensaje = ({variant,textMensaje}) =>{
    
    return(
        <>
        <Alert variant={variant}>{textMensaje}</Alert>
        </>
    
    )
}
export default Mensaje;