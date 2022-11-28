import React, { useState, useEffect } from 'react';
import 'antd/lib/pagination/style/index.css';
import _ from 'lodash';
import { withRouter } from 'next/router';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import data from '../../content/data/config.json';
import Link from 'next/link';

const Contact = () => {
  const [info, setInfo] = useState({ ip: '' });
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      fetch(URL, { method: 'get' })
          .then((response) => response.json())
          .then((data) => {
              setInfo({ ...data });
          });
  }, []);
  const handleClick = () => setChecked(!checked);
    return (
        <div>
            <Header {...data.header} />
            <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-36">
                        <div className="flex flex-col self-stretch justify-between">
                            <div className="flex-1">
                                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact Us</h2>
                                <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                                    For any questions, reach out to our support team. On average we reply within 12hours.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-8 mt-12 lg:mt-auto">
                                <ul className="mt-8 mb-8 space-y-12">
                                    <li className="flex items-start">
                                        <div className="inline-flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shrink-0">
                                            <svg
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>

                                        <div className="ml-6">
                                            <h3 className="text-lg font-semibold text-blue-600">Office Hours</h3>
                                            <p className="mt-2 text-lg font-normal text-gray-900">
                                                Monday-Friday <br />
                                                8:00 am to 5:00 pm
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="inline-flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shrink-0">
                                            <svg
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>

                                        <div className="ml-6">
                                            <h3 className="text-lg font-semibold text-blue-600">Our Address</h3>
                                            <p className="mt-2 text-lg font-normal text-gray-900">
                                                3773 HOWARD HUGHES PKWY STE 500S, Las Vegas, NV, 89169 - 6014, USA
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="inline-flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shrink-0">
                                            <svg
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>

                                        <div className="ml-6">
                                            <h3 className="text-lg font-semibold text-blue-600">Get In Touch</h3>
                                            <p className="mt-2 text-lg font-normal text-gray-900">+1-800-900-1761</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white shadow-xl rounded-2xl">
                            <div className="p-6 sm:p-10">
                                <form action="https://submit-form.com/jl0nthgl" className="space-y-6">
                                    <input type="hidden" value="https://namestar.com/" name="_redirect" />
                                    <input type="hidden" value={info.ip.country} name="Country" />
                                    <input type="hidden" value={info.ip.city} name="City" />
                                    <input type="hidden" value={info.ip.ip} name="IP:" />
                                    <div>
                                        <label for="name" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Your name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="email" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="message" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Write your message{' '}
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Write us your question here..."
                                                rows="4"
                                                className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 resize-y rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center mt-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                name="terms"
                                                id="terms"
                                                required
                                                onClick={handleClick}
                                                checked={checked}
                                                className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                                            />
                                        </div>

                                        <div className="ml-3 text-base">
                                            <label for="terms" className="font-normal text-gray-900 font-pj">
                                                {' '}
                                                I agree to the{' '}
                                                <Link href="/terms">
                                                    <a className="font-medium text-gray-700 text-base-content underline">Terms</a>
                                                </Link>{' '}
                                                &{' '}
                                                <Link href="/privacy">
                                                    <a className="font-medium text-gray-700 text-base-content underline">Privacy Policy</a>
                                                </Link>
                                                .
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                    >
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer {...data.footer} />
        </div>
    );
};

export default withRouter(Contact);
