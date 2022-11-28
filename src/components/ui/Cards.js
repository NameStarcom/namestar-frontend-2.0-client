import React from 'react';

export default function Cards() {
    return (
        <div>
            <section>
                <div className="font-medium pt-24 2xl:pt-52 bg-blueGray-100 rounded-b-10xl pb-96">
                    <div className="container px-4 py-4 mx-auto">
                        <h2 className="font-heading text-9xl md:text-10xl xl:text-11xl leading-tight mb-12 text-center">Select software</h2>
                        <p className="text-lg leading-6 font-normal text-darkBlueGray-400 mb-20 text-center">
                            Sed porttitor turpis sit amet malesuada porta vivamus lobortis.
                        </p>
                    </div>
                </div>
                <div className="container px-4 py-4 mx-auto">
                    <div className="-mt-96 grid md:grid-cols-2 lg:grid-cols-3 lg:items-center gap-9 pb-24 2xl:pb-52 font-medium mx-auto max-w-7xl">
                        <div className="pt-14 pb-16 px-8 md:px-16 shadow-2xl rounded-5xl bg-white">
                            <img
                                className="mb-14 w-10 h-10"
                                src="https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/uinel-assets/elements/pricing/circle1-small.svg"
                                alt=""
                            />
                            <h3 className="font-heading text-7xl leading-10 tracking-tight mb-4">Beginner</h3>
                            <div className="font-heading text-3xl flex items-center mb-12 leading-5 tracking-tighter">
                                <span className="text-base mr-2 -mb-1">$</span>
                                <span>8.80</span>
                            </div>
                            <p className="font-normal font-heading text-base leading-loose text-darkBlueGray-400 mb-14 xl:mb-28">
                                I haretra neque non me, finibus hart bibendum molestie.
                            </p>
                            <a
                                className="block py-3 px-10 md:mx-auto w-full md:max-w-max text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                            >
                                Buy now
                            </a>
                        </div>
                        <div className="pt-14 pb-16 px-8 md:px-16 shadow-3xl rounded-5xl bg-white">
                            <img
                                className="mb-14 w-10 h-10"
                                src="https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/uinel-assets/elements/pricing/circle2-small.svg"
                                alt=""
                            />
                            <h3 className="font-heading text-7xl leading-10 tracking-tight mb-4">Students</h3>
                            <div className="font-heading text-3xl flex items-center mb-12 leading-5 tracking-tighter">
                                <span className="text-base mr-2 -mb-1">$</span>
                                <span>15.90</span>
                            </div>
                            <p className="font-normal font-heading text-base leading-loose text-darkBlueGray-400 mb-6">
                                I haretra neque non me, finibus hart bibendum molestie.
                            </p>
                            <ul className="mb-14 xl:mb-32">
                                <li className="flex items-start leading-6 font-normal text-darkBlueGray-400">
                                    <img
                                        className="relative top-1 pt-px mr-6"
                                        src="https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>100GB cloud storage</span>
                                </li>
                            </ul>
                            <a
                                className="block py-3 px-10 md:mx-auto w-full md:max-w-max text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                            >
                                Buy now
                            </a>
                        </div>
                        <div className="pt-6 pb-16 px-8 md:px-16 shadow-2xl rounded-5xl bg-white">
                            <div className="bg-gray-50 max-w-max ml-auto md:-mr-10 rounded-8xl py-2 px-3 uppercase text-xs font-bold tracking-wider text-gray-300">
                                Trial free
                            </div>
                            <img
                                className="mb-14 w-10 h-10"
                                src="https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/uinel-assets/elements/pricing/circle3-small.svg"
                                alt=""
                            />
                            <h3 className="font-heading text-7xl leading-10 tracking-tight mb-4">Team</h3>
                            <div className="font-heading text-3xl flex items-center mb-12 leading-5 tracking-tighter">
                                <span className="text-base mr-2 -mb-1">$</span>
                                <span>29.90</span>
                            </div>
                            <p className="font-normal font-heading text-base leading-loose text-darkBlueGray-400 mb-14 xl:mb-28">
                                I haretra neque non me, finibus hart bibendum molestie.
                            </p>
                            <a
                                className="block py-3 px-10 md:mx-auto w-full md:max-w-max text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                            >
                                Buy now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
