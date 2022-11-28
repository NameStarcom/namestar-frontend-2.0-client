import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import _ from 'lodash';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { BsFillPlayFill } from 'react-icons/bs';
import { Speech } from '../../atoms';

export default function DetailSection(props) {
    
    const { data, availabilityCheck } = props;

    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const styles = props.styles || {};
    const sectionWidth = styles.self?.width || 'wide';
    const sectionHeight = styles.self?.height || 'auto';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';

    // useEffect(() => {
    //     fetch('https://epic-swirles.51-81-244-99.plesk.page/api/availability', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ domain })
    //     })
    //         .then(async (res) => {
    //             const a = await res.json();
    //             setCheckResponse(a);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);
    const domain = data.name.toLowerCase();
    const [whois, setWhois] = useState([]);
    const currentYear = new Date().getFullYear();
    const creationYear = whois ? Number(_.split(whois.creationDate, '-', 1)) : "2022";
    const registrar = whois.registrar;
    const length = _.split(domain, '.')[0].length;
    const tld = '.' + _.split(domain, '.')[1];

    const availableList = _.remove(availabilityCheck, (a) => {
        return a.domain === domain; //remove if color is green
    });

    useEffect(() => {
        const checkWhois = async () => {
            axios
                .post('/api/whois', {
                    data: domain
                })

                .then((res) =>
                    setWhois(res.data.status === false ? JSON.parse('{"creationDate":"2000", "registrar":"Godaddy"}') : res.data[0]), 
                )
                .catch((err) => console.log(err));
        };
        checkWhois();
    }, []);

    function capitalizeFirstLetter(str) {
        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }

    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                colors,
                'flex',
                'flex-col',
                'justify-center bg-[whitesmoke]',
                mapMinHeightStyles(sectionHeight),
                styles.self?.margin,
                styles.self?.padding || 'py-12',
                styles.self?.borderColor,
                styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : 'border-none',
                styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null
            )}
            style={{
                borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
            }}
        >
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    <section className="container m-auto relative py-12 sm:py-16">
                        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-4 xl:grid-cols-3">
                                <div className="lg:col-span-2 text-left md:mb-8 xl:pr-8">
                                    <div className="col-span-2">
                                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Taken Extenstion</h2>
                                        <p className="mt-5 text-lg font-normal text-gray-600 sm:mt-8 font-pj">
                                            If more extensions are taken for a given second-level domain, there are likely to be more opportunities for
                                            businesses to upgrade to this domain name.
                                        </p>
                                        <div className="relative mx-auto mt-8 md:mt-12 md:max-w-3xl">
                                            <div className="absolute -inset-4">
                                                <div
                                                    className="w-full h-full mx-auto opacity-30 blur-lg filter"
                                                    style={{
                                                        background:
                                                            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl py-4">
                                                {availabilityCheck.length < 1 ? (
                                                    <div class="px-6 sm:px-8">
                                                        <div class="sm:flex sm:items-center sm:space-x-12 py-4">
                                                            Loading ...
                                                        </div>
                                                    </div>
                                                ) : (
                                                    _.map(availabilityCheck, (a) => (
                                                        <div class="px-6 sm:px-8">
                                                            <div class="sm:flex sm:items-center sm:space-x-12 py-4">
                                                                <div class="flex-1">
                                                                    <p class="text-lg font-bold text-gray-900">{a.domain}</p>
                                                                </div>

                                                                <div class="flex flex-col mt-6 space-y-4 sm:mt-0">
                                                                    <div class="inline-flex items-center justify-center w-full px-10 py-2 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 border border-gray-300 rounded-lg sm:w-auto bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900">
                                                                        Taken
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                        <div class="text-left mt-24 mb-8">
                                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Domain Highlights</h2>
                                        </div>
                                        <div className="relative mx-auto mt-8 md:mt-12 md:max-w-3xl">
                                            <div className="absolute -inset-4">
                                                <div
                                                    className="w-full h-full mx-auto opacity-30 blur-lg filter"
                                                    style={{
                                                        background:
                                                            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
                                                <div className="p-6 md:px-10 md:py-9">
                                                    <div className="grid items-start grid-cols-1 md:grid-cols-8 gap-y-9 md:gap-y-0">
                                                        <div className="col-span-8 xl:col-span-4 xl:pr-2 space-y-9">
                                                            <div className="flex items-center">
                                                                <div className="">
                                                                    <p className="text-lg md:text-xl font-bold text-gray-900 font-pj">
                                                                        Aged domain - {currentYear - creationYear} years old
                                                                    </p>
                                                                    <p className="mt-1 text-sm font-normal text-gray-600 font-pj">
                                                                        This domain was first registered in {creationYear}. <br /> Aged domains will potentially
                                                                        rank higher in search results.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center">
                                                                <div className="">
                                                                    <p className="text-lg md:text-xl font-bold text-gray-900 font-pj">
                                                                        Registrar - {_.split(registrar, ',')[0]}
                                                                    </p>
                                                                    <p className="mt-1 text-sm font-normal text-gray-600 font-pj">
                                                                        This domain is registered at {registrar}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {length <= 7 && (
                                                                <div className="flex items-center">
                                                                    <div className="">
                                                                        <p className="text-lg md:text-xl font-bold text-gray-900 font-pj">Short Domain</p>
                                                                        <p className="mt-1 mb-8 text-sm font-normal text-gray-600 font-pj">
                                                                            This domain has only {length} letters...
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="col-span-8 xl:col-span-4 xl:pl-2 space-y-9">
                                                            {tld === '.com' && (
                                                                <div className="flex items-center">
                                                                    <div className="xl:ml-4">
                                                                        <p className="text-lg md:text-xl font-bold text-gray-900 font-pj">Dot-com domain</p>
                                                                        <p className="mt-1 text-sm font-normal text-gray-600 font-pj">
                                                                            {capitalizeFirstLetter(domain)} is a .com domain. Dot com domains are still the most
                                                                            popular and valuable extensions you can own.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            <div className="flex items-center">
                                                                <div className="xl:ml-4">
                                                                    <p className="text-lg md:text-xl font-bold text-gray-900 font-pj">How to pronounce</p>
                                                                    <p className="mt-1 mb-4 text-sm font-normal text-gray-600 font-pj">
                                                                        This is how {domain} could sound like
                                                                    </p>
                                                                    <Speech title={domain} longBtn={true} />
                                                                </div>
                                                            </div>

                                                            {/* <div className="flex items-center">
                                                                <div className="ml-4">
                                                                    <p className="text-lg font-bold text-gray-900 font-pj">Share Information</p>
                                                                    <p className="mt-1 text-sm font-normal text-gray-600 font-pj">Easily share your message</p>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left mt-24 mb-8">
                                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">What Happens Next?</h2>
                                        </div>
                                        <div className="">
                                            <div className="relative pb-10">
                                                <span className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12" aria-hidden="true"></span>

                                                <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                                                    <div className="flex items-start sm:items-center">
                                                        <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                                                            1
                                                        </div>
                                                        <p className="ml-6 text-lg md:text-xl font-medium text-gray-900 font-pj">
                                                            {data.bin > 0
                                                                ? 'Click on the Buy Now button and pay for the domain name.'
                                                                : 'Make an offer and we will contact you once accepted.'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="relative pb-10">
                                                <span className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12" aria-hidden="true"></span>

                                                <div className="absolute -mt-10 inset-y-8 -inset-x-1">
                                                    <div
                                                        className="w-full h-full mx-auto opacity-30 blur-lg filter"
                                                        style={{
                                                            background:
                                                                'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                                        }}
                                                    ></div>
                                                </div>

                                                <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                                                    <div className="flex items-start sm:items-center">
                                                        <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                                                            2
                                                        </div>
                                                        <p className="ml-6 text-lg md:text-xl font-medium text-gray-900 font-pj">
                                                            {data.bin > 0
                                                                ? 'Follow transfer instructions we provide after checkout.'
                                                                : 'We provide full transfer instructions uppon agreement.'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="relative pb-10">
                                                <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                                                    <div className="flex items-start sm:items-center">
                                                        <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                                                            3
                                                        </div>
                                                        <p className="ml-6 text-lg md:text-xl font-medium text-gray-900 font-pj">
                                                            Receive ownership of the domain name.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                                            Trusted by world class businesses
                                        </h2>
                                        <p className="mt-5 text-lg font-normal text-gray-600 sm:mt-8 font-pj">
                                            Behind every review is an experience that matters.
                                        </p>
                                        <div className="relative mt-8 md:mt-12 md:order-2">
                                            <div className="absolute -inset-1">
                                                <div
                                                    className="w-full h-full max-w-full opacity-30 blur-lg filter"
                                                    style={{
                                                        background:
                                                            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                                    }}
                                                ></div>
                                            </div>

                                            <div className="relative grid grid-cols-1 overflow-hidden border border-gray-200 divide-y divide-gray-200 md:max-w-none md:grid-cols-2 rounded-xl md:divide-x md:divide-y-0">
                                                <div className="flex flex-col overflow-hidden">
                                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                                                        <div className="flex-1">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            </div>
                                                        </div>

                                                        <div className="mt-10">
                                                            <blockquote>
                                                                <p className="text-lg text-gray-900 font-pj">
                                                                    “You made it so simple. I loved shopping on NameStar. Once I made my decisions, the
                                                                    purchasing process was effortless.”
                                                                </p>
                                                            </blockquote>
                                                            <p className="mt-8 text-lg font-bold text-gray-900 font-pj">Jerome Bell</p>
                                                            <p className="mt-1 text-base text-gray-600 font-pj">CTO, Waverio</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col overflow-hidden">
                                                    <div className="flex flex-col flex-1 p-6 bg-white lg:py-9 lg:px-10">
                                                        <div className="flex-1">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    className="w-5 h-5 text-[#FDB241]"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            </div>
                                                        </div>

                                                        <div className="mt-10">
                                                            <blockquote className="mb-16">
                                                                <p className="text-lg text-gray-900 font-pj">
                                                                    “Simply the best. Better than all the rest. No complaints, the process was polished and
                                                                    professional!”
                                                                </p>
                                                            </blockquote>
                                                            <p className="mt-8 text-lg font-bold text-gray-900 font-pj">Leslie Alexander</p>
                                                            <p className="mt-1 text-base text-gray-600 font-pj">President of Marketing, SS</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
