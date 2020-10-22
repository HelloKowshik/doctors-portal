import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import doctor from '../../../images/doctor-sm.png'
const Doctors = () => {
    const doctors = [
        {
            name: 'Dr. John Doe',
            photo: doctor,
            phone: '+880-188-934789'
        },
        {
            name: 'Dr. Alex Moxley',
            photo: doctor,
            phone: '+880-188-934789'
        },
        {
            name: 'Dr. Sinthia Saha',
            photo: doctor,
            phone: '+880-188-934789'
        }
    ]

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                     doctors.map((doctor,i) =><Doctor key={i} doctor={doctor} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;