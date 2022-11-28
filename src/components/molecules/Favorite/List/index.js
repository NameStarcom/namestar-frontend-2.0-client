import React from 'react';
import { useCart } from 'react-use-cart';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Favorites(props) {
    const { isEmpty, items, removeItem, emptyCart } = useCart();

    if (isEmpty) return <p className="p-5 text-gray-900">Your Starred List is currently empty.</p>;

    return (
        <>
            <div className="flex justify-between flex-row mb-4">
                <h3 className="text-lg font-bold text-gray-900">Starred</h3>
                {!isEmpty && (
                    <div
                        onClick={emptyCart}
                        className="text-xs font-semibold text-gray-900 bg-gray-50 border border-gray-300 rounded-full inline-flex items-center px-2.5 py-1 cursor-pointer"
                    >
                        Empty Favorites
                    </div>
                )}
            </div>
            <div className="mb-4">
                <div className="py-2">
                    <div className="max-w-2xl mx-auto mr-2">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {items.map(
                    (item) =>
                        item.id !== 'cookie' && (
                            <div key={item.id} className="flex justify-between flex-row mb-4">
                                <Link className="w-3/6" href={`/domain/${item.name.toLowerCase()}`}>
                                    <a className="text-sm font-semibold text-gray-900 w-[60%]">{item.name}</a>
                                </Link>
                                <p className='text-gray-900 text-sm'>{item.price > 0 ? '$' + item.price : ''}</p>
                                <div className="cursor-pointer self-center mr-2 text-gray-900" onClick={() => removeItem(item.id)}>
                                    <FaTimes />
                                </div>
                            </div>
                        )
                )}
            </div>
        </>
    );
}
