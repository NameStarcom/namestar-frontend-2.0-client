import React from 'react';

export default function Footer() {
    return (
        <section className="py-20 2xl:py-40 bg-black">
            <div className="container px-4 py-4 mx-auto">
                <div className="flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400">
                    <div className="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
                        <span className="text-lg text-blue-400 font-bold">We're NameStar</span>
                        <h2 className="max-w-sm mt-8 mb-12 text-5xl text-white font-bold font-heading">Thank you for your time</h2>
                        <p className="mb-16 text-gray-300">The brown fox jumps over the lazy dog.</p>
                    </div>
                    <div className="w-full lg:w-3/5 px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                                <ul className="text-lg">
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Hello
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Story
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Applications
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Stats
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                                <ul className="text-lg">
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Newsletter
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Features
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            How it works
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Team
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/3 px-4">
                                <ul className="text-lg">
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            New account
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Log in
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Testimonials
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-gray-200 hover:text-gray-100" href="#">
                                            Cookies
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-between">
                    <p className="text-lg text-gray-200 mb-8 md:mb-0">© 2021 NameStar. All rights reserved.</p>
                    <div className="flex items-center">
                        <a className="inline-block mr-2" href="#">
                            <img className="h-12" src="https://shuffle.dev/https://shuffle.dev/zospace-assets/logos/facebook.svg" alt="" />
                        </a>
                        <a className="inline-block mr-2" href="#">
                            <img className="h-12" src="https://shuffle.dev/https://shuffle.dev/zospace-assets/logos/instagram.svg" alt="" />
                        </a>
                        <a className="inline-block" href="#">
                            <img className="h-12" src="https://shuffle.dev/https://shuffle.dev/zospace-assets/logos/twitter.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
