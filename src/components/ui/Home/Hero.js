import React, { useRef, useEffect } from 'react';

export default function Hero() {
    const ref = useRef(null);

    useEffect(() => {
        // 👇️ use a ref (best)
        const el2 = ref.current;

        // 👇️ use document.getElementById()
        // should only be used when you can't set a ref prop on the element
        // (you don't have access to the element)
        const stars = document.getElementById('stars');
        const starsCtx = stars.getContext('2d');

        let screen,
            starsElements,
            starsParams = { speed: 2, number: 200, extinction: 2 };

        setupStars();
        updateStars();
        // setup <canvas>, create all the starts
        function setupStars() {
            screen = {
                w: window.innerWidth,
                h: window.innerHeight,
                c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
            };
            window.cancelAnimationFrame(updateStars);
            stars.width = screen.w;
            stars.height = screen.h;
            starsElements = [];
            for (let i = 0; i < starsParams.number; i++) {
                starsElements[i] = new Star();
            }
        }

        // redraw the frame
        function updateStars() {
            starsCtx.fillStyle = 'black';
            starsCtx.fillRect(0, 0, stars.width, stars.height);
            starsElements.forEach(function (s) {
                s.show();
                s.move();
            });
            window.requestAnimationFrame(updateStars);
        }
        function Star() {
            this.x = Math.random() * stars.width;
            this.y = Math.random() * stars.height;
            this.z = Math.random() * stars.width;

            this.move = function () {
                this.z -= starsParams.speed;
                if (this.z <= 0) {
                    this.z = stars.width;
                }
            };

            this.show = function () {
                let x, y, rad, opacity;
                x = (this.x - screen.c[0]) * (stars.width / this.z);
                x = x + screen.c[0];
                y = (this.y - screen.c[1]) * (stars.width / this.z);
                y = y + screen.c[1];
                rad = stars.width / this.z;
                opacity = rad > starsParams.extinction ? 1.5 * (2 - rad / starsParams.extinction) : 1;

                starsCtx.beginPath();
                starsCtx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';
                starsCtx.arc(x, y, rad, 0, Math.PI * 2);
                starsCtx.fill();
            };
        }
    }, []);

    return (
        <div>
            <canvas className="w-full absolute h-screen" id="stars" ref={ref}></canvas>
            <section className="relative py-20 2xl:py-[14rem] overflow-hidden h-screen">
                <div className="relative container px-4 py-4 mx-auto">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="mt-12 mb-14 text-8xl md:text-9xl xl:text-10xl font-bold font-heading text-white leading-none">
                            Your compass to find exclusive domains in the digital space
                        </h2>
                        <div className="max-w-xl mb-8 mx-auto sm:flex sm:items-center sm:bg-white sm:rounded-full">
                            <span className="hidden sm:inline-block pl-6 lg:pl-10">
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fillOpacity="0.15"></circle>
                                    <circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fillOpacity="0.06"></circle>
                                    <circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle>
                                </svg>
                            </span>
                            <input
                                className="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 rounded-full placeholder-gray-900 font-bold focus:outline-none"
                                type="email"
                                placeholder="Search domains for sale"
                            />
                            <button className="w-full sm:w-auto ml-auto px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">
                                Search
                            </button>
                        </div>
                        <p className="text-gray-300">
                            <span>50.000+ domains from first hand</span>
                            <span className="text-white"> without a middle man.</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
