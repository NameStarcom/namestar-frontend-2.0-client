import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import ArrowRightIcon from '../../svgs/arrow-right';
import { Grid } from '@splidejs/splide-extension-grid';
import Price from '../../atoms/Price';
import _ from 'lodash';
import FavoriteCardIcon from '../../molecules/Favorite/FavoritesCardIcon';
import { Alphabet } from '../../molecules/Alphabet';
import { Cover } from '../../molecules/Cover';

export default function List(props) {

    const currentYear = new Date().getFullYear();

    const woisData = (name) => {
        const w = _.get(props.whois, name);
        if (w) {
            return w.error ? 'Whois Error' : <p>{currentYear - Number(_.split(w.creationDate, '-', 1))} Years</p>;
        }
        return 'Pending';
    };

    return (
        <section class="py-12 bg-gray-50">
            <div class="mx-auto">
                <div class="text-center lg:text-left">
                    <h2 class="text-2xl font-bold text-gray-900">Trending Collections</h2>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4">
                        <div
                            className="w-full h-full mx-auto opacity-30 blur-lg filter"
                            style={{
                                background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                            }}
                        ></div>
                    </div>
                    <div class="flex flex-col mt-12 relative">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full">
                                        <tbody class="border border-gray-200 divide-y divide-gray-200">
                                            {_.map(props.domains, (d) => (
                                                <tr>
                                                    <td class="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                                                        <div class="flex items-center">
                                                            <div
                                                                class={`${
                                                                    _.filter(Alphabet, _.matches({ letter: d.name.charAt(0).toLowerCase() }))[0].color
                                                                } inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white w-8 h-8 rounded-xl font-pj`}
                                                            >
                                                                {d.name.charAt(0).toUpperCase()}
                                                            </div>
                                                            <div class="ml-4">
                                                                <p class="text-base font-bold text-gray-900">
                                                                    <Link href={`/domain/${d.name.toLowerCase()}`}>
                                                                        <a title="">
                                                                            {d.name}
                                                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                                                        </a>
                                                                    </Link>
                                                                </p>
                                                                <p class="text-sm font-medium text-gray-500 mt-0.5">.{_.split(d.name.toUpperCase(), '.')[1]}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                                                        <div className="flex justify-end">
                                                            <p className="pr-1">Age:</p>
                                                            {woisData(d.name.toLowerCase())}
                                                        </div>
                                                    </td>
                                                    <td class="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                                                        {d.price > 0 ? (
                                                            d.price
                                                        ) : (
                                                            <Link href={`/domain/${d.name.toLowerCase()}`}>
                                                                <a class="inline-flex items-center justify-center w-[10rem] lg:w-full py-2 text-xs font-bold tracking-wide max-w-[10rem] text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white">Make Offer</a>
                                                            </Link>
                                                        )}
                                                    </td>
                                                    <td class="px-4 sm:px-2 py-4 text-sm font-medium text-right text-gray-900 bg-white whitespace-nowrap">
                                                        <div className="text-xl cursor-pointer z-20">
                                                            <FavoriteCardIcon name={d.name} id={d.name} price={d.price} slug={d.name} dark={true} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle">
                                <div class="overflow-hidden">
                                    <table class="min-w-full">
                                        {_.map(props.domains, (d) => (
                                            <tbody>
                                                <tr>
                                                    <td class="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                                                        <div class="flex items-center">
                                                            <div
                                                                class={`${
                                                                    _.filter(Alphabet, _.matches({ letter: d.name.charAt(0).toLowerCase() }))[0].color
                                                                } inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-10 h-10 rounded-full font-pj`}
                                                            >
                                                                {d.name.charAt(0).toUpperCase()}
                                                            </div>
                                                            <div class="ml-4">
                                                                <p class="text-base font-bold text-gray-900">
                                                                    <a href="#" title="">
                                                                        {d.name}
                                                                        <span class="absolute inset-0" aria-hidden="true"></span>
                                                                    </a>
                                                                </p>
                                                                <p class="text-sm font-medium text-gray-500 mt-0.5 flex">
                                                                    <p className="mr-1">Age:</p>
                                                                    {woisData(d.name.toLowerCase())}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                                                        28,942 SOL
                                                    </td>
                                                    <td class="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                                                        31.93 SOL
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
        </section>
    );
}
