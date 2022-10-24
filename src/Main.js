import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import Typing from './Typing'
import frontxs from './images/font.svg'

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Css from './App.css';
import navJs from './navJs';

export default function Main() {

    const ref = React.useRef(null);
    const ref_links = React.useRef(null);

    function moveLight({ offsetLeft, offsetWidth }) {
        ref.current.style.left = `${offsetLeft - offsetWidth / 4}px`;
    }
    function activeLink(linkActive) {
        ref_links.current.forEach((link) => {
            console.log(link);
        });
        
       linkActive.classList.add('active');
    }
    const handlClick = (e) => {
        moveLight(e.target);
        activeLink(e.target.parentElement.parentElement);
    }
  return (
    <Box
        as="main"
        height="100vh"
        display='flex'
        flexDirection='column'
        justifyContent= {{xs:'flex-start', md:'center'}}
        alignItems='center'
        bgcolor='#001e3c'
    >
    <nav className="nav">
        <ul className="nav__links" ref={ref_links} onClick={handlClick}>
            <li className="nav__link active">
                <a href="#"><i className="bx bx-home-alt-2"></i></a>
            </li>
            <li className="nav__link">
                <a href="#"><i className="bx bx-heart"></i></a>
            </li>
            <li className="nav__link">
                <a href="#"><i className="bx bx-plus-circle"></i></a>
            </li>
            <li className="nav__link">
                <a href="#"><i className="bx bx-user"></i></a>
            </li>
            <li className="nav__link">
                <a href="#"><i className="bx bx-bell"></i></a>
            </li>
            <div className="nav__light" ref={ref}></div>
        </ul>
    </nav>

        <Box
            as='div'
            paddingTop={{xs: 10, md: 0}}
        >
            
            <img 
                className='banner'
                width='300px'
                src={frontxs} 
                alt='front' 
            />
        </Box>

        <Box
            as='div'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
        >
            <Typography
                marginTop='30px'
                variant='h2'
                color='#66b2ff'
                fontSize={{xs: 25, md: 40}}
            >
                Julien W. AWONGA (JWA)
            </Typography>
            <Typing />
            <Box
             as='div'
            >
                <Link href='https://github.com/julienawon'underline='none'>
                    <GitHubIcon
                  
                     sx={{ color: '#66b2ff', fontSize:{xs: 40, md: 60}, paddingLeft: {xs: 1, md: 3}  }}
                 />
                </Link>
                <Link href='https://facebook.com/julienawon'underline='none'>
                    <FacebookIcon
                  
                     sx={{ color: '#66b2ff', fontSize:{xs: 40, md: 60}, paddingLeft: {xs: 1, md: 3}  }}
                 />
                </Link>
                <Link href='https://instagram.com/julien.awon'underline='none'>
                    <InstagramIcon
                  
                     sx={{ color: '#66b2ff', fontSize:{xs: 40, md: 60}, paddingLeft: {xs: 1, md: 3}  }}
                 />
                </Link>
                <Link href='https://twitter.com/julienawon'underline='none'>
                    <TwitterIcon
                  
                     sx={{ color: '#66b2ff', fontSize:{xs: 40, md: 60}, paddingLeft: {xs: 1, md: 3}  }}
                 />
                </Link>
                <Link href='https://linkedin.com/in/julienawon'underline='none'>
                    <LinkedInIcon
                  
                     sx={{ color: '#66b2ff', fontSize:{xs: 40, md: 60}, paddingLeft: {xs: 1, md: 3}  }}
                 />
                </Link>
            </Box>
        </Box>
    </Box>
  )
}