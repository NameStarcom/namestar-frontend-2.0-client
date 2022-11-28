import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ArrowRightIcon from '../../svgs/arrow-right';
import FavoriteCardIcon from '../../molecules/Favorite/FavoritesCardIcon';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { HiSearch } from 'react-icons/hi';
// import 'antd/dist/antd.css';
import { Alphabet } from '../../molecules/Alphabet';
import { DownOutlined } from '@ant-design/icons';
import _, {
    map,
    slice,
    includes,
    filter,
    min,
    maxBy,
    toNumber,
    size,
    gte,
    lte,
    sortBy,
    groupBy,
    startsWith,
    endsWith,
    split,
    head,
    last,
    chain,
    upperFirst,
    intersection,
    isEmpty,
    lowerCase,
    isEqual,
    difference
} from 'lodash';
import { Layout, List, Input, Button, Slider, InputNumber, Select, Row, Col, Checkbox, Menu, Dropdown } from 'antd';
import { withRouter } from 'next/router';

//const { Search } = Input;

const { Option } = Select;
const valuesForSearchDirection = ['Full', 'Starts', 'Ends'];
const sortList = ['Recently added', 'Alphabetically', 'Price Ascending', 'Price Descending', 'Length short-long', 'Length long-short'];

const isBetween = (value, price) => gte(toNumber(price), value[0]) && lte(toNumber(price), value[1]);

// const url = `${process.env.NODE_ENV === 'production' ? process.env.NEXT_URL : 'http://localhost:3000'}/`;

const Search = (props) => {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    // const [whois, setWhois] = useState({});
    // const woisData = (name) => {
    //     const w = _.get(whois, name);
    //     if (w) {
    //         // console.log(whois, name, w);
    //         return w.error ? 'Golden Error' : w.registrar;
    //     }
    //     return 'Golden';
    // };

    const domains = map(props.domains, (domain) => {
        return {
            id: domain.id,
            name: domain.name,
            price: domain.price === null ? [0] : domain.price,
            category: domain.category === null ? [] : JSON.parse(domain.category),
            tld: [split(domain.name, '.')[1].toLowerCase()]
        };
    });

    const sorted = domains.sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1));
    const min = Number(
        chain(sorted)
            .filter(({ price }) => price >= 0)
            .head()
            .get('price')
            .value()
    );
    const max = Number(sorted[sorted.length - 1].price);

    const minL = _.min(map(domains, ({ name }) => head(split(name, '.')).length));

    const maxL = _.max(map(domains, ({ name }) => head(split(name, '.')).length));
    const categories = chain(map(domains, 'category')).flatMap().uniq().value();
    const tld = chain(map(domains, 'tld')).flatMap().uniq().value();
    const [checkedTld, setCheckedTld] = useState([]);
    const [data, setData] = useState(domains);
    const [toggle, setToggle] = useState(false);
    const [searchValue, setSearchValue] = useState(props.router.query.name ? props.router.query.name : '');
    const [categoryValue, setCategoryValue] = useState(props.router.query.category ? props.router.query.category : '');
    const [rangePrice, setRangePrice] = useState([min, max]);
    const [rangeLength, setRangeLength] = useState([minL, maxL]);
    const [checked, setChecked] = useState([]);
    const [selectedText, setSelectedText] = useState('Full');
    const [open, setOpen] = useState(false);
    const [end, setEnd] = useState(20);
    const [endFilter, setEndFilter] = useState(15);
    const start = 0;

    const [sortItem, setSortItem] = useState(sortList[0]);

    function handleToggle() {
        document.body.classList.add('modal-open');
        setToggle(true);
    }

    function handleToggleClose() {
        setTimeout(() => {
            setToggle(false);
        }, 500);
    }

    const handleSortItemChange = (value) => {
        setSortItem(value);
    };

    const resetFilter = () => {
        setData(domains);
        setSearchValue('');
        setRangePrice([min, max]);
        setRangeLength([minL, maxL]);
        setChecked([]);
        setCheckedTld([]);
    };
    const slideChange = (value) => {
        setRangePrice(value);
    };
    const slideChangeLength = (value) => {
        setRangeLength(value);
    };
    const handleChange = ({ target }) => {
        const { value } = target;
        setSearchValue(isEmpty(value) ? '' : value);
    };
    const toggleSlider = () => setOpen(!open);

    const onChange = (value) => {
        setChecked(value);
    };
    const onChangeTld = (value) => {
        setCheckedTld(value);
    };
    useEffect(() => {
        setChecked(categoryValue ? [categoryValue === 'real-estate' ? categoryValue.split('-').join(' ') : categoryValue.split('-').join('/')] : null);
    }, []);

    const formatter = (value) => `${value === 0 ? 'Offer' : '$' + value}`;

    const lengthFormatter = (value) => `${value}L`;

    const menu = (
        <Menu
            onClick={({ key }) => {
                setSelectedText(key);
            }}
        >
            {map(valuesForSearchDirection, (value) => (
                <Menu.Item key={value}>{value}</Menu.Item>
            ))}
        </Menu>
    );
    const dropDownMenu = (
        <Dropdown overlay={menu}>
            <button className="lg:inline-block">
                {selectedText} <DownOutlined />
            </button>
        </Dropdown>
    );
    const fulldataSource = useMemo(
        () =>
            filter(domains, ({ name, price, category, tld }) => {
                const filterText = head(split(name, '.'));
                const is = isBetween(rangePrice, price);
                const isL = isBetween(rangeLength, filterText.length);
                const answer =
                    (is && isL && isEqual(selectedText, 'Full') && includes(filterText.toLowerCase(), searchValue.toLowerCase())) ||
                    (is && isL && isEqual(selectedText, 'Starts') && startsWith(filterText.toLowerCase(), searchValue.toLowerCase())) ||
                    (is && isL && isEqual(selectedText, 'Ends') && endsWith(filterText.toLowerCase(), searchValue.toLowerCase()));
                const tldChecked = !isEmpty(checkedTld) ? answer && !isEmpty(intersection(tld, checkedTld)) : answer;
                const categoryChecked = !isEmpty(checked) ? answer && !isEmpty(intersection(category, checked)) : answer;
                return categoryChecked && tldChecked;
            }).sort((a, b) =>
                isEqual(sortItem, 'Alphabetically')
                    ? a.name < b.name
                        ? -1
                        : 1
                    : isEqual(sortItem, 'Price Ascending')
                    ? Number(a.price) < Number(b.price)
                        ? -1
                        : 1
                    : isEqual(sortItem, 'Price Descending')
                    ? Number(a.price) < Number(b.price)
                        ? 1
                        : -1
                    : isEqual(sortItem, 'Length short-long')
                    ? head(split(a.name, '.')).length < head(split(b.name, '.')).length
                        ? -1
                        : 1
                    : isEqual(sortItem, 'Length long-short')
                    ? head(split(a.name, '.')).length < head(split(b.name, '.')).length
                        ? 1
                        : -1
                    : isEqual(sortItem, 'Recently added')
                    ? a.count < b.count
                        ? 1
                        : -1
                    : 1
            ),
        [domains, sortItem, rangePrice, rangeLength, selectedText, checkedTld, checked, searchValue]
    );
    const dataSource = slice(fulldataSource, start, end);
    // useEffect(() => {
    //     axios.post('/api/whois', { data: dataSource }).then((res) => {
    //         const newWhois = {};
    //         map(res.data, (value) => {
    //             _.assignIn(newWhois, value);
    //         });
    //         setWhois({
    //             ...whois,
    //             ...newWhois
    //         });
    //     });
    // }, [dataSource, end]);
    const len = fulldataSource.length;
    const checkmeout = (value) => {
        setChecked(difference(checked, [value]));
    };
    return (
        <section>
            <div className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 font-pj">Explore domain names</h2>
                        {/* <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 font-pj">
                                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                            </p> */}
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
                            <input
                                type="text"
                                placeholder="Search by keyword..."
                                className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
                                value={searchValue}
                                onChange={handleChange}
                            />

                            <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
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

                    {/* <p className="mt-6 text-sm font-normal text-center text-gray-500 font-pj">No ads. No trails. No commitments</p> */}
                </div>
            </div>

            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-6 md:mb-12 xl:mb-20">
                <div className="grid grid-cols-1 mt-6 md:mt-10 lg:grid-cols-7 gap-x-8 gap-y-10">
                    <div className="hidden space-y-8 lg:block lg:col-span-2 bg-white p-6 h-fit-content shadow-xl" style={{ height: 'fit-content' }}>
                        <button
                            type="button"
                            onClick={resetFilter}
                            className="inline-flex items-center p-1 -m-1 text-base font-bold text-gray-900 transition-all duration-200 focus:outline-none group"
                        >
                            <svg
                                className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-900"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Reset All Filters
                        </button>

                        <hr className="mt-5 border-gray-200" />

                        <div className="flow-root mt-5">
                            <div className="-my-6 divide-y divide-gray-200">
                                <div className="py-6 space-y-7">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-1 -m-1 text-base font-bold text-gray-900 transition-all duration-200 group focus:outline-none"
                                    >
                                        Extensions
                                        <svg
                                            className="w-5 h-5 text-gray-400 group-hover:text-gray-900"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                                        </svg>
                                    </button>

                                    <Checkbox.Group
                                        options={map(tld, (t) => {
                                            return {
                                                label: <p className="text-sm ml-1 font-medium text-gray-700">.{t.toLowerCase()}</p>,
                                                value: t
                                            };
                                        })}
                                        value={checkedTld}
                                        onChange={onChangeTld}
                                    />
                                </div>

                                <div className="py-6 space-y-7">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-1 -m-1 text-base font-bold text-gray-900 transition-all duration-200 group focus:outline-none"
                                    >
                                        Length
                                        <svg
                                            className="w-5 h-5 text-gray-400 group-hover:text-gray-900"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="space-y-6 pb-12 w-56 m-auto">
                                        <Slider
                                            range
                                            value={rangeLength}
                                            onChange={slideChangeLength}
                                            min={minL}
                                            max={maxL}
                                            tipFormatter={lengthFormatter}
                                            // tooltipPlacement="bottom"
                                            // tooltipVisible
                                        />
                                    </div>
                                </div>

                                <div className="py-6 space-y-7">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-1 -m-1 text-base font-bold text-gray-900 transition-all duration-200 group focus:outline-none"
                                    >
                                        Price
                                        <svg
                                            className="w-5 h-5 text-gray-400 group-hover:text-gray-900"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="space-y-6 pb-12 w-56 m-auto">
                                        <Slider
                                            range
                                            value={rangePrice}
                                            onChange={slideChange}
                                            min={min}
                                            max={max}
                                            step={100}
                                            tipFormatter={formatter}
                                            // tooltipPlacement="bottom"
                                            // tooltipVisible
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="lg:col-span-3 xl:col-span-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-bold text-gray-900">{len} results</h1>
                                <div>
                                    <button
                                        type="button"
                                        className="items-center justify-center hidden px-4 py-2 text-sm font-bold text-gray-700 transition-all duration-200 border border-gray-300 rounded-md md:inline-flex hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
                                    >
                                        Sort Items
                                        <svg
                                            className="w-4 h-4 ml-2 -mr-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* <Select value={sortItem} style={{ width: 120 }} onChange={handleSortItemChange}>
                                        {map(sortList, (name) => (
                                            <Option key={name}>{name}</Option>
                                        ))}
                                    </Select> */}

                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 text-sm font-bold text-gray-700 transition-all duration-200 border border-gray-300 rounded-md md:hidden hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
                                    >
                                        All Filters
                                        <svg
                                            className="w-4 h-4 ml-2 -mr-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <hr className="mt-6 border-gray-200" />

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
                                                                <p className="text-base font-bold text-gray-900 cursor-pointer">{row.name}</p>
                                                            </Link>
                                                            {/* <p className="mt-1.5 text-sm font-medium text-gray-500">{woisData(row.name.toLowerCase())}</p> */}
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
                                                                <FavoriteCardIcon
                                                                    name={row.name}
                                                                    id={row.name}
                                                                    price={row.bin}
                                                                    slug={row.name}
                                                                    dark={true}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                />
                                <div className="flex justify-center mt-8">
                                    {len >= end && (
                                        <button
                                            onClick={() => {
                                                end < domains.length && setEnd(end + 20);
                                            }}
                                            href="#"
                                            className="inline-flex
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
                            rounded-xl"
                                        >
                                            Load More
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouter(Search);
