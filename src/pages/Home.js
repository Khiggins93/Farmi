//rfc: Creates a React Functional Component
import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';


//
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner
                    title="FARMi bot"
                    subtitle="FARMi, your allied robot for agriculture">
                    <Link to="/drive" className="btn-primary">
                        control farmi
                    </Link>
                </Banner>
            </Hero>
            <Services/>

        </>
    )
}
