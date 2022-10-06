import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Typography } from '@mui/material';

export default function Typing() {
  
   const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a Data scientist Enthusiast', 'I am a machine learning aspiring', 'I am Web Developer', 'I am a Software Engineer', 'I am a Full Stack Developer'], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
        <Typography
            variant='h2'
            fontSize={{xs: 20, md: 30}}
            marginBottom='10px'
            marginTop='10px'
            color="#fff" 
            ref={el}
        >
        </Typography>
  );
}