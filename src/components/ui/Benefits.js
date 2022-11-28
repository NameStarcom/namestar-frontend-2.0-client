import React from 'react';

export default function Benefits() {
    return (
        <section class="py-12 bg-white sm:py-16 lg:py-20">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="max-w-4xl px-4 mx-auto text-center sm:px-0">
                    <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                        The only platform that creates unique & rare UI Kits with TailwindCSS
                    </h2>
                </div>

                <div class="relative max-w-md mx-auto mt-12 md:max-w-none md:mt-20">
                    <div class="absolute inset-x-0 hidden top-36 xl:block">
                        <img
                            class="object-contain w-full h-auto max-w-xl mx-auto"
                            src="https://cdn.rareblocks.xyz/collection/clarity/images/how-it-works/2/line-pattern.png"
                            alt=""
                        />
                    </div>

                    <div class="grid grid-cols-1 text-center md:text-left md:grid-cols-3 md:gap-x-16 gap-y-12 xl:gap-x-32">
                        <div class="flex flex-col justify-between">
                            <div class="relative flex-shrink-0 mx-8 md:mx-0">
                                <div class="absolute -inset-1">
                                    <div
                                        class="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                                        style={{
                                            background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                        }}
                                    ></div>
                                </div>
                                <img
                                    class="relative w-full h-auto mx-auto filter drop-shadow-lg"
                                    src="https://cdn.rareblocks.xyz/collection/clarity/images/how-it-works/2/illustration-1.png"
                                    alt=""
                                />
                            </div>

                            <div class="mt-6 md:mt-10">
                                <h3 class="text-xl font-bold text-gray-900 font-pj">Track Customers</h3>
                                <p class="mt-4 text-base font-normal leading-7 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons.
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col justify-between">
                            <div class="relative flex-shrink-0 mx-8 md:mx-0">
                                <div class="absolute -inset-1">
                                    <div
                                        class="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                                        style={{
                                            background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                        }}
                                    ></div>
                                </div>
                                <img
                                    class="relative w-full h-auto mx-auto filter drop-shadow-lg"
                                    src="https://cdn.rareblocks.xyz/collection/clarity/images/how-it-works/2/illustration-2.png"
                                    alt=""
                                />
                            </div>

                            <div class="mt-6 md:mt-10">
                                <h3 class="text-xl font-bold text-gray-900 font-pj">Get Feedbacks</h3>
                                <p class="mt-4 text-base font-normal leading-7 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons.
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col justify-between">
                            <div class="relative flex-shrink-0 mx-8 md:mx-0">
                                <div class="absolute -inset-1">
                                    <div
                                        class="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                                        style={{
                                            background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                        }}
                                    ></div>
                                </div>
                                <img
                                    class="relative w-full h-auto mx-auto filter drop-shadow-lg"
                                    src="https://cdn.rareblocks.xyz/collection/clarity/images/how-it-works/2/illustration-3.png"
                                    alt=""
                                />
                            </div>

                            <div class="mt-6 md:mt-10">
                                <h3 class="text-xl font-bold text-gray-900 font-pj">See Results</h3>
                                <p class="mt-4 text-base font-normal leading-7 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
