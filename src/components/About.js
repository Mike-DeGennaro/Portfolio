import React, {useEffect} from 'react';
import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About(){
    useEffect(() => {
        Aos.init({duration: 2000,
        once:false,
    mirror:true});
      }, []);

return(
<div className='mummy' id='abSec'>
<div className='about_container'>
<div data-aos='fade-left' className='label'>
<p className='who'>Who am I?</p>

</div>
<div data-aos='fade-right' className='gradient-border'>
    Hey, my name's Mike DeGennaro. Ever since I was a child, I've had an itch for creation.
        Naturally, I became drawn to building functional, seamless, and easy to look at webpages 
        and applications. I am proficient in languages and frameworks such as Java, Javascript,
        HTML, CSS, React, and Node. However, I believe my strongest asset is my ability to problem
        solve and tackle complications from many different angles. I look foward to utilizing my skills
        and having the chance to grow my skillset in the professional environment.
    
</div>

</div>

</div>
)}
export default About;