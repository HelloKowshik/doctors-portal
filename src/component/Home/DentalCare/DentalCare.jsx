import React from 'react';
import dentalCare from '../../../images/dentalCare.png';

const DentalCare = () => {
    return (
        <section className='d-flex justify-content-center mt-5 pt-5'>
            <div className="w-75 row">
            <div className="col-md-4">
                    <img src={dentalCare} className='img-fluid' alt="Dental Care" height='400px' style={{borderRadius:'1px'}}/>
        </div>
        <div className="col-md-7 align-self-center">
            <h2 className='mb-5 mt-3'>Exceptional Dental Care,On Your Terms</h2>
            <p className='text-secondary mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel cum alias eius laborum delectus magnam quidem perspiciatis suscipit enim aliquam reiciendis animi quis obcaecati, rem commodi, facere tempore veritatis laudantium veniam numquam vero amet repudiandae tempora? Reprehenderit non provident, temporibus ad, expedita nisi sapiente iusto voluptates, molestiae corporis a?</p>
            <button className='btn text-white' style={{backgroundColor: '#1CC7C1'}}>Learn More</button>
        </div>
            </div>
        </section>
    );
};

export default DentalCare;