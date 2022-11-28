import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Action from '../../atoms/Action';
import ChevronIcon from '../../svgs/chevron-right';

export default function WhatsNextSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const styles = props.styles || {};
    const sectionWidth = styles.self?.width || 'wide';
    const sectionHeight = styles.self?.height || 'auto';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';
    const stepItems = props.items || [];
    const actions = props.actions || [];
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
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    <div className="max-w-6xl 2xl:max-w-7xl m-auto">
                        <p className="relative text-3xl font-extrabold leading-10 pb-8 text-base-content">What's Next</p>
                        <div className="card shadow-xl p-8 bg-base-100">
                            <ul className="w-full steps mt-8 -mb-12">
                                {stepItems.map((item, index) => (
                                    <StepItem key={index} {...item} data-sb-field-path={`.${index}`} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StepItem(props) {
    return (
        <>
            <div className="step step-primary text-xl p-2 mb-8">
                {props.title && (
                    <li className="font-bold mt-2 text-base-content" data-sb-field-path=".title">
                        {props.title}
                    </li>
                )}
                {props.description && (
                    <p className="text-base text-base-content/70 p-4 h-40 sm:h-32 overflow-hidden " data-sb-field-path=".description">
                        {props.description}
                    </p>
                )}
            </div>
        </>
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
