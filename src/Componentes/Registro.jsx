import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Registro= () => {
    
    return(
        <>
        <div className='social' style={{ margin: "10px" }}>
        <SocialButton iconName="facebook" size="30px" color="blue" />
        <SocialButton iconName="github" size="30px" color="yellow" />
        <SocialButton iconName="linkedin" size="30px" color="#0077B5" />
        </div>
        <Formulario/>
        </>
    )
}

export default Registro;