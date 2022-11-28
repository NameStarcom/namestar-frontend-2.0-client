import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export default function ImageBlock(props) {
    const { url, altText, width, height } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const styles = props.styles?.self || {};
    const imageOpacity = styles.opacity || styles.opacity === 0 ? styles.opacity : 100;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [`${annotationPrefix}`, `${annotationPrefix}.url#@src`, `${annotationPrefix}.altText#@alt`, `${annotationPrefix}.elementId#@id`];

    return (
        <Image
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
            src={url}
            alt={altText || ''}
            width={width}
            height={height}
            // style={{ opacity: imageOpacity * 0.01 }}
            data-sb-field-path={annotations.join(' ').trim()}
        />
    );
}
