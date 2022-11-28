import React from 'react';

export default function ProductDescription() {
    return (
        <section className="pt-16 bg-blueGray-100">
            <div className="container px-4 py-4 mx-auto">
                <div className="w-2/3 overflow-hidden">
                    <h2 className="pb-16 mb-6 text-9xl md:text-10xl font-heading font-medium">What's next?</h2>
                    {/* <p className="mb-12 xl:mb-28 max-w-md text-xl font-heading font-medium">
                        I am ante nulla, porttitor at turpis facilisis, dignissim rutrum durum.
                    </p> */}
                    {/* <div className="relative flex flex-wrap justify-center">
                        <img className="hidden lg:block absolute inset-y-0 -mr-80 -mt-16" src="https://shuffle.dev/zospace-assets/lines/dots.svg" alt="" />
                        <div className="w-full lg:w-1/3 px-4 mb-24">
                            <div className="relative flex">
                                <img
                                    className="hidden lg:block absolute top-0 right-0 -mr-24 2xl:mr-0 -mt-16"
                                    src="https://shuffle.dev/zospace-assets/lines/dots.svg"
                                    alt=""
                                />
                                <div className="mr-8">
                                    <span className="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">1</span>
                                </div>
                                <div className="max-w-xs">
                                    <h3 className="mb-6 text-lg font-bold font-heading">Register account</h3>
                                    <p className="text-lg">It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-24">
                            <div className="flex">
                                <div className="mr-8">
                                    <span className="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">2</span>
                                </div>
                                <div className="max-w-xs">
                                    <h3 className="mb-6 text-lg font-bold font-heading">Customize tools</h3>
                                    <p className="text-lg">The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-24">
                            <div className="flex">
                                <div className="mr-8">
                                    <span className="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">3</span>
                                </div>
                                <div className="max-w-xs">
                                    <h3 className="mb-6 text-lg font-bold font-heading">Work with your team</h3>
                                    <p className="text-lg">The time, this accumsan augue, posuere posuere elit lorem.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="max-w-xl mx-auto mt-12 sm:mt-16">
                        <div className="space-y-4">
                            <div role="region" className="px-4 py-5 border border-gray-900 rounded-lg">
                                <h3>
                                    <button className="flex items-center justify-between w-full space-x-6 text-base font-bold text-left text-gray-900">
                                        <span className="flex-1"> What exactly the NFT is? </span>
                                        <span x-show="expanded" aria-hidden="true">
                                            <svg
                                                className="w-5 h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                            </svg>
                                        </span>
                                        <span x-show="!expanded" aria-hidden="true">
                                            <svg
                                                className="w-5 h-5 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div x-show="expanded" x-collapse>
                                    <div className="pt-4 text-base font-medium text-gray-600">
                                        They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying
                                        software as many cryptos.
                                    </div>
                                </div>
                            </div>

                            <div role="region" className="px-4 py-5 border border-gray-900 rounded-lg">
                                <h3>
                                    <button className="flex items-center justify-between w-full space-x-6 text-base font-bold text-left text-gray-900">
                                        <span className="flex-1"> How can I collect NFT? </span>
                                        <span x-show="expanded" aria-hidden="true">
                                            <svg
                                                className="w-5 h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                            </svg>
                                        </span>
                                        <span x-show="!expanded" aria-hidden="true">
                                            <svg
                                                className="w-5 h-5 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div x-show="expanded" x-collapse>
                                    <div className="pt-4 text-base font-medium text-gray-600">
                                        They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying
                                        software as many cryptos.
                                    </div>
                                </div>
                            </div>

                            <div role="region" className="px-4 py-5 border border-gray-900 rounded-lg">
                                <h3>
                                    <button className="flex items-center justify-between w-full space-x-6 text-base font-bold text-left text-gray-900">
                                        <span className="flex-1"> When will Craft NFT release? </span>
                                        <span x-show="expanded" aria-hidden="true">
                                            <svg
                                                className="w-5 h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                            </svg>
                                        </span>
                                        <span x-show="!expanded" aria-hidden="true">
                                            <svg
                                                className="w-5 h-5 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div x-show="expanded" x-collapse>
                                    <div className="pt-4 text-base font-medium text-gray-600">
                                        They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying
                                        software as many cryptos.
                                    </div>
                                </div>
                            </div>

                            <div role="region" className="px-4 py-5 border border-gray-900 rounded-lg">
                                <h3>
                                    <button className="flex items-center justify-between w-full space-x-6 text-base font-bold text-left text-gray-900">
                                        <span className="flex-1"> Will I own the full access? </span>
                                        <span x-show="expanded" aria-hidden="true">
                                            <svg
                                                className="w-5 h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                            </svg>
                                        </span>
                                        <span x-show="!expanded" aria-hidden="true">
                                            <svg
                                                className="w-5 h-5 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div x-show="expanded" x-collapse>
                                    <div className="pt-4 text-base font-medium text-gray-600">
                                        They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying
                                        software as many cryptos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="mb-14 mt-12  font-heading font-medium text-5xl xl:text-8xl leading-snug">
                    A spatial system is a set of rules for how you measure and size your UI elements.
                </h3>
                <p className="mb-14 text-lg leading-10 text-darkBlueGray-400 max-w-2xl">
                    Proin nec nibh vel odio dapibus molestie eu id ipsum. Fusce sodales vitae lorem vitae tempus. Etiam nisi ligula, placerat at congue et,
                    vehicula quis ex.
                </p>
            </div>
        </section>
    );
}
