import React from 'react';
import './Services.css';
import fluride from '../../../images/fluride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/tooth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
  const serviceData = [
    {
      title: 'Fluride Treatment',
      photo: fluride,
    },
    {
      title: 'Cavity Filling',
      photo: cavity,
    },
    {
      title: 'Teath Whitening',
      photo: tooth,
    },
  ];
  return (
    <section className='services-container mt-4'>
      <div className='text-center'>
        <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='w-75 row mt-5 pt-3'>
          {serviceData.map((service) => (
            <ServiceDetails service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
