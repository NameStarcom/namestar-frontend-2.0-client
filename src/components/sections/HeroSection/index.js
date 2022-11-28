import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { HiSearch } from 'react-icons/hi';
import isMobile from 'ismobilejs';
import Testimonials from '../../ui/Testimonials'

export default function HeroSection(props) {
    
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    const sectionFlexDirection = sectionStyles.flexDirection || 'row';
    const sectionAlignItems = sectionStyles.alignItems || 'center';
    // const [LazyComponent, setLazyComponent] = useState(null);
    // const loadLazyComponent = async () => {
    //     if (LazyComponent !== null) {
    //         return;
    //     }
    //     // import default export of `lazy.js` module
    //     const { default: lazyModule } = await import('../../molecules/TextTransition');
    //     // create React component so it can be rendered
    //     const LazyElement = React.createElement(lazyModule, {
    //         list: ['Business', 'Company', 'Startup']
    //     });
    //     setLazyComponent(LazyElement);
    // };

    // useEffect(() => {
    //     setTimeout(() => {
    //         loadLazyComponent();
    //     }, 50);
    // }, []); //eslint-disable-line

    // Search keyword forward:

    const [searchInput, setSearchInput] = useState('');
    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    }

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/search',
            query: { name: searchInput }
        });
    };

    const keyRef = useRef(null);

    const handleKeypress = (e) => {
        if (e.key === 'Enter') {
            keyRef.current.click();
        }
    };
    const styles = props.styles || {};

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
            starsParams = { speed: isMobile().any ? 0.5 : 2, number: isMobile().any ? 100 : 200, extinction: 2 };

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
                rad = isMobile().any ? stars.width / this.z / 2 : stars.width / this.z;
                opacity = rad > starsParams.extinction ? 1.5 * (2 - rad / starsParams.extinction) : 1;

                starsCtx.beginPath();
                starsCtx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';
                starsCtx.arc(x, y, rad, 0, Math.PI * 2);
                starsCtx.fill();
            };
        }
    }, []);

    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-hero-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                // 'from-[#09e9f1]',
                // 'to-[#ffe999]',
                // 'bg-gradient-to-br',
                mapMinHeightStyles(sectionHeight),
                sectionStyles.margin,
                sectionStyles.padding || 'py-12 px-4',
                sectionStyles.borderColor,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null
            )}
            style={{
                borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
            }}
        >
            {/* <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    <div
                        className={classNames('flex', mapFlexDirectionStyles(sectionFlexDirection), mapStyles({ alignItems: sectionAlignItems }), 'space-y-8', {
                            'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row',
                            'space-y-reverse lg:space-y-0 lg:space-x-8 lg:space-x-reverse': sectionFlexDirection === 'row-reverse',
                            'space-y-reverse': sectionFlexDirection === 'col-reverse'
                        })}
                    >
                        <div className="flex-1 w-full">
                            {props.title && (
                                <h1
                                    className={classNames(
                                        'text-4xl text-base-content tracking-tight font-extrabold sm:text-5xl md:text-6xl text-center',
                                        styles.title ? mapStyles(styles.title) : null,
                                        { 'mt-4': props.badge?.label }
                                    )}
                                    data-sb-field-path=".title"
                                >
                                    {props.title}
                                    <span className="ml-4 text-primary">{LazyComponent}</span>
                                </h1>
                            )}
                            {props.subtitle && (
                                <p
                                    className={classNames('text-xl', 'text-center', 'w-[80%]', 'm-auto', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                                        'mt-8': props.title
                                    })}
                                    data-sb-field-path=".subtitle"
                                >
                                    {props.subtitle}
                                </p>
                            )}
                            <div className="flex items-start w-full my-8 lg:mx-auto lg:justify-center lg:w-2/3 relative">
                                <div className="text-left w-full">
                                    <div className="absolute top-5 bottom-0 left-3 z-10">
                                        <HiSearch className="dark:text-gray-400 text-3xl cursor-pointer" />
                                    </div>
                                    <input
                                        onChange={handleSearchInput}
                                        onKeyPress={handleKeypress}
                                        placeholder="Search domain"
                                        type="text"
                                        id="hero-field"
                                        name="hero-field"
                                        className="shadow-lg flex-grow w-full px-12 py-5 mb-4 text-black transition duration-650 ease-in-out transform rounded-lg bg-base-100 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 md:text-lg md:px-12 dark:bg-base-100"
                                    ></input>
                                    <div ref={keyRef}>
                                        <Link href="/search">
                                            <a ref={keyRef} onClick={handleClick} className="absolute right-2 top-2 md:top-2.5 btn min-h-12 text-md px-6">
                                                Search
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <canvas className="w-full absolute top-0 h-screen" id="stars" ref={ref}></canvas>
            <section className="relative py-20 2xl:py-[14rem] overflow-hidden h-screen">
                <div className="relative container px-4 py-4 mx-auto">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2
                            className="mt-12 mb-14 text-8xl md:text-9xl xl:text-10xl font-bold font-heading text-white leading-none"
                            data-sb-field-path=".title"
                        >
                            {props.title}
                        </h2>
                        {/* <div className="max-w-xl mb-8 mx-auto sm:flex sm:items-center sm:bg-white sm:rounded-full">
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
                                </div> */}
                        <div className="relative max-w-xl mx-auto my-8">
                            <div className="absolute -inset-2">
                                <div
                                    className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                                    style={{
                                        background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                    }}
                                ></div>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    onChange={handleSearchInput}
                                    onKeyPress={handleKeypress}
                                    name=""
                                    id=""
                                    placeholder="Search domains for sale"
                                    className="block w-full px-5 py-6 text-base font-normal text-white placeholder-gray-400 bg-black border border-transparent rounded-xl focus:border-white focus:ring-1 focus:ring-white font-pj focus:outline-none"
                                />

                                <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                                    <Link href="/search">
                                        <a
                                            ref={keyRef}
                                            onClick={handleClick}
                                            className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-full
                                        px-8
                                        py-4
                                        text-base
                                        font-bold
                                        text-gray-900
                                        transition-all
                                        duration-200
                                        bg-white
                                        border border-transparent
                                        sm:py-3 sm:w-auto
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                                        font-pj
                                        hover:bg-opacity-90
                                        rounded-xl
                                    "
                                        >
                                            Search
                                        </a>
                                    </Link>
                                </div>
                            </div>
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

function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}
