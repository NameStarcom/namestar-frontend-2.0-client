import * as React from 'react';
import FavoriteCardIcon from '../../molecules/Favorite/FavoritesCardIcon';
import Link from 'next/link';
import ArrowRightIcon from '../../svgs/arrow-right';

export default function DomainCard(domain) {
    return (
        <div className="p-6 card bg-base-100 hover:bg-neutral-hover transition-all shadow-xl">
            <div className="flex flex-col font-semibold">
                <div className="cursor-pointer rounded-md text-base-content focus:outline-none focus:ring-2 focus:ring-indigo-500 justify-end flex">
                    <FavoriteCardIcon name={domain.domain} id={domain.domain} price={domain.price} slug={domain.domain} />
                </div>
                <a className="block mt-4 mb-2">
                    <h3 className="text-2xl font-bold text-center mt-4 mb-8 text-base-content">
                        <Link href={`/domain/${domain.domain.toLowerCase()}`}>
                            <a className="flex flex-col items-center">
                                {domain.domain.split('.')[0]}
                                <div className="badge badge-primary top-6 left-6 absolute">{'.' + domain.domain.split('.').pop()}</div>
                            </a>
                        </Link>
                    </h3>
                </a>
                <div className="mt-3 flex justify-between text-base-content">
                    <Link href={`/domain/${domain.domain.toLowerCase()}`}>
                        <a className="sb-component sb-component-block sb-component-link flex">
                            {domain.status === 'sold' ? (
                                ''
                            ) : (
                                <>
                                    <span>{domain.price ? 'Buy Now' : 'Make Offer'}</span>
                                    <ArrowRightIcon className="fill-current h-5 w-5 ml-3" />
                                </>
                            )}
                        </a>
                    </Link>
                    {domain.status === 'sold' ? 'SOLD' : domain.price && <span>${domain.price}</span>}
                </div>
            </div>
        </div>
    );
}
