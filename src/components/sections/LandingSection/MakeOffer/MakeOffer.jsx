import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { BsPlayBtn, BsArrowRight } from 'react-icons/bs';
import { CgCloseO } from 'react-icons/cg';
import Link from 'next/link';

const URL = 'https://ip.nf/me.json';

const MakeOffer = (props) => {
    const [passOffer, setpassOffer] = useState('');
    const [error, setError] = useState(false);
    const [checked, setChecked] = useState(false);
    const [info, setInfo] = useState({ ip: '' });
    const [showModal, setShowModal] = React.useState(false);
    const closeModal = () => setShowModal(!showModal);

    useEffect(() => {
        fetch(URL, { method: 'get' })
            .then((response) => response.json())
            .then((data) => {
                setInfo({ ...data });
            });
    }, []);

    const handleClick = () => setChecked(!checked);

    const handleChange = (e) => {
        setpassOffer(e.target.value);
    };

    const offerError = passOffer < props.minOffer;

    const submitHandler = (event) => {
        // event.preventDefault();
        // this will trigger the error validation
        if (!passOffer.trim()) {
            setError(true);
            return;
        }
        if (passOffer < props.minOffer) {
            setError(true);
            return;
        } else setError(false);

        setShowModal(true);
        // add the rest of the logic here
        // if (width < 640) {
        //     window.scrollTo(0, 0);
        //     return;
        // }
    };

    return (
        <>
            <form>
                <input
                    className="placeholder-gray-600 block w-full px-4 py-4 mt-4 text-gray-900 bg-white border focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none rounded-xl"
                    type="number"
                    placeholder={error && !passOffer ? 'Enter value: USD' : 'My offer in USD'}
                    value={passOffer}
                    required
                    name="offer"
                    onChange={handleChange}
                />
                <div className="relative mt-8">
                    <div className="absolute -inset-4">
                        <div
                            className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
                            style={{
                                background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                            }}
                        ></div>
                    </div>
                    <button
                        type={error && !passOffer ? 'submit' : 'button'}
                        onClick={submitHandler}
                        class="flex relative items-center justify-center w-full px-8 py-4 mt-5 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                    >
                        {error && offerError ? <p>Min Offer - ${props.minOffer}</p> : <p>Make Offer</p>}
                        <BsArrowRight className="ml-3 w-6 h-6" />
                    </button>
                </div>
            </form>
            {showModal ? (
                <div className="absolute bg-white p-8 h-full w-full top-0 left-0">
                    <div>
                        <div className="flex justify-between">
                            <div className="">
                                <h2 className="font-extrabold text-gray-900 font-pj leading-tight text-xl">Your Offer: ${passOffer} USD</h2>
                                <p className="mt-2 text-gray-900">For {props.title}</p>
                            </div>
                            <div onClick={closeModal}>
                                <CgCloseO className="text-gray-900 w-6 h-6 cursor-pointer" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <form action="https://submit-form.com/GbSDNsZP">
                                <input type="hidden" value="https://namestar.com/" name="_redirect" />
                                {/*Domain Hidden*/}
                                <input type="hidden" value={props.title} name="domain" />
                                <input type="hidden" value={`$${passOffer} USD`} name="offer" />
                                {/*IP Hidden*/}
                                <input type="hidden" value={info.ip.country} name="Country" />
                                <input type="hidden" value={info.ip.city} name="City" />
                                <input type="hidden" value={info.ip.ip} name="IP:" />
                                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                                    <div>
                                        <div class="mt-4">
                                            <input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                required
                                                autoComplete="first-name first_name"
                                                placeholder="First Name"
                                                class="block w-full px-4 py-4 text-gray-900 bg-white border focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none rounded-xl"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="mt-4">
                                            <input
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                required
                                                autoComplete="given-name last_name"
                                                placeholder="Last Name"
                                                class="block w-full px-4 py-4 text-gray-900 bg-white border focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="mt-4">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            required
                                            placeholder="Email address"
                                            class="block w-full px-4 py-4 text-gray-900 bg-white border focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div class="mt-4">
                                        <input
                                            type="phone"
                                            name="phone_number"
                                            id="phone_number"
                                            autoComplete="tel"
                                            required
                                            placeholder="Phone Number"
                                            class="block w-full px-4 py-4 text-gray-900 bg-white border focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center justify-between mt-4">
                                        <label for="" class="text-base font-medium text-gray-900 font-pj">
                                            {' '}
                                            Do you represent a Company?{' '}
                                        </label>
                                    </div>
                                    <div class="mt-4">
                                        <input
                                            type="text"
                                            name="company_name"
                                            id="company_name"
                                            placeholder="Company Name"
                                            class="block w-full px-4 py-4 text-gray-900 bg-white border focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none rounded-xl"
                                        />
                                    </div>
                                </div>

                                <div class="relative flex items-center mt-4">
                                    <div class="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            id="terms"
                                            required
                                            onClick={handleClick}
                                            checked={checked}
                                            class="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                                        />
                                    </div>

                                    <div class="ml-3 text-base">
                                        <label for="terms" class="font-normal text-gray-900 font-pj">
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
                                    class="flex items-center justify-center w-full px-8 py-4 mt-5 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                                >
                                    Send Offer
                                </button>
                                {/* <div>
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 text-base-content">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="input input-bordered w-full text-base-content"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 text-base-content">
                                        Phone
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone_number"
                                            id="phone_number"
                                            autoComplete="tel"
                                            className="input input-bordered w-full text-base-content"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 text-base-content">
                                        Offer
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            id="offer"
                                            placeholder="USD"
                                            name="offer"
                                            className="input input-bordered w-full text-base-content"
                                        />
                                    </div>
                                </div> */}
                                {/* <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-base-content">
                                        Message
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            style={{ height: '4.5rem' }}
                                            id="message"
                                            name="message"
                                            rows="4"
                                            className="input input-bordered w-full text-base-content"
                                        ></textarea>
                                    </div>
                                </div> */}
                                {/* <div className="sm:col-span-2">
                                    <div className="inline-flex space-x-1.5 items-center justify-start">
                                        <input type="checkbox" className="checkbox checkbox-md" required onClick={handleClick} checked={checked} />
                                        <div className="ml-3">
                                            <p className="text-sm sm:text-base text-gray-500 dark:text-base-content">
                                                I agree to the{' '}
                                                <Link href="/terms">
                                                    <a className="font-medium text-gray-700 text-base-content underline">Terms</a>
                                                </Link>
                                                &{' '}
                                                <Link href="/privacy">
                                                    <a className="font-medium text-gray-700 text-base-content underline">Privacy Policy</a>
                                                </Link>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <button type="submit" className="btn btn-primary w-full">
                                        Send Offer
                                    </button>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default MakeOffer;
