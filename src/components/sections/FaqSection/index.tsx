import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Action from '../../atoms/Action';
import ChevronIcon from '../../svgs/chevron-right';

export default function FaqSection(props) {
    const cssId = props.elementId || null;
    const styles = props.styles || {};
    const faqItems = props.items || [];
    const actions = props.actions || [];
    return (
        <section id={cssId} {...getDataAttrs(props)} className="container m-auto relative py-12 sm:py-16 lg:pb-24 ">
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-4 xl:grid-cols-3">
                    <div className="lg:col-span-2 text-left md:mb-8 xl:pr-8">
                        <div className="col-span-2">
                            <p className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj" data-sb-field-path=".title">
                                {props.title}
                            </p>
                            <div className="divide-y divide-gray-900 py-12">
                                {faqItems.length > 0 && (
                                    <div className="-my-4 divide-y divide-gray-900" data-sb-field-path=".items">
                                        {faqItems.map((item, index) => (
                                            <FaqItem key={index} {...item} data-sb-field-path={`.${index}`} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FaqItem(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='py-6'>
            <div
                className="flex items-center justify-between w-full space-x-6 text-base font-bold text-left text-gray-900"
                data-sb-field-path={props['data-sb-field-path']}
            >
                {props.question && (
                    <h3 className="flex-1 cursor-pointer" onClick={() => setIsActive(!isActive)}>
                        <span data-sb-field-path=".question">{props.question}</span>
                    </h3>
                )}
                {isActive ? (
                    <span aria-hidden="true">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                ) : (
                    <span aria-hidden="true">
                        <svg className="w-5 h-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </span>
                )}
            </div>
            {props.answer && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown text-gray-900', 'mt-6', !isActive ? 'hidden' : null)}
                    data-sb-field-path=".answer"
                >
                    {props.answer}
                </Markdown>
            )}
        </div>
    );
}
