import React, { useEffect, useState } from 'react';
import CardContent from './CardContent';
import './Cards.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards(){
    useEffect(() => {
        Aos.init({duration: 2000,
        once:false,
    mirror:true});
      }, []);
  
    return(

        <div className='cards' id='proj'>
            <h1 data-aos="fade-up">Heres some stuff I made</h1>
            <div className='cards__container'>
                <div  className='cards__wrapper'>
                    <ul 
                     className='cards__items'>
                         <div data-aos="fade-up" data-aos-mirror="true">
                        <CardContent
                        src='../img-9.jpg'
                        text='Wipe my butt for me, im paralyzed'
                        label='I have no clue'
                        path='/'
                        /></ div>
                        <div data-aos="fade-up"     data-aos-mirror="true">
                        <CardContent
                        src='../img-9.jpg'
                        text='Wipe my butt for me, im paralyzed'
                        label='I have no clue'
                        path='/'
                        /></ div>
                        <div data-aos="fade-up"     data-aos-mirror="true">
                        <CardContent
                        src='../img-9.jpg'
                        text='Wipe my butt for me, im paralyzed'
                        label='I have no clue'
                        path='/'
                        /></ div>
                        <div data-aos="fade-up"     data-aos-mirror="true">
                        <CardContent
                        src='../img-9.jpg'
                        text='Wipe my butt for me, im paralyzed'
                        label='I have no clue'
                        path='/'
                        /></ div>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards;