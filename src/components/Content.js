import React from 'react';
import imgone from '../images/lunch3.jpg'
import imgtwo from '../images/lunch5.jpg'
const Content = () => {
    return (
        <>
            <div className='content-card'>
                <img src={imgone} alt="imageOne" className="h-full rounded mb-20 shadow" />
                <div className='flex flex-col justify-center items-center'>
                    <h2 className="text-2xl mb-2">Egg Maffins</h2>
                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <span>$16</span>
                </div>
            </div>
            <div className='content-card'>
                <img src={imgtwo} alt="imgtwo" className="h-full rounded mb-20 shadow" />
                <div className='flex flex-col justify-center items-center'>
                    <h2 className="text-2xl mb-2">Egg Maffins</h2>
                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <span>$16</span>
                </div>
            </div>
        </>
    );
};

export default Content;