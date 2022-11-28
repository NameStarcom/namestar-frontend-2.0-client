import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Link from 'next/link';
import axios from 'axios';
import _ from 'lodash';
import Slider from './Slider'

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

const DomainSection = (props) => {

    // const all = JSON.parse(props.count)

    const filteredDomains = _.filter(props.domains, function (o) {
        return o.category;
    });
    const shortDomains = _.filter(props.domains, function (o) {
        return _.split(o.name, ".")[0].length <= 5;
    });

    const domains = _.take(shortDomains, 20);

    const [whois, setWhois] = useState([]);

    // useEffect(() => {
    //     axios.post('/api/whois', { data: domains }).then((res) => {
    //         const newWhois = {};
    //         _.map(res.data, (value) => {
    //             _.assignIn(newWhois, value);
    //         });
    //         setWhois({
    //             ...whois,
    //             ...newWhois
    //         });
    //     });
    // }, [props.domains]);

    // const [LazyComponent, setLazyComponent] = useState(null);
    // const loadLazyComponent = async () => {
    //     if (LazyComponent !== null) {
    //         return;
    //     }
    //     // import default export of `lazy.js` module
    //     const { default: lazyModule } = await import('./Slider');
    //     // create React component so it can be rendered
    //     const LazyElement = React.createElement(lazyModule, {
    //         // pass props to component here
    //         domains: filteredDomains,
    //         variant: props.variant,
    //         isAutoPlay: props.isAutoPlay
    //     });
    //     setLazyComponent(LazyElement);
    // };

    // useEffect(() => {
    //     setTimeout(() => {
    //         loadLazyComponent();
    //     }, 50);
    // }, []); //eslint-disable-line

    const cssId = props.elementId || null;
    const cssCustomClass = props.customClass || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    const styles = props.styles || {};
    const actions = props.actions || [];
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-text-section mt-[-8rem] pt-28',
                'bg-gray-50',
                cssCustomClass,
                colors,
                'flex',
                'flex-col',
                'justify-center',
                mapMinHeightStyles(sectionHeight),
                sectionStyles.margin,
                sectionStyles.padding || 'py-12 px-4',
                sectionStyles.borderColor,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null
            )}
            style={{
                borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
            }}
        >
            <div className={classNames('flex', 'container px-4 mx-auto 2xl:max-w-7xl sm:px-6 lg:px-8', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    {/* <h3 className="ml-4 mb-4">{variant} domains</h3> */}
                    {/* {props.title && (
                        <h1
                            className={classNames(
                                'text-2xl text-base-content flex-1 px-2 md:flex justify-start font-bold featured-title',
                                styles.title ? mapStyles(styles.title) : null,
                                {
                                    'mt-4': props.badge?.label
                                }
                            )}
                            data-sb-field-path=".title"
                        >
                            {props.title}
                        </h1>
                    )} */}
                    <div class="text-center sm:flex sm:items-end sm:space-x-16 w-full justify-between">
                        <h2 class="max-w-xs text-2xl font-bold text-gray-900 shrink-0">Domains For Sale</h2>
                    </div>
                    <Slider domains={domains} whois={whois} variant={props.variant} isAutoPlay={props.isAutoPlay} />

                    <div className="w-full text-center my-4">
                        <Link href="/search" title="">
                            <a
                                title=""
                                class="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
                            >
                                {' '}
                                Check all domains{' '}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DomainSection;
