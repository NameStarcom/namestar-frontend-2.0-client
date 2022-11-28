import React from 'react';

const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
        currency: 'USD'
    }).format(value);

export default function price(props) {
    return (
        <>
            ${numberFormat(Math.round(props.postPrice))}
        </>
    );
}
