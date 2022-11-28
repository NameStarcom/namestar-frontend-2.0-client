import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import FavoriteCardIcon from '../../molecules/Favorite/FavoritesCardIcon';
import { Grid } from '@splidejs/splide-extension-grid';
import Price from '../../atoms/Price';
import _ from 'lodash';

export default function slider(props) {

    const currentYear = new Date().getFullYear();

    const woisData = (name) => {
        const w = _.get(props.whois, name);
        if (w) {
            return w.error ? 'Whois Error' : <p>{currentYear - Number(_.split(w.creationDate, '-', 1))} Years</p>;
        }
        return 'Pending';
    };

    return (
        <Splide
            Extensions={{ Grid }}
            renderControls={() => (
                <div class="hidden lg:items-center lg:justify-end lg:space-x-3 lg:flex splide__arrows absolute top-[-2rem] right-0">
                    <div className=" splide__arrow--prev" role="button">
                        <button type="button" class="p-1.5 -m-1.5 text-gray-500 transition-all duration-200 rounded-full hover:text-gray-600 hover:bg-gray-100">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="splide__arrow--next" role="button">
                        <button type="button" class="p-1.5 -m-1.5 text-gray-500 transition-all duration-200 rounded-full hover:text-gray-600 hover:bg-gray-100">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            options={{
                rewind: true,
                gap: '1rem',
                perPage: 5,
                type: 'loop',
                drag: true,
                pagination: false,
                autoStart: true,
                autoplay: 'play',
                autoScroll: {
                    speed: 2
                },
                grid: {
                    // You can define rows/cols instead of dimensions.
                    dimensions: [[2, 1]],
                    gap: {
                        row: '1rem'
                    }
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
            {_.map(props.domains, (d) => (
                <SplideSlide key={d.id}>
                    <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
                        <Link href={`/domain/${d.name.toLowerCase()}`}>
                            <a
                                title=""
                                class="
                                    absolute
                                    z-20
                                    items-center
                                    justify-center
                                    top-[18px]
                                    left-[14px]
                                    px-2
                                    text-[10px]
                                    font-semibold
                                    transition-all
                                    duration-200
                                    text-white
                                    rounded-lg
                                    border-neutral
                                    sm:leading-8
                                    hover:bg-white hover:text-black hover:border-primary
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                                "
                                role="button"
                            >
                                .{_.split(d.name.toUpperCase(), '.')[1]}
                            </a>
                        </Link>
                        <div className="text-xl cursor-pointer absolute top-[18px] right-[18px] z-20">
                            <FavoriteCardIcon name={d.name} id={d.name} price={d.price} slug={d.name} />
                        </div>
                        {/* <FaRegStar className="text-xl cursor-pointer absolute top-[14px] right-4 h-4 w-4 z-20" /> */}
                        <Link href={`/domain/${d.name.toLowerCase()}`}>
                            <a className="m-3 mb-0 rounded-md overflow-hidden">
                                <img
                                    class="flex shrink-0 aspect-w-4 aspect-h-3 h-[100px] object-cover w-full transition-all duration-200 transform scale-110  group-hover:scale-140 filter brightness-[.8]"
                                    src={`https://landingfoliocom.imgix.net/store/collection/niftyui/images/authors/4/cover-${
                                        Math.floor(Math.random() * 10) + 1
                                    }.png`}
                                    alt=""
                                />
                            </a>
                        </Link>
                        <Link href={`/domain/${d.name.toLowerCase()}`} class="flex-1 px-4 sm:p-4">
                            <a title="" class="">
                                <p class="text-2xl font-extrabold text-white absolute top-[46px] left-0 right-0 text-center tracking-[4px]">
                                    {_.split(d.name.toUpperCase(), '.')[0]}
                                </p>
                                <p class="text-base font-bold text-gray-900 w-full text-center mt-4">{d.name.toLowerCase()}</p>
                                <p class="text-sm font-normal leading-6 text-gray-500 line-clamp-3 flex justify-center py-3">
                                    <p className="mr-1">Age:</p>
                                    {woisData(d.name.toLowerCase())}
                                </p>
                            </a>
                        </Link>
                        <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <p class="text-sm font-medium text-gray-900">
                                        <Link href={`/domain/${d.name.toLowerCase()}`}>
                                            <a title="" class="">
                                                {d.price > 0.1 ? (
                                                    <p>
                                                        <Price postPrice={d.price} /> USD
                                                    </p>
                                                ) : (
                                                    'Make offer'
                                                )}
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                                <Link href={`/domain/${d.name.toLowerCase()}`}>
                                    <a title="" class="" role="button">
                                        <svg
                                            class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <line x1="17" y1="7" x2="7" y2="17"></line>
                                            <polyline points="8 7 17 7 17 16"></polyline>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    );
}
