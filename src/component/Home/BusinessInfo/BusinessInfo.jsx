import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {
  faClock,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
  const infoData = [
    {
      title: 'Opening Hours',
      description: 'We are open 7 days',
      background: 'primary',
      icon: faClock,
    },
    {
      title: 'Visit Our Location',
      description: 'Chittagong,Muradpur,Bangladesh 4209',
      background: 'dark',
      icon: faMapMarker,
    },
    {
      title: 'Call Us Now',
      description: '01911 112233',
      background: 'primary',
      icon: faPhone,
    },
  ];
  return (
    <section className='d-flex justify-content-center'>
      <div className='w-75 row'>
        {infoData.map((info) => (
          <InfoCard info={info} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
