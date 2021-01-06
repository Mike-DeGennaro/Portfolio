import React, { useEffect, useState } from 'react';
import { Link} from 'react-scroll';
import './HeroSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HeroSection(){
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

return(
  
    <div className="hero-container" id='home'>
<p id='head1' className='header' >Hey, my name's Michael DeGennaro.</p>
<p id='head2' className='header'>I'm a web developer.</p>
<Link className="box"
to='proj'
spy={true}
smooth={true}
offset={-70}
duration={500}>
		<span></span>
		<span></span>
		<span></span>
	  </Link>
  <div className='light x1'></div>
  <div className='light x2'></div>
  <div className='light x3'></div>
  <div className='light x4'></div>
  <div className='light x5'></div>
  <div className='light x6'></div>
  <div className='light x7'></div>
  <div className='light x8'></div>
  <div className='light x9'></div>
    </div>
)
}
export default HeroSection;