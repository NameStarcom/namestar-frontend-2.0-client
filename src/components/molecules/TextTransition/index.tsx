import React, { Fragment, useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function Transition(props) {
    const [index, setIndex] = useState(0);
    const { list } = props;
    const TEXTS = list.map((text) => text);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <Fragment>
            <TextTransition inline={true} delay={100} noOverflow text={TEXTS[index % TEXTS.length]} springConfig={presets.gentle} />
        </Fragment>
    );
}
