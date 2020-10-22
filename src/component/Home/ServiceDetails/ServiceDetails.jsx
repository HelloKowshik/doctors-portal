import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img src={service.photo} alt="Dynamic" height='50px'/>
            <h5 className='mb-3 mt-3'>{service.title}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea quasi, ipsa eligendi cupiditate deserunt?</p>
        </div>
    );
};

export default ServiceDetails;