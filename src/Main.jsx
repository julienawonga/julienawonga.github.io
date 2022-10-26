/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box } from '@mui/material'
import React from 'react'
import Home from './Home'


import Css from './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

export default function Main() {

    const ref = React.useRef(null);
    const ref_links = React.useRef(null);

    const [current, setCurrent] = React.useState(Home);

    function moveLight({ offsetLeft, offsetWidth }) {
        ref.current.style.left = `${offsetLeft - offsetWidth / 4}px`;
    }
    function activeLink(linkActive) {
        Array.from(ref_links.current.children).forEach(link => {
            link.classList.remove("active");
        })
       linkActive.classList.add('active');
    }
    const handlClick = (e) => {
        moveLight(e.target);
        activeLink(e.target.parentElement.parentElement);

        switch (e.target.classList[1]) {
            case 'bx-user':
                setCurrent(About);
                break;
            case 'bx-home-alt-2':
                setCurrent(Home);
                break;
            case 'bx-library':
                setCurrent(Projects);
                break;
            case 'bx-grid':
                setCurrent(Skills);
                break;
            case 'bx-mail-send':
                setCurrent(Contact);
                break;
            default:
                setCurrent(Home);
        }
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
                    <a href="#"><i className="bx bx-user"></i></a>
                </li>
                <li className="nav__link">
                    <a href="#"><i className="bx bx-grid"></i></a>
                </li>
                <li className="nav__link">
                    <a href="#"><i className="bx bx-library"></i></a>
                </li>
                <li className="nav__link">
                    <a href="#"><i className="bx bx-mail-send"></i></a>
                </li>
                <div className="nav__light" ref={ref}></div>
            </ul>
        </nav>
        { current }
    </Box>
  )
}