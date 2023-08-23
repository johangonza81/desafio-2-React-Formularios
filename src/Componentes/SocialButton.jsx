import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButton = ({iconName,size,color}) => {
    const IconComponent = (props) => {
        switch (iconName) {
          case 'facebook':
            return <FaFacebook {...props} />;
          case 'github':
            return <FaGithub {...props} />;
          case 'linkedin':
            return <FaLinkedin {...props} />;
          default:
            return null;
        }
      };
    
      return (
        <div className='social' style={{ margin: "10px" }}>
          <IconComponent size={size} color={color} />
        </div>
      );
    };
    
    export default SocialButton;
   