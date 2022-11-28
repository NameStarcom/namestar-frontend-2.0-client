import React from 'react';
import Sticky from 'react-sticky-el';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Hero from '../components/ui/Home/Hero';
import Domains from '../components/ui/Domains';
import Benefits from '../components/ui/Benefits';
import Testimonials from '../components/ui/Testimonials';
import Faq from '../components/ui/Faq';
import Logos from '../components/ui/Logos';

export default function landing() {
    return (
        <>
            <div className="-mb-[88px]">
                <Sticky topOffset={-160} stickyClassName="z-10">
                    <Header />
                </Sticky>
            </div>
            <Hero />
            <Logos />
            {/* <Domains /> */}

            {/* <Faq /> */}

            {/* <Benefits /> */}
            {/* <Testimonials /> */}
            <Footer />
        </>
    );
}
