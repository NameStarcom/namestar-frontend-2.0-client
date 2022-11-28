import React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import _, { map, chain, uniq } from 'lodash';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { startCase, toLower } from 'lodash';

export default function CategorySection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    const styles = props.styles || {};

    const domains = map(props.domains, (domain) => {
        return {
            id: domain.objectID,
            name: domain.domain,
            price: domain.price === null ? [] : domain.price,
            category: domain.category === null ? [] : JSON.parse(domain.category)
        };
    });

    const categories = chain(map(domains, 'category')).flatMap().uniq().value();

    // Search Filter forward:

    const router = useRouter();

    function handleSearchFilter(e) {
        e.preventDefault();
        router.push({
            pathname: '/search',
            query: { category: startCase(toLower(e.target.value)) }
        });
    }

    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-hero-section',
                colors,
                'flex',
                'bg-base-200',
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
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    {props.title && (
                        <h1
                            className={classNames(
                                'text-2xl ml-2 text-base-content flex-1 justify-center md:flex md:justify-start font-bold',
                                styles.title ? mapStyles(styles.title) : null,
                                {
                                    'mt-4': props.badge?.label
                                }
                            )}
                            data-sb-field-path=".title"
                        >
                            {props.title}
                        </h1>
                    )}
                    <div className="container my-12 mx-auto px-4 lg:px-6 pb-16">
                        <div className="-mx-1 lg:-mx-4 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 2xl:grid-cols-4 lg:gap-x-8">
                            {map(categories, (category) => (
                                // <Link href={`/${category}`}>
                                //     <a>{category}</a>
                                // </Link>
                                <div className="card compact rounded-full bg-base-100 transition-all shadow-lg text-center mt-8 sm:mt-0">
                                    <div className="card-body">
                                        <Link href={`/search`}>
                                            <a className="flex justify-center w-full">
                                                <input
                                                    type="button"
                                                    className="cursor-pointer bg-transparent text-base-content font-bold"
                                                    onClick={handleSearchFilter}
                                                    value={category.toUpperCase()}
                                                />
                                                {/* <div className="text-base-content mx-4 font-bold">{item.count}</div> */}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
