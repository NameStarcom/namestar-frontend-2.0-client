import React from 'react';
import { FaRegStar } from 'react-icons/fa';

export default function header() {
    return (
        <section>
            <div className="px-6 md:px-12 py-4 bg-black">
                <nav className="flex justify-between">
                    <div className="flex w-full items-center">
                        <a href="#">
                            <img className="h-14 brightness-[10]" src="/images/logo.png" alt="" />
                        </a>
                        <ul className="hidden xl:flex px-4 ml-20 2xl:ml-40 mr-auto text-white">
                            <li className="relative mr-16">
                                <a className="flex items-center font-bold hover:text-darkBlueGray-400" href="#">
                                    <span className="mr-4">Buy a domain</span>
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <div className="product-menu hidden absolute top-0 left-0 mt-24 -ml-64 pl-24 pr-16 pt-16 pb-24 bg-white rounded-lg z-50">
                                    <div className="absolute top-0 left-0 ml-72 w-7 h-7 bg-white transform rotate-45 -translate-y-1/2"></div>
                                    <div className="flex flex-wrap min-w-max -mx-4 lg:-mx-10">
                                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:px-10">
                                            <div>
                                                <h3 className="mb-4 text-xl font-heading font-medium">Smartphone</h3>
                                                <ul className="w-full">
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            View all
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Premium&nbsp;Phones
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Basic
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Sale
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                                            <div className="w-full">
                                                <h3 className="mb-4 text-xl font-heading font-medium">Tablet</h3>
                                                <ul className="w-full">
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            View all
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Premium&nbsp;Tablets
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            For&nbsp;Designers
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Sale
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="w-40 mt-5 border-b border-gray-100"></div>
                                        </div>
                                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:px-10">
                                            <h3 className="mb-4 text-xl font-heading font-medium">Brand</h3>
                                            <ul>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Apple iPhone
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Blackberry
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Google
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Huawei
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Nokia
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Oppo
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Samsung
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Sony
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Xiaomi
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                                            <h3 className="mb-4 text-xl font-heading font-medium">System</h3>
                                            <ul>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        iOS
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Android
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        View all
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-40 mt-5 border-b border-gray-100"></div>
                                        </div>
                                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:px-10">
                                            <h3 className="mb-4 text-xl font-heading font-medium">Accesories</h3>
                                            <ul>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        View all
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Watches
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                                            <h3 className="mb-4 text-xl font-heading font-medium">Computers</h3>
                                            <ul>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Apple iMac
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Memory
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        PC
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Graphic Cards
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Monitors
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Hard Disk Drivers
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Cables
                                                    </a>
                                                </li>
                                                <li className="mb-4">
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Keyboards
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-gray-400 hover:text-gray-500" href="#">
                                                        Printers
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-40 mt-5 border-b border-gray-100"></div>
                                        </div>
                                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:px-10">
                                            <div className="relative flex items-end h-96 w-full rounded-lg bg-cover bg-no-repeat">
                                                <div className="mx-2 mb-5 px-2 py-4 bg-white rounded-lg">
                                                    <h4 className="text-xl font-heading font-medium leading-tight">Connected home</h4>
                                                </div>
                                            </div>
                                            <div className="w-40 my-8 border-b border-gray-100"></div>
                                            <a
                                                className="block py-5 px-2 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                                                href="#"
                                            >
                                                New brands
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mr-16">
                                <a className="font-bold hover:text-darkBlueGray-400" href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="font-bold hover:text-darkBlueGray-400" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        {/* <div className="relative hidden xl:block mr-12">
                            <img
                                className="absolute top-1/2 transform -translate-y-2/4 pl-6 mt-px"
                                src="https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/uinel-assets/elements/navigations/search-gray-icon.svg"
                                alt=""
                            />
                            <input className="rounded-4xl py-3 pl-12 pr-5 text-gray-300 font-heading font-medium text-base bg-blue-50 border-2 border-blueGray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none" />
                        </div> */}
                        {/* <div className="hidden xl:flex items-center mr-12">
                            <a className="inline-block mr-10 text-gray-400 hover:text-gray-500" href="#">
                                <FaRegStar className="w-[22px] h-[22px]" />
                            </a>
                        </div> */}
                        {/* <button className="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300">
                            <span className="block mt-px" data-config-id="auto-txt-9-1">
                                New project
                            </span>
                        </button> */}
                        <div className="hidden xl:flex items-center ml-auto" data-path="0.0.0.2">
                            {/* <a className="inline-block text-gray-400 mr-4 hover:text-gray-500" href="#">
                                <FaRegStar className="w-[22px] h-[22px]" />
                            </a> */}
                            <div className="w-px h-8 bg-gray-200 bg-opacity-50 ml-9 mr-11" data-path="0.0.0.2.1"></div>
                            <a className="flex items-center mr-12 font-bold text-white" href="#" data-path="0.0.0.2.2">
                                <span data-config-id="auto-txt-7-1" data-path="0.0.0.2.2.0">
                                    Starred
                                </span>
                                {/* <img
                                    className="ml-6"
                                    src="https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/uinel-assets/elements/navigations/avatar-online.png"
                                    alt=""
                                    data-config-id="auto-img-2-1"
                                    data-path="0.0.0.2.2.1"
                                />
                                <img
                                    className="ml-6"
                                    src="https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/uinel-assets/elements/navigations/arrow-down-gray.svg"
                                    alt=""
                                    data-config-id="auto-img-3-1"
                                    data-path="0.0.0.2.2.2"
                                /> */}
                            </a>
                            <div className="hidden lg:block" data-path="0.0.3">
                                <div className="max-w-sm flex items-center bg-blue-50 rounded-full" data-path="0.0.3.0">
                                    <input
                                        className="hidden xl:block pl-6 py-3 rounded-full bg-transparent placeholder-gray-200 font-bold outline-none"
                                        type="search"
                                        placeholder="Search Now..."
                                        data-path="0.0.3.0.0"
                                    />
                                    <button
                                        className="ml-auto px-4 lg:px-10 py-3 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                                        data-path="0.0.3.0.1"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-path="0.0.3.0.1.0">
                                            <g clipPath="url(#clip0)" data-path="0.0.3.0.1.0.0">
                                                <path
                                                    d="M10.5691 0C4.74145 0 0 4.74145 0 10.5691C0 16.3971 4.74145 21.1382 10.5691 21.1382C16.3971 21.1382 21.1382 16.3971 21.1382 10.5691C21.1382 4.74145 16.3971 0 10.5691 0ZM10.5691 19.187C5.81723 19.187 1.95122 15.321 1.95122 10.5691C1.95122 5.81728 5.81723 1.95122 10.5691 1.95122C15.321 1.95122 19.187 5.81723 19.187 10.5691C19.187 15.321 15.321 19.187 10.5691 19.187Z"
                                                    fill="white"
                                                    data-path="0.0.3.0.1.0.0.0"
                                                ></path>
                                                <path
                                                    d="M23.712 22.3346L18.1185 16.7411C17.7374 16.36 17.1201 16.36 16.739 16.7411C16.3578 17.1219 16.3578 17.7398 16.739 18.1207L22.3325 23.7142C22.523 23.9047 22.7725 24 23.0223 24C23.2717 24 23.5214 23.9047 23.712 23.7142C24.0932 23.3334 24.0932 22.7154 23.712 22.3346Z"
                                                    fill="white"
                                                    data-path="0.0.3.0.1.0.0.1"
                                                ></path>
                                            </g>
                                            <defs data-path="0.0.3.0.1.0.1">
                                                <clipPath id="clip0" data-path="0.0.3.0.1.0.1.0">
                                                    <rect width="24" height="24" fill="white" data-path="0.0.3.0.1.0.1.0.0"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-burger self-center xl:hidden">
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="25" height="2" fill="currentColor"></rect>
                            <rect y="14" width="25" height="2" fill="currentColor"></rect>
                        </svg>
                    </button>
                </nav>
            </div>
            <div className="navbar-menu hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                <nav className="relative flex flex-col py-20 px-12 md:pl-18 md:pr-16 h-full w-full bg-darkBlueGray-700 overflow-y-auto">
                    <button className="navbar-close absolute top-5 p-6 right-5">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="13.495" y1="0.494975" x2="1.49498" y2="12.495" stroke="#326BFF" strokeWidth="1.4"></line>
                            <line x1="12.505" y1="12.495" x2="0.505026" y2="0.494976" stroke="#326BFF" strokeWidth="1.4"></line>
                        </svg>
                    </button>
                    <span className="mb-6 text-xs text-darkBlueGray-300 font-medium uppercase tracking-wider">Discover Uistore</span>
                    <ul className="mb-20">
                        <li className="mb-2 md:mb-0">
                            <a className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading" href="#">
                                Products
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0">
                            <a className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading" href="#">
                                New in
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0">
                            <a className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading" href="#">
                                Sale
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0">
                            <a className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading" href="#">
                                Stories
                            </a>
                        </li>
                        <li>
                            <a className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className="mb-12 flex-1">
                        <li className="mb-5">
                            <a className="text-xl text-blue-500 hover:text-blue-400 font-heading" href="#">
                                Facebook
                            </a>
                        </li>
                        <li className="mb-5">
                            <a className="text-xl text-blue-500 hover:text-blue-400 font-heading" href="#">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a className="text-xl text-blue-500 hover:text-blue-400 font-heading" href="#">
                                Twitter
                            </a>
                        </li>
                    </ul>
                    <a
                        className="block w-full py-4 px-10 text-lg text-white font-heading font-medium tracking-tighter text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                        href="#"
                    >
                        Sign in
                    </a>
                </nav>
            </div>
        </section>
        // <section className="py-8 px-4 lg:px-10 bg-white">
        //     <nav className="relative flex justify-between items-center">
        //         <a className="text-2xl text-gray-900 font-bold" href="#">
        //             <img className="h-14" src="/images/logo.png" alt="" width="auto" />
        //         </a>
        //         <div className="lg:hidden">
        //             <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 text-gray-900 rounded">
        //                 <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <rect width="39" height="2" rx="1" fill="currentColor"></rect>
        //                     <rect x="19" y="11" width="20" height="2" rx="1" fill="currentColor"></rect>
        //                     <title>Mobile menu</title>
        //                 </svg>
        //             </button>
        //         </div>
        //         <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        //             <ul className="flex items-center space-x-16 text-lg font-bold">
        //                 <li>
        //                     <a className="hover:underline" href="#">
        //                         Product
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a className="hover:underline" href="#">
        //                         Story
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a className="hover:underline" href="#">
        //                         Features
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a className="hover:underline" href="#">
        //                         Contact
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="hidden lg:block">
        //             <div className="max-w-sm flex items-center bg-blue-50 rounded-full">
        //                 <input
        //                     className="hidden xl:block pl-6 py-5 rounded-full bg-transparent placeholder-gray-200 font-bold outline-none"
        //                     type="search"
        //                     placeholder="Search Now..."
        //                 />
        //                 <button className="ml-auto px-4 lg:px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">
        //                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                         <g clip-path="url(#clip0)">
        //                             <path
        //                                 d="M10.5691 0C4.74145 0 0 4.74145 0 10.5691C0 16.3971 4.74145 21.1382 10.5691 21.1382C16.3971 21.1382 21.1382 16.3971 21.1382 10.5691C21.1382 4.74145 16.3971 0 10.5691 0ZM10.5691 19.187C5.81723 19.187 1.95122 15.321 1.95122 10.5691C1.95122 5.81728 5.81723 1.95122 10.5691 1.95122C15.321 1.95122 19.187 5.81723 19.187 10.5691C19.187 15.321 15.321 19.187 10.5691 19.187Z"
        //                                 fill="white"
        //                             ></path>
        //                             <path
        //                                 d="M23.712 22.3346L18.1185 16.7411C17.7374 16.36 17.1201 16.36 16.739 16.7411C16.3578 17.1219 16.3578 17.7398 16.739 18.1207L22.3325 23.7142C22.523 23.9047 22.7725 24 23.0223 24C23.2717 24 23.5214 23.9047 23.712 23.7142C24.0932 23.3334 24.0932 22.7154 23.712 22.3346Z"
        //                                 fill="white"
        //                             ></path>
        //                         </g>
        //                         <defs>
        //                             <clipPath id="clip0">
        //                                 <rect width="24" height="24" fill="white"></rect>
        //                             </clipPath>
        //                         </defs>
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>
        //     </nav>
        //     <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        //         <div className="navbar-backdrop fixed inset-0 bg-blue-600 opacity-80"></div>
        //         <nav className="relative flex flex-col py-8 w-full h-full bg-gray-800 overflow-y-auto">
        //             <div className="flex items-center mb-16 pr-6">
        //                 <a className="ml-10 text-2xl text-white font-bold" href="#">
        //                     <img className="h-7" src="https://shuffle.dev/https://shuffle.dev/zospace-assets/logos/zospace-logo.svg" alt="" width="auto" />
        //                 </a>
        //             </div>
        //             <div>
        //                 <ul>
        //                     <li className="mb-1 px-10">
        //                         <a className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="#">
        //                             Product
        //                         </a>
        //                     </li>
        //                     <li className="mb-1 px-10">
        //                         <a className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="#">
        //                             Story
        //                         </a>
        //                     </li>
        //                     <li className="mb-1 px-10">
        //                         <a className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="#">
        //                             Features
        //                         </a>
        //                     </li>
        //                     <li className="mb-1 px-10">
        //                         <a className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="#">
        //                             Contact
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="mt-auto px-10">
        //                 <div className="pt-6">
        //                     <a
        //                         className="block mb-4 py-4 px-12 text-white text-center font-bold hover:bg-white hover:text-gray-800 border border-gray-50 rounded-full transition duration-200"
        //                         href="#"
        //                     >
        //                         Sign in
        //                     </a>
        //                     <a
        //                         className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
        //                         href="#"
        //                     >
        //                         Sign up
        //                     </a>
        //                 </div>
        //                 <p className="mt-6 mb-4 text-lg text-center text-white">
        //                     <span>2021 © Zospace. All rights reserved.</span>
        //                 </p>
        //             </div>
        //         </nav>
        //     </div>
        // </section>
    );
}
