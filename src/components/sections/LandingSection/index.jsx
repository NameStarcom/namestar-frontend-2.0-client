import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import MakeOffer from './MakeOffer';
import Price from '../../atoms/Price';
import { Collapse, Slider, Popover } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import { Speech } from '../../atoms';
import FavoriteCardIcon from '../../molecules/Favorite/FavoritesCardIcon/index';
import classNames from 'classnames';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { FaRegStar } from 'react-icons/fa';
import Sticky from 'react-sticky-el';
import FaqSection from '../FaqSection';
import _ from 'lodash';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import DetailSection from '../DetailSection';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function LandingSection(props) {
    const { data } = props;

    const sampleData = {
        id: 'rec15aUTedFFra0NW',
        name: 'domain.com',
        price: 3395
    };

    // const [domain, setDomain] = useState(data === undefined ? sampleData.name : data.name.split('.')[0] + '.' + data.name.toLowerCase().split('.')[1]);

    const [domain, setDomain] = useState(data === undefined ? sampleData : data);

    const [active, setActive] = useState('');
    function handleChange(e) {
        setActive(e.target.value);
        setShowModal(true);
    }

    const date = new Date(domain.createdAt);
    const current = new Date(date.getFullYear(), date.getMonth() + 1, 1);

    const url = `/api/page-views?post=/domain/${encodeURIComponent(domain.name.toLowerCase())}&startDate=${_.split(domain.createdAt, 'T')[0]}`;

    const [pageViews, setPageViews] = useState('');

    useEffect(() => {
        // declare the data fetching function
        const fetchView = async () => {
            const data = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(async (res) => {
                const a = await res.json();
                setPageViews(a.views);
            });
            
        };

        // call the function
        fetchView(fetchView)
            // make sure to catch any error
            .catch(console.error);
    }, []);

    const canvasEl = useRef(null);

    const colors = {
        blue: {
            default: 'rgba(0, 106, 254, 1)',
            half: 'rgba(0, 106, 254, 0.5)',
            quarter: 'rgba(0, 106, 254, 0.25)',
            zero: 'rgba(0, 106, 254, 0)'
        },
        indigo: {
            default: 'rgba(80, 102, 120, 1)',
            quarter: 'rgba(80, 102, 120, 0.25)'
        }
    };

    useEffect(() => {
        const ctx = canvasEl.current.getContext('2d');
        // const ctx = document.getElementById("myChart");

        const gradient = ctx.createLinearGradient(0, 16, 0, 600);
        gradient.addColorStop(0, colors.blue.half);
        gradient.addColorStop(0.65, colors.blue.quarter);
        gradient.addColorStop(1, colors.blue.zero);

        const weight = [0, pageViews, 30];

        const labels = [date.toLocaleString('default', { month: 'long' }), current.toLocaleString('default', { month: 'long' }), "October"];
        const data = {
            labels: labels,
            datasets: [
                {
                    backgroundColor: gradient,
                    label: pageViews + ' monthly views',
                    data: weight,
                    fill: true,
                    borderWidth: 2,
                    borderColor: colors.blue.default,
                    lineTension: 0.2,
                    pointBackgroundColor: colors.blue.default,
                    pointRadius: 3
                }
            ]
        };
        const config = {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 16
                            }
                        }
                    }
                }
            }
        };
        const myLineChart = new Chart(ctx, config);

        return function cleanup() {
            myLineChart.destroy();
        };
    });

    // Page views count
    // const { d } = useSWR(
    //     `/api/page-views?post=/domain/${encodeURIComponent(domain.name.toLowerCase())}`,
    //     async (url) => {
    //         const res = await fetch(url);
    //         return res.json();
    //     },
    //     { revalidateOnFocus: false }
    // );
    // const views = d?.pageViews;

    const cssId = props.elementId || null;
    // const colors = props.colors || 'colors-a';
    const styles = props.styles || {};
    const sectionWidth = styles.self?.width || 'wide';
    const sectionHeight = styles.self?.height || 'auto';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';
    const stepItems = props.items || [];
    const actions = props.actions || [];

    const handleClick = () => {
        setInstalment(!instalment);
    };

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(!showModal);

    const [instalment, setInstalment] = useState(false);
    // const { redirectToCheckout } = useShoppingCart();
    const [intervalValue, setIntervalValue] = useState(12);
    const [checkResponse, setCheckResponse] = useState([]);

    const publishableKey =
      "pk_live_51KjUXYAH23kN7e1JYDT9cPimTA08l47Issg1xyCUcfXQXyn12WzAVjO1fDrI1qHJMmskHYgobYdrLKl5cZana6FC00mJ0BNB02";
    const stripePromise = loadStripe(publishableKey);

    // const stripeUrl = `${url}create-checkout-session/?&mode=${
    //   instalment ? "subscription" : "payment"
    // }`;

    const stripeUrl = `${process.env.NODE_ENV === 'production' ? process.env.NEXT_URL : 'http://localhost:8080/api/'}create-checkout-session/?&mode=${
        instalment ? 'subscription' : 'payment'
    }`;

    const buyNow = async () => {
        const { id } = data;
        const stripe = await stripePromise;
        const response = await fetch(stripeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(instalment ? { id, recurring: { interval: 'month' }, intervalValue } : { id })
        })
            .then((res) => {
                return res.json();
            })
            .catch((error) => console.log(error));
        stripe.redirectToCheckout({ sessionId: response.sessionId });
    };

    useEffect(() => {
        fetch(`${process.env.NODE_ENV === 'production' ? process.env.NEXT_URL : 'http://localhost:8080/api/'}availability`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ domain })
        })
            .then(async (res) => {
                const a = await res.json();
                setCheckResponse(a);
            })
            .catch((error) => console.log(error));
    }, []);

    function callback(key) {
        console.log(key);
    }

    const { Panel } = Collapse;

    function formatter(value) {
        return `${value} Months`;
    }

    const slideChange = (value) => {
        setIntervalValue(value);
    };

    const marks = {
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
        8: '1',
        9: '1',
        10: '1',
        11: '1'
    };

    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'flex',
                'flex-col',
                'justify-center',
                mapMinHeightStyles(sectionHeight),
                styles.self?.margin,
                styles.self?.padding || 'py-12 px-4',
                styles.self?.borderColor,
                styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : 'border-none',
                styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null
            )}
            style={{
                borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
            }}
        >
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full block', mapMaxWidthStyles(sectionWidth))}>
                    <section className="container m-auto relative py-8 sm:py-12 lg:pb-40">
                        <div className="absolute bottom-0 right-0 overflow-hidden">
                            <img
                                className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
                                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
                                alt=""
                            />
                        </div>

                        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-4 xl:grid-cols-3">
                                <div className="lg:col-span-2 text-left md:mb-8 xl:pr-8 self-start">
                                    <h1 className="mb-4 font-bold leading-normal text-gray-900 sm:leading-tight sm:text-7xl lg:text-9xl font-pj">
                                        <span className="text-5xl md:text-8xl block font-medium">The Domain Name</span>
                                        <div className="flex items-center">
                                            <span className="relative">
                                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                                <span className="relative text-5xl md:text-8xl break-words leading-tight mr-4"> {domain.name} </span>
                                            </span>
                                            <div className="inline-flex -ml-3 mt-3">
                                                <Speech title={domain.name} />
                                            </div>
                                        </div>
                                        <span className="text-5xl md:text-8xl block font-medium">is for sale!</span>
                                    </h1>

                                    <p className="hidden md:block mt-2 text-lg text-gray-600 sm:mt-6 font-inter xl:pr-20">
                                        Become the owner of this domain name. Leading companies love to secure great domains for future investments.
                                    </p>
                                    <section className="hidden md:block mt-8 lg:mt-12">
                                        <div className="max-w-7xl">
                                            <div className="grid grid-cols-1 text-center gap-y-10 md:grid-cols-3 md:text-left">
                                                <div className="md:pr-6 lg:pr-12">
                                                    <svg width="44" height="44" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M31.0663 44.2667H41.3663V68.2667C41.3663 71.8 45.7663 73.4667 48.0996 70.8L73.333 42.1333C75.533 39.6333 73.7663 35.7333 70.433 35.7333H60.133V11.7333C60.133 8.2 55.733 6.53333 53.3996 9.2L28.1663 37.8667C25.9996 40.3667 27.7663 44.2667 31.0663 44.2667Z"
                                                            fill="#292D32"
                                                        />
                                                        <path
                                                            d="M28.3333 15.8333H5C3.63333 15.8333 2.5 14.7 2.5 13.3333C2.5 11.9667 3.63333 10.8333 5 10.8333H28.3333C29.7 10.8333 30.8333 11.9667 30.8333 13.3333C30.8333 14.7 29.7 15.8333 28.3333 15.8333Z"
                                                            fill="#292D32"
                                                        />
                                                        <path
                                                            d="M25 69.1667H5C3.63333 69.1667 2.5 68.0333 2.5 66.6667C2.5 65.3 3.63333 64.1667 5 64.1667H25C26.3667 64.1667 27.5 65.3 27.5 66.6667C27.5 68.0333 26.3667 69.1667 25 69.1667Z"
                                                            fill="#292D32"
                                                        />
                                                        <path
                                                            d="M15 42.5H5C3.63333 42.5 2.5 41.3667 2.5 40C2.5 38.6333 3.63333 37.5 5 37.5H15C16.3667 37.5 17.5 38.6333 17.5 40C17.5 41.3667 16.3667 42.5 15 42.5Z"
                                                            fill="#292D32"
                                                        />
                                                    </svg>

                                                    <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">Easy Transfers</h3>
                                                    <p className="mt-5 text-base text-gray-600 font-pj">
                                                        We provide full domain ownership transfer instructions at no additional cost.
                                                    </p>
                                                </div>

                                                <div className="w-56 h-px mx-auto bg-gray-200 md:hidden"></div>

                                                <div className="md:pr-6 lg:pr-12">
                                                    <svg
                                                        className="mx-auto m-2 text-gray-900 md:mx-0"
                                                        width="27"
                                                        height="35"
                                                        viewBox="0 0 27 35"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M13.3333 0C7.79365 0 3.33333 4.46032 3.33333 10V11.6667C1.5 11.6667 0 13.1667 0 15V31.6667C0 33.5 1.5 35 3.33333 35H23.3333C25.1667 35 26.6667 33.5 26.6667 31.6667V15C26.6667 13.1667 25.1667 11.6667 23.3333 11.6667V10C23.3333 4.46032 18.873 0 13.3333 0ZM13.3333 3.33333C17.127 3.33333 20 6.20635 20 10V11.6667H6.66667V10C6.66667 6.20635 9.53968 3.33333 13.3333 3.33333ZM13.3333 20C15.1667 20 16.6667 21.5 16.6667 23.3333C16.6667 25.1667 15.1667 26.6667 13.3333 26.6667C11.5 26.6667 10 25.1667 10 23.3333C10 21.5 11.5 20 13.3333 20Z"></path>
                                                    </svg>
                                                    <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">Buyer Protection</h3>
                                                    <p className="mt-5 text-base text-gray-600 font-pj">
                                                        We protect your information through SSL encryption & keep transfers simple and safe.
                                                    </p>
                                                </div>

                                                <div className="w-56 h-px mx-auto bg-gray-200 md:hidden"></div>

                                                <div className="md:pr-6 lg:pr-12">
                                                    <svg width="44" height="44" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M61.7992 13.7333L43.4659 6.86665C41.5659 6.16665 38.4659 6.16665 36.5659 6.86665L18.2325 13.7333C14.6992 15.0667 11.8325 19.2 11.8325 22.9667V49.9666C11.8325 52.6666 13.5992 56.2333 15.7659 57.8333L34.0992 71.5333C37.3325 73.9666 42.6325 73.9666 45.8659 71.5333L64.1992 57.8333C66.3659 56.2 68.1325 52.6666 68.1325 49.9666V22.9667C68.1659 19.2 65.2992 15.0667 61.7992 13.7333ZM51.5992 32.4L37.2659 46.7333C36.7659 47.2333 36.1325 47.4666 35.4992 47.4666C34.8659 47.4666 34.2325 47.2333 33.7325 46.7333L28.3992 41.3333C27.4325 40.3666 27.4325 38.7667 28.3992 37.8C29.3659 36.8333 30.9659 36.8333 31.9325 37.8L35.5325 41.4L48.0992 28.8333C49.0659 27.8666 50.6659 27.8666 51.6325 28.8333C52.5992 29.8 52.5992 31.4333 51.5992 32.4Z"
                                                            fill="#292D32"
                                                        />
                                                    </svg>

                                                    <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">No Hidden Fees</h3>
                                                    <p className="mt-5 text-base text-gray-600 font-pj">
                                                        Our pricing is completely transparent, no hidden costs. No complicated math.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="lg:col-span-2 xl:col-span-1 lg:pl-12 xl:pl-0">
                                    <Sticky topOffset={-160} bottomOffset={260} stickyClassName="md:mt-[9rem] mobileStickyOff z-[9]" boundaryElement=".block">
                                        <div className="relative">
                                            <div className="absolute -inset-4">
                                                <div
                                                    className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                                                    style={{
                                                        background:
                                                            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                                    }}
                                                ></div>
                                            </div>

                                            <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
                                                <div className="p-6 md:p-8">
                                                    {domain.bin > 1 ? (
                                                        <>
                                                            <div className="flex items-center justify-between" data-path="0.0.1.3.0.0.0.0">
                                                                <p
                                                                    className={`${
                                                                        domain.name.split('.')[1].length <= 12 ? 'text-xl' : 'text-lg'
                                                                    } font-extrabold text-gray-900 font-pj pb-4 leading-tight max-w-[90%]`}
                                                                >
                                                                    Buy <a href="#">{domain.name}</a>
                                                                </p>
                                                                <div className="text-xl cursor-pointer absolute top-9 right-8">
                                                                    <FavoriteCardIcon
                                                                        name={domain.name}
                                                                        id={domain.name}
                                                                        price={domain.bin}
                                                                        slug={domain.name}
                                                                        dark={true}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <Collapse
                                                                accordion
                                                                ghost
                                                                defaultActiveKey={['1']}
                                                                expandIcon={({ isActive }) => (isActive ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />)}
                                                            >
                                                                <Panel
                                                                    header={
                                                                        <div className="flex justify-between w-full">
                                                                            <p className="font-bold text-lg" onClick={() => setInstalment(false)}>
                                                                                Buy Now
                                                                            </p>
                                                                            <p className="font-bold text-lg">
                                                                                <Price postPrice={domain.bin} /> USD
                                                                            </p>
                                                                        </div>
                                                                    }
                                                                    key="1"
                                                                >
                                                                    <p className="text-base font-normal leading-7 text-gray-600 font-pj">
                                                                        You pay a fixed amount, and receive total ownership of this domain.
                                                                    </p>
                                                                </Panel>
                                                                <Panel
                                                                    header={
                                                                        <div className="flex justify-between w-full">
                                                                            <p className="font-bold text-lg" onClick={() => setInstalment(true)}>
                                                                                Buy in instalments
                                                                            </p>
                                                                            <div className="items-center">
                                                                                <p className="font-bold text-lg">
                                                                                    <Price postPrice={domain.bin / intervalValue} /> USD
                                                                                </p>
                                                                                <p className="absolute right-0 mt-[-4px]">/Month</p>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                    key="2"
                                                                >
                                                                    <p className="text-base font-normal leading-7 text-gray-600 font-pj mt-2">
                                                                        You pay a recurring monthly instalment, and receive total ownership once all payments
                                                                        are completed.
                                                                    </p>

                                                                    <h2 className="mt-6 mb-6 text-lg font-bold text-gray-900 font-pj">
                                                                        <div className="flex items-center">
                                                                            Pay <Price postPrice={domain.bin / intervalValue} />
                                                                            /month
                                                                            <span className="ml-1 2xl:text-xl text-lg sm:font-semibold block sm:inline">
                                                                                for {intervalValue} months
                                                                            </span>
                                                                        </div>
                                                                        <Popover
                                                                            placement="topLeft"
                                                                            trigger="click"
                                                                            content={
                                                                                <div>
                                                                                    <p className="font-bold">Price overview:</p>
                                                                                    <p>Full ownership after {intervalValue} months</p>
                                                                                    <p>Long term service fee 15%</p>
                                                                                    <p>
                                                                                        Total purchase price <Price postPrice={domain.bin} /> USD
                                                                                    </p>
                                                                                </div>
                                                                            }
                                                                            title={<p className="text-xl font-bold">Instalment Condition</p>}
                                                                        >
                                                                            <span className="text-sm sm:font-semibold inline-block underline cursor-pointer">
                                                                                More information
                                                                            </span>
                                                                        </Popover>
                                                                    </h2>
                                                                    {/* <span className="text-sm sm:font-semibold sm:inline underline">More information</span> */}
                                                                    <Slider
                                                                        defaultValue={12}
                                                                        onChange={slideChange}
                                                                        min={2}
                                                                        max={12}
                                                                        step={1}
                                                                        marks={marks}
                                                                        // tipFormatter={formatter}
                                                                        // tooltipPlacement="bottom"
                                                                        tooltipVisible={false}
                                                                    />
                                                                    {/* <ReactSlider
                                                                min={2}
                                                                step={1}
                                                                max={12}
                                                                defaultValue={12}
                                                                className="horizontal-slider"
                                                                thumbClassName="example-thumb"
                                                                trackClassName="example-track"
                                                                renderThumb={(props, state) => (
                                                                    <div {...props}>
                                                                        <div className={`flex font-bold absolute -mt-12 ${state.valueNow === 6 && '-right-2'}`}>
                                                                            <p className="text-base-content">{state.valueNow}</p>{' '}
                                                                            <span className="ml-1 text-base-content">Months</span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                onChange={slideChange}
                                                            /> */}
                                                                </Panel>
                                                                {/* <Panel
                                                                    header={
                                                                        <div className="flex justify-between w-full">
                                                                            <p className="font-bold text-lg">Make Offer</p>
                                                                        </div>
                                                                    }
                                                                    key="3"
                                                                >
                                                                    <p className="text-base font-normal leading-7 text-gray-600 font-pj">
                                                                        Uppon agreement, you pay a fixed amount, and receive total ownership of this domain.
                                                                    </p>
                                                                </Panel> */}
                                                            </Collapse>
                                                            <div className="relative mt-8">
                                                                <div className="absolute -inset-4">
                                                                    <div
                                                                        className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
                                                                        style={{
                                                                            background:
                                                                                'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                                                        }}
                                                                    ></div>
                                                                </div>

                                                                <div className="relative space-y-6">
                                                                    <a
                                                                        title=""
                                                                        className="flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600"
                                                                        role="button"
                                                                        onClick={buyNow}
                                                                    >
                                                                        BUY NOW
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="flex items-center justify-between" data-path="0.0.1.3.0.0.0.0">
                                                                <p className="text-xl pb-4 font-extrabold text-gray-900 font-pj leading-tight">Make an offer</p>
                                                                <div className="text-xl cursor-pointer absolute top-9 right-8">
                                                                    <FavoriteCardIcon
                                                                        name={domain.name}
                                                                        id={domain.name}
                                                                        price={domain.bin}
                                                                        slug={domain.name}
                                                                        dark={true}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p className="text-base font-normal mb-6 leading-7 text-gray-600 font-pj">
                                                                Uppon agreement you pay a fixed amount, and receive total ownership of this domain.
                                                            </p>
                                                            <MakeOffer title={domain.name} />
                                                            {/* <div class="mt-2.5">
                                                                <input
                                                                    type="number"
                                                                    name=""
                                                                    id=""
                                                                    placeholder="My offer in USD"
                                                                    class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none rounded-xl"
                                                                />
                                                            </div>
                                                            <div className="relative mt-8">
                                                                <div className="absolute -inset-4">
                                                                    <div
                                                                        className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
                                                                        style={{
                                                                            background:
                                                                                'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                                                        }}
                                                                    ></div>
                                                                </div>

                                                                <div className="relative space-y-6">
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        className="flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600"
                                                                        role="button"
                                                                    >
                                                                        NEXT
                                                                        <BsArrowRight className="ml-3 w-6 h-6" />
                                                                    </a>
                                                                </div>
                                                            </div> */}
                                                        </>
                                                    )}

                                                    {/* <p className="mt-4 text-base font-normal text-center text-gray-900 font-pj">
                                                        Need a better price?{' '}
                                                        <a
                                                            href="#"
                                                            title=""
                                                            className="font-bold rounded focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:underline"
                                                        >
                                                            Make an offer
                                                        </a>
                                                    </p> */}
                                                    <ul className="mt-8 space-y-5 lg:mt-12">
                                                        <li className="flex items-center justify-left text-gray-900 lg:justify-start">
                                                            <svg
                                                                className="w-6 h-6"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                            <span className="ml-3 text-lg font-bold font-pj"> Domain name: {domain.name.toLowerCase()} </span>
                                                        </li>

                                                        <li className="flex items-center justify-left text-gray-900 lg:justify-start">
                                                            <svg
                                                                className="w-6 h-6"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                            <span className="ml-3 text-lg font-bold font-pj"> Free Transaction support </span>
                                                        </li>

                                                        <li className="flex items-center justify-left text-gray-900 lg:justify-start">
                                                            <svg
                                                                className="w-6 h-6"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                            <span className="ml-3 text-lg font-bold font-pj"> Secure payments </span>
                                                        </li>
                                                    </ul>
                                                    <div className="mt-6 sm:mt-8">
                                                        <img className="w-full" src="/images/payment-methods.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Sticky>
                                </div>
                            </div>
                        </div>
                    </section>
                    <DetailSection data={domain} availabilityCheck={checkResponse} />
                    {pageViews > 1 ? (
                        <section className="container m-auto relative py-12 sm:py-16 lg:pt-24">
                            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-4 xl:grid-cols-3">
                                    <div className="lg:col-span-2 text-left md:mb-8 xl:pr-8">
                                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj pb-12">
                                            Traffic stats for this domain
                                        </h2>
                                        <canvas id="myChart" ref={canvasEl} height="100" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <div className='hidden'>
                            <canvas id="myChart" ref={canvasEl} height="100" />
                        </div>
                    )}

                    <FaqSection {...props} />
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
