import React from 'react';
import Sticky from 'react-sticky-el';
import PriceBox from './PriceBox';
import { FaRegStar } from 'react-icons/fa';
import { BsPlayBtn } from 'react-icons/bs';

export default function Landing() {
    return (
        <section className="relative pb-24 xl:pb-44 bg-black overflow-hidden pt-24 ">
            {/* <img
                    className="absolute top-0 right-0 lg:h-full -mr-32 md:-mr-64"
                    src="https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/https://shuffle.dev/uinel-assets/images/ecommerce-newsletter/newsletter-right-graphic.png"
                    alt=""
                /> */}
            <div className="container flex m-auto">
                <div className="flex-col w-full sm:w-2/3 relative px-4 mx-auto">
                    <div className="w-full md:w-5/6">
                        <div className="mt-12 mb-24">
                            <span className="inline-block text-3xl text-lg font-medium font-heading leading-5 text-blue-500">THE DOMAIN NAME</span>
                            <div className="flex items-center">
                                <h2 className="mb-10 text-8xl md:text-9xl xl:text-10xl font-bold text-white leading-tight font-heading font-medium">
                                    Name.com <span className="text-7xl md:text-8xl block">is for sale!</span>
                                </h2>
                                <div className="text-9xl font-bold text-white mb-20 ml-4">
                                    <BsPlayBtn />
                                </div>
                            </div>
                            <p className="mb-14 text-2xl font-heading font-medium text-gray-200">
                                Become the owner of this domain name. Leading companies love to secure great domains for future investments.
                            </p>
                            {/* <div className="flex items-center mb-8">
                                <div className="inline-flex justify-center items-center w-20 h-20 mr-4 lg:mr-14 bg-blue-500 rounded-lg">
                                    <svg className="w-8 h-8" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-4">
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M32.8123 15.3125C32.4098 15.3125 32.0832 14.9858 32.0832 14.5833C32.0832 10.2988 30.4148 6.26937 27.3844 3.24042C27.1 2.95604 27.1 2.49375 27.3844 2.20937C27.6688 1.925 28.1311 1.925 28.4155 2.20937C31.7215 5.51396 33.5415 9.90792 33.5415 14.5833C33.5415 14.9858 33.2148 15.3125 32.8123 15.3125Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M2.18754 15.3125C1.78504 15.3125 1.45837 14.9858 1.45837 14.5833C1.45837 9.90792 3.27838 5.51396 6.58442 2.20937C6.86879 1.925 7.33109 1.925 7.61546 2.20937C7.89984 2.49375 7.89984 2.95604 7.61546 3.24042C4.58504 6.26937 2.91671 10.2988 2.91671 14.5833C2.91671 14.9858 2.59004 15.3125 2.18754 15.3125Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M19.6875 6.09583C19.285 6.09583 18.9584 5.76917 18.9584 5.36667V2.91667C18.9584 2.11313 18.3036 1.45833 17.5 1.45833C16.6965 1.45833 16.0417 2.11313 16.0417 2.91667V5.36667C16.0417 5.76917 15.715 6.09583 15.3125 6.09583C14.91 6.09583 14.5834 5.77063 14.5834 5.36667V2.91667C14.5834 1.30813 15.8915 0 17.5 0C19.1086 0 20.4167 1.30813 20.4167 2.91667V5.36667C20.4167 5.77063 20.09 6.09583 19.6875 6.09583Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M17.5 34.9998C14.6855 34.9998 12.3959 32.7103 12.3959 29.8957C12.3959 29.4932 12.7225 29.1665 13.125 29.1665C13.5275 29.1665 13.8542 29.4932 13.8542 29.8957C13.8542 31.9053 15.4905 33.5415 17.5 33.5415C19.5096 33.5415 21.1459 31.9053 21.1459 29.8957C21.1459 29.4932 21.4725 29.1665 21.875 29.1665C22.2775 29.1665 22.6042 29.4932 22.6042 29.8957C22.6042 32.7103 20.3146 34.9998 17.5 34.9998Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M29.8958 30.625H5.10413C3.89808 30.625 2.91663 29.6435 2.91663 28.4375C2.91663 27.7973 3.19517 27.1921 3.68225 26.775C5.98058 24.8325 7.29163 22.0063 7.29163 19.0138V14.5833C7.29163 8.95417 11.8708 4.375 17.5 4.375C23.1291 4.375 27.7083 8.95417 27.7083 14.5833V19.0138C27.7083 22.0077 29.0193 24.8325 31.306 26.7648C31.8048 27.1921 32.0833 27.7973 32.0833 28.4375C32.0833 29.6435 31.1033 30.625 29.8958 30.625ZM17.5 5.83333C12.6743 5.83333 8.74996 9.75771 8.74996 14.5833V19.0138C8.74996 22.4379 7.25079 25.6681 4.636 27.879C4.46829 28.0219 4.37496 28.2246 4.37496 28.4375C4.37496 28.84 4.70163 29.1667 5.10413 29.1667H29.8958C30.2983 29.1667 30.625 28.84 30.625 28.4375C30.625 28.2246 30.5316 28.0219 30.3698 27.8833C27.7506 25.6681 26.25 22.4365 26.25 19.0138V14.5833C26.25 9.75771 22.3256 5.83333 17.5 5.83333Z"
                                                fill="white"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="35" height="35" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="mb-2 text-lg text-white" data-config-id="header1">
                                        Notifications
                                    </h4>
                                    <p className="text-lg text-gray-200" data-config-id="desc1">
                                        The brown me quam, sagittis
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="inline-flex justify-center items-center w-20 h-20 mr-4 lg:mr-14 bg-blue-500 rounded-lg">
                                    <svg className="w-8 h-8" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-4">
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M13.5 14.5833C9.3645 14.5833 6 11.3123 6 7.29167C6 3.27104 9.3645 0 13.5 0C17.6355 0 21 3.27104 21 7.29167C21 11.3123 17.6355 14.5833 13.5 14.5833ZM13.5 1.45833C10.191 1.45833 7.5 4.07458 7.5 7.29167C7.5 10.5087 10.191 13.125 13.5 13.125C16.809 13.125 19.5 10.5087 19.5 7.29167C19.5 4.07458 16.809 1.45833 13.5 1.45833Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M13.62 30.625H0.75C0.336 30.625 0 30.2983 0 29.8958V24.0625C0 20.4444 3.0285 17.5 6.75 17.5H15.39C15.804 17.5 16.14 17.8267 16.14 18.2292C16.14 18.6317 15.804 18.9583 15.39 18.9583H6.75C3.855 18.9583 1.5 21.2479 1.5 24.0625V29.1667H13.62C14.034 29.1667 14.37 29.4933 14.37 29.8958C14.37 30.2983 14.034 30.625 13.62 30.625Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M26.25 34.9998C20.874 34.9998 16.5 30.7473 16.5 25.5207C16.5 20.294 20.874 16.0415 26.25 16.0415C31.626 16.0415 36 20.294 36 25.5207C36 30.7473 31.626 34.9998 26.25 34.9998ZM26.25 17.4998C21.702 17.4998 18 21.099 18 25.5207C18 29.9423 21.702 33.5415 26.25 33.5415C30.798 33.5415 34.5 29.9423 34.5 25.5207C34.5 21.099 30.798 17.4998 26.25 17.4998Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M29.25 29.1665C29.058 29.1665 28.866 29.095 28.719 28.9536L25.719 26.0369C25.5795 25.8998 25.5 25.7146 25.5 25.5207V21.1457C25.5 20.7432 25.836 20.4165 26.25 20.4165C26.664 20.4165 27 20.7432 27 21.1457V25.2188L29.781 27.9225C30.0735 28.2069 30.0735 28.6692 29.781 28.9536C29.634 29.095 29.442 29.1665 29.25 29.1665Z"
                                                fill="white"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="36" height="35" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="mb-2 text-lg text-white" data-config-id="header2">
                                        Meetings
                                    </h4>
                                    <p className="text-lg text-gray-200" data-config-id="desc2">
                                        Great, maecenas tincidunt malesuada
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="inline-flex justify-center items-center w-20 h-20 mr-4 lg:mr-14 bg-blue-500 rounded-lg">
                                    <svg className="w-8 h-8" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-4">
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M13.5 14.5833C9.3645 14.5833 6 11.3123 6 7.29167C6 3.27104 9.3645 0 13.5 0C17.6355 0 21 3.27104 21 7.29167C21 11.3123 17.6355 14.5833 13.5 14.5833ZM13.5 1.45833C10.191 1.45833 7.5 4.07458 7.5 7.29167C7.5 10.5087 10.191 13.125 13.5 13.125C16.809 13.125 19.5 10.5087 19.5 7.29167C19.5 4.07458 16.809 1.45833 13.5 1.45833Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M13.62 30.625H0.75C0.336 30.625 0 30.2983 0 29.8958V24.0625C0 20.4444 3.0285 17.5 6.75 17.5H15.39C15.804 17.5 16.14 17.8267 16.14 18.2292C16.14 18.6317 15.804 18.9583 15.39 18.9583H6.75C3.855 18.9583 1.5 21.2479 1.5 24.0625V29.1667H13.62C14.034 29.1667 14.37 29.4933 14.37 29.8958C14.37 30.2983 14.034 30.625 13.62 30.625Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M26.25 34.9998C20.874 34.9998 16.5 30.7473 16.5 25.5207C16.5 20.294 20.874 16.0415 26.25 16.0415C31.626 16.0415 36 20.294 36 25.5207C36 30.7473 31.626 34.9998 26.25 34.9998ZM26.25 17.4998C21.702 17.4998 18 21.099 18 25.5207C18 29.9423 21.702 33.5415 26.25 33.5415C30.798 33.5415 34.5 29.9423 34.5 25.5207C34.5 21.099 30.798 17.4998 26.25 17.4998Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M29.25 29.1665C29.058 29.1665 28.866 29.095 28.719 28.9536L25.719 26.0369C25.5795 25.8998 25.5 25.7146 25.5 25.5207V21.1457C25.5 20.7432 25.836 20.4165 26.25 20.4165C26.664 20.4165 27 20.7432 27 21.1457V25.2188L29.781 27.9225C30.0735 28.2069 30.0735 28.6692 29.781 28.9536C29.634 29.095 29.442 29.1665 29.25 29.1665Z"
                                                fill="white"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="36" height="35" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="mb-2 text-lg text-white" data-config-id="header2">
                                        Meetings
                                    </h4>
                                    <p className="text-lg text-gray-200" data-config-id="desc2">
                                        Great, maecenas tincidunt malesuada
                                    </p>
                                </div>
                            </div> */}
                            {/* <div className="relative flex flex-wrap justify-center mt-24 -mx-10 mb-20">
                                <img
                                    className="hidden lg:block absolute inset-y-0 -mr-80 -mt-16"
                                    src="https://shuffle.dev/zospace-assets/lines/dots-gray.svg"
                                    alt=""
                                />
                                <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                                    <div className="relative flex">
                                        <img
                                            className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-16"
                                            src="https://shuffle.dev/zospace-assets/lines/dots-gray.svg"
                                            alt=""
                                        />
                                        <div className="mr-8">
                                            <span className="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">
                                                1
                                            </span>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3 className="mb-6 text-lg font-bold font-heading text-white">Register account</h3>
                                            <p className="text-lg text-gray-200">It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                                    <div className="flex">
                                        <div className="mr-8">
                                            <span className="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">
                                                2
                                            </span>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3 className="mb-6 text-lg font-bold font-heading text-white">Customize tools</h3>
                                            <p className="text-lg text-gray-200">The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-10">
                                    <div className="flex">
                                        <div className="mr-8">
                                            <span className="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">
                                                3
                                            </span>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3 className="mb-6 text-lg font-bold font-heading text-white">Work with your team</h3>
                                            <p className="text-lg text-gray-200">The time, this accumsan augue, posuere posuere elit lorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="flex flex-wrap -mx-6 lg:-mx-14">
                                <div className="w-full md:w-1/2 lg:w-1/3 px-6 lg:px-14 mb-16 lg:mb-0">
                                    <h3 className="mb-8 text-2xl font-bold font-heading text-white">Buyer Protection</h3>
                                    <p className="text-lg text-gray-200">The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.</p>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/3 px-6 lg:px-14 mb-16 lg:mb-0">
                                    <h3 className="mb-8 text-2xl font-bold font-heading text-white">Godaddy transfers</h3>
                                    <p className="text-lg text-gray-200">It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.</p>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/3 px-6 lg:px-14 mb-16 md:mb-0">
                                    <h3 className="smb-8 text-2xl font-bold font-heading text-white">No Hidden Fees</h3>
                                    <p className="text-lg text-gray-200">The time, this accumsan augue, posuere posuere elit lorem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col w-full sm:w-1/3">
                    <Sticky topOffset={-160} bottomOffset={220} boundaryElement=".block">
                        <div className="bg-white rounded-3xl m-5 z-10 overflow-hidden shadow-lg">
                            <div className="px-12 pt-8 bg-white" data-path="0.0.1.3.0.0.0">
                                <div className="flex items-center justify-between" data-path="0.0.1.3.0.0.0.0">
                                    <h4 className="mr-auto text-lg font-heading font-bold" data-config-id="auto-txt-15-3" data-path="0.0.1.3.0.0.0.0.1">
                                        Buy Name.com domain
                                    </h4>
                                    <FaRegStar className="text-xl cursor-pointer" />
                                </div>
                            </div>
                            <div className="p-4 2xl:p-8">
                                <PriceBox />
                            </div>
                        </div>
                    </Sticky>
                </div>
            </div>
        </section>
    );
}
