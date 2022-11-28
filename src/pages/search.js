import React, { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import FavoriteCardIcon from '../components/molecules/Favorite/FavoritesCardIcon';
import useMyState from '../components/service/useMyState';
import { Alphabet } from '../components/molecules/Alphabet';
import 'antd/lib/pagination/style/index.css';
import _ from 'lodash';
import { AutoComplete, List, Pagination } from 'antd';
import { withRouter } from 'next/router';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import data from '../../content/data/config.json';

const MyList = ({ dataSource }) => {
    return (
        <div className="flow-root mt-7">
            <List
                dataSource={dataSource}
                renderItem={(row, key) => (
                    <ul className=" border-b border-gray-200 ">
                        <li className="flex py-7" key={key}>
                            <div className="flex-shrink-0">
                                <div
                                    class={`${
                                        _.filter(Alphabet, _.matches({ letter: row.name.charAt(0).toLowerCase() }))[0].color
                                    } inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white w-10 h-10 rounded-xl font-pj`}
                                >
                                    {row.name.charAt(0).toUpperCase()}
                                </div>
                            </div>
                            <div className="flex-1 ml-5">
                                <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-5">
                                    <div className="pr-9 sm:pr-5">
                                        <Link href={`/domain/${row.name.toLowerCase()}`}>
                                            <p className="text-base font-bold text-gray-900 cursor-pointer mt-[5px]">{row.name}</p>
                                        </Link>
                                    </div>

                                    <div className="flex items-end justify-between mt-3 sm:justify-end sm:pr-14 sm:items-center sm:mt-0">
                                        {row.price > 0.1 && (
                                            <p className="flex-shrink-0 w-20 text-base font-bold text-left text-gray-900 sm:text-right sm:order-1 sm:mr-8">
                                                ${row.price}
                                            </p>
                                        )}

                                        <div className="sm:order-2">
                                            <span>
                                                {row.price > 0.1 ? (
                                                    <div className="relative inline-flex group">
                                                        <div
                                                            className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                                                            style={{
                                                                background:
                                                                    'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                                            }}
                                                        ></div>
                                                        <Link href={`/domain/${row.name.toLowerCase()}`}>
                                                            <a
                                                                title=""
                                                                className="min-w-[8rem] relative inline-flex items-center justify-center py-2.5 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-opacity-90 rounded-xl"
                                                                role="button"
                                                            >
                                                                Buy Now
                                                            </a>
                                                        </Link>
                                                    </div>
                                                ) : (
                                                    <Link href={`/domain/${row.name.toLowerCase()}`}>
                                                        <a
                                                            title=""
                                                            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                                                            role="button"
                                                        >
                                                            Make Offer
                                                        </a>
                                                    </Link>
                                                )}
                                            </span>
                                        </div>

                                        <div className="absolute top-0 sm:top-4 right-0 flex cursor-pointer">
                                            <FavoriteCardIcon name={row.name} id={row.name} price={row.bin} slug={row.name} dark={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                )}
            />
        </div>
    );
};

const Search = () => {
    const { rows, count, error, isLoading, setOffset, name, setName } = useMyState();
    const [allDomains, setAllDomains] = useState([]);
    const [curentPage, setCurrentPage] = useState(1);
    const onPagination = useCallback(
        (page, pageSize) => {
            setCurrentPage(page);
            setOffset(page * pageSize - pageSize);
        },
        [setOffset]
    );
    useEffect(() => {
        setAllDomains(rows);
    }, [rows]);
    return (
        <div>
            <Header {...data.header} />
            {error ? (
                <div>"error"</div>
            ) : isLoading && !name && !allDomains.length ? (
                <div>
                    <section>
                        <div className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <div className="max-w-2xl mx-auto text-center">
                                    <h2 className="text-4xl font-bold text-gray-900 font-pj">Explore domain names</h2>
                                </div>
                                <div className="relative max-w-2xl mx-auto mt-14">
                                    <div className="absolute -inset-x-2 -inset-y-5">
                                        <div
                                            className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                                            style={{
                                                background:
                                                    'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                            }}
                                        ></div>
                                    </div>

                                    <div className="relative">
                                        <AutoComplete
                                            placeholder="Search domains here"
                                            style={{
                                                width: '100%',
                                                display: 'block',
                                                paddingRight: '12px',
                                                paddingLeft: '12px',
                                                paddingTop: '14px',
                                                paddingBottom: '14px'
                                            }}
                                            value={name}
                                        />
                                        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-1 sm:flex sm:items-center sm:pr-3">
                                            <button
                                                className="
                            inline-flex
                            items-center
                            justify-center
                            w-full
                            px-8
                            py-4
                            text-base
                            font-bold
                            text-white
                            transition-all
                            duration-200
                            bg-gray-900
                            border border-transparent
                            sm:w-auto sm:py-3
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            font-pj
                            hover:bg-opacity-90
                            rounded-xl
                        "
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-6 md:mb-12 xl:mb-20">
                            <div className="flex">
                                <div className="m-auto lg:w-[60rem] mt-4 lg:mt-10">...is loading</div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <section>
                    <div className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="max-w-2xl mx-auto text-center">
                                <h2 className="text-4xl font-bold text-gray-900 font-pj">Explore domain names</h2>
                            </div>
                            <div className="relative max-w-2xl mx-auto mt-14">
                                <div className="absolute -inset-x-2 -inset-y-5">
                                    <div
                                        className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                                        style={{
                                            background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                        }}
                                    ></div>
                                </div>

                                <div className="relative">
                                    <AutoComplete
                                        placeholder="Search domains here"
                                        style={{
                                            width: '100%',
                                            display: 'block',
                                            paddingRight: '12px',
                                            paddingLeft: '12px',
                                            paddingTop: '14px',
                                            paddingBottom: '14px'
                                        }}
                                        value={name}
                                        onChange={_.throttle((value) => {
                                            setName(value);
                                        }, 300)}
                                    />
                                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-1 sm:flex sm:items-center sm:pr-3">
                                        <button
                                            className="
                            inline-flex
                            items-center
                            justify-center
                            w-full
                            px-8
                            py-4
                            text-base
                            font-bold
                            text-white
                            transition-all
                            duration-200
                            bg-gray-900
                            border border-transparent
                            sm:w-auto sm:py-3
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            font-pj
                            hover:bg-opacity-90
                            rounded-xl
                        "
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-6 md:mb-12 xl:mb-20">
                        <div className="flex">
                            <div className="m-auto lg:w-[60rem] mt-4 lg:mt-10">
                                <div className="lg:col-span-3 xl:col-span-4">
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-2xl font-bold text-gray-900">{count} results</h1>
                                    </div>
                                    <hr className="mt-6 border-gray-200" />

                                    <div className="flow-root mt-7">
                                        <MyList dataSource={allDomains} />
                                    </div>
                                    <div className="my-4 lg:my-6 text-center">
                                        {isLoading ? (
                                            <div>Loading more</div>
                                        ) : (
                                            <Pagination current={curentPage} total={count} onChange={onPagination} showSizeChanger={false} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <Footer {...data.footer} />
        </div>
    );
};

export default withRouter(Search);
