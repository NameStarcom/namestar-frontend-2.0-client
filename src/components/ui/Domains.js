import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Domains() {
    return (
        <section>
            <Splide
                options={{
                    rewind: true,
                    gap: '0.5rem',
                    perPage: 4,
                    type: 'loop',
                    drag: true,
                    pagination: false,
                    // autoStart: true,
                    // autoplay: 'play',
                    focus: 'center',
                    flickMaxPages: 3,
                    updateOnMove: true,
                    pagination: false,
                    // padding: '10%',
                    throttle: 300,
                    autoScroll: {
                        speed: 2
                    },
                    breakpoints: {
                        640: {
                            perPage: 1
                        },
                        767: {
                            perPage: 2
                        },
                        1024: {
                            perPage: 3
                        }
                    }
                }}
            >
                <SplideSlide>
                    <li className="splide__slide">
                        <img src="https://brandontran.com/images/cardboard-castle-10.jpg" />
                    </li>
                </SplideSlide>
                <SplideSlide>
                    <li className="splide__slide">
                        <img src="https://brandontran.com/images/cardboard-castle-10.jpg" />
                    </li>
                </SplideSlide>
                <SplideSlide>
                    <li className="splide__slide">
                        <img src="https://brandontran.com/images/cardboard-castle-10.jpg" />
                    </li>
                </SplideSlide>
                <SplideSlide>
                    <li className="splide__slide">
                        <img src="https://brandontran.com/images/cardboard-castle-10.jpg" />
                    </li>
                </SplideSlide>
            </Splide>
        </section>
    );
}
