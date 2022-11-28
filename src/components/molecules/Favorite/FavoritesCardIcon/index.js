import React from 'react';
import { useCart } from 'react-use-cart';
import { FaRegStar, FaStar } from 'react-icons/fa';

const FavoritesCardIcon = (props) => {
    const { addItem, inCart, removeItem } = useCart();

    const products = [
        {
            id: props.name,
            name: props.name,
            price: props.price,
            slug: props.slug
        }
    ];
    return (
        <div>
            {products.map((p) => {
                const alreadyAdded = inCart(p.id);
                return (
                    <div key={p.id}>
                        {!alreadyAdded && (
                            <div onClick={() => addItem(p)}>
                                <div>
                                    <FaRegStar className={`${props.dark ? 'text-gray-500' : 'text-white'} w-4 h-4`} />
                                </div>
                            </div>
                        )}
                        {alreadyAdded && (
                            <div onClick={() => removeItem(p.id)}>
                                <div>
                                    <FaStar className={`${props.dark ? 'text-red-500' : 'text-white'} w-4 h-4`} />
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default FavoritesCardIcon;
