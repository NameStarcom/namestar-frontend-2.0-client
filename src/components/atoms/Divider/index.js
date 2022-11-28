import React from 'react';

const Divider = ({ title }) => {
    return (
        <>
            <div className="py-2">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-3 bg-base-100 text-lg font-medium text-base-content">{title ? title : 'Or'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Divider;
