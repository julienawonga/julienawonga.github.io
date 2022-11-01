import React from 'react';

import { Box, Link, Typography } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import Typing from './Typing'
import frontxs from './images/font.svg'

const Home = () => {
    return (
        <>
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
                
            </Box>
        </Box>
        </>
    );
}

export default Home;
