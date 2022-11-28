import * as React from 'react';
import classNames from 'classnames';
// import ThemeMode from '../../atoms/ThemeMode';
// import { ThemeContext } from '../../atoms/ThemeContext';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { useRouter } from 'next/router';

import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import Favorites from '../../molecules/Favorite/List';
import { useCart } from 'react-use-cart';

export default function Header(props) {
    const { isEmpty, items } = useCart();

    const primaryColors = props.primaryColors || 'colors-a';
    const headerStyles = props.styles?.self || {};
    const headerWidth = headerStyles.width || 'narrow';
    const primaryLinks = props.primaryLinks || [];
    const [header, setHeader] = useState('header1');
    const [toggle, setToggle] = useState(false);
    // const { theme, setTheme } = React.useContext(ThemeContext);
    const { isSticky } = props;
    function handleToggle() {
        document.body.classList.add('modal-open');
        setToggle(true);
    }

    const listenScrollEvent = (event) => {
        if (window.scrollY < 1) {
            return setHeader('header1');
        } else if (window.scrollY > 0) {
            return setHeader('header2');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    function handleToggleClose() {
        setTimeout(() => {
            setToggle(false);
        }, 500);
    }

    const [searchInput, setSearchInput] = useState('');
    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    }

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/search',
            query: { name: searchInput }
        });
    };

    const keyRef = useRef(null);

    const handleKeypress = (e) => {
        if (e.key === 'Enter') {
            keyRef.current.click();
        }
    };
    return (
        <header
            className={classNames(
                'sb-component',
                'sb-component-header bg-black',
                primaryColors,
                isSticky ? 'sticky top-0 z-20' : 'relative',
                headerStyles.padding || 'py-5 px-4',
                'header2' ? 'md:sticky md:bg-black' : 'md:bg-transparent transition-all duration-200',
                'top-0'
            )}
            data-sb-field-path={`${props.annotationPrefix}:header`}
        >
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center relative">
                    <Link href="/" aria-label={props.title} className="sb-header-logo flex items-center rounded outline-none">
                        <Image
                            className={classNames({
                                'mr-2': props.isTitleVisible
                            })}
                            src="/images/logo.svg"
                            alt="NameStar"
                            width={182}
                            height={48}
                        />
                    </Link>
                    <div className="xl:hidden">
                        <label htmlFor="my-drawer-4" onClick={handleToggle} className="navbar-burger focus:outline-none text-primary">
                            <svg className="cursor-pointer block h-6 w-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </label>
                    </div>
                    {primaryLinks.length > 0 && (
                        <ul
                            className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-8"
                            data-sb-field-path=".primaryLinks"
                        >
                            {listOfLinks(primaryLinks)}
                        </ul>
                    )}
                    <div className="hidden xl:inline-flex w-full max-w-sm p-4 justify-end">
                        {/* <div className="form-control mr-4">
                            <div className="input-group">
                                <input
                                    onChange={handleSearchInput}
                                    onKeyPress={handleKeypress}
                                    type="text"
                                    placeholder="Search…"
                                    className="input input-bordered"
                                />
                                <Link href="/search">
                                    <a className="btn btn-square" ref={keyRef} onClick={handleClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div> */}
                        {/* <button className="btn btn-square btn-ghost btn-active"><ThemeMode /></button> */}
                        <label htmlFor="my-drawer-4" className="btn btn-ghost bg-gray-900 drawer-button ml-2 indicator" onClick={handleToggle}>
                            <div>
                                <FaRegStar className="text-xl" />
                                {!isEmpty && <span className="indicator-item badge badge-error text-neutral-content">{items.length}</span>}
                            </div>
                        </label>
                        <a
                            href="https://admin.namestar.com"
                            title=""
                            className="inline-flex items-center justify-center ml-4 px-6 py-3 text-base font-bold leading-none text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Login
                        </a>
                    </div>

                    <div
                        style={{
                            zIndex: toggle ? '100' : '-10',
                            maxHeight: toggle ? '100vh' : '0px'
                        }}
                        className={`fixed top-0 inset-x-0 drawer drawer-end`}
                    >
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle"></input>
                        <div className="flex flex-col items-center justify-center drawer-content">
                            <div className="container relative overflow-hidden drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle"></input>
                                <div
                                    className="relative pt-6 pb-16 sm:pb-24"
                                    data-todo-x-data="Components.popover({ open: false, focus: true })"
                                    data-todo-x-init="init()"
                                    data-todo-at-keydown-escape="onEscape"
                                    data-todo-at-close-popover-group-window="onClosePopoverGroup"
                                >
                                    {/* Main */}
                                </div>
                            </div>
                        </div>
                        <div className="drawer-side">
                            <label onClick={handleToggleClose} htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="menu p-4 overflow-y-auto w-72 sm:w-80 bg-white text-base-content">
                                <div className="xl:hidden">
                                    <ul className="mb-10 space-y-5" data-sb-field-path=".primaryLinks">
                                        {listOfLinks(primaryLinks, true)}
                                    </ul>
                                </div>
                                <Favorites />
                                <a
                                    href="https://admin.namestar.com"
                                    title=""
                                    className="inline-flex absolute bottom-[2rem] w-[90%] items-center justify-center px-6 py-3 text-base font-bold leading-none text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                >
                                    Login
                                </a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

function listOfLinks(links, inMobileMenu = false) {
    return links.map((link, index) => (
        <li key={index} className="text-lg font-bold text-black lg:text-gray-200">
            <Action {...link} className={classNames(inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`.${index}`} />
        </li>
    ));
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
