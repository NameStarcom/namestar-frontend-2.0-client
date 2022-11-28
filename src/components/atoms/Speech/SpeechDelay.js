import React, { useState, Fragment } from 'react';
import { BsPlayBtn, BsFillPlayFill } from 'react-icons/bs';
import _ from 'lodash'

const SpeechDelay = (props) => {
    const [LazyComponent, setLazyComponent] = useState(null);
    const [render, setRender] = useState(true);
    const loadLazyComponent = async () => {
        if (LazyComponent !== null) {
            return;
        }

        // import default export of `lazy.js` module
        const { default: lazyModule } = await import('./Speech');
        // create React component so it can be rendered
        const LazyElement = React.createElement(lazyModule, {
            // pass props to component here
            title: props.title
        });
        setLazyComponent(LazyElement);
    };

    const handleClick = () => {
        loadLazyComponent();
        setRender(!render);
        setTimeout(() => {
            setRender(true);
        }, 3000);
    };

    return (
        <Fragment>
            {props.longBtn ? (
                <a
                    onClick={handleClick}
                    title=""
                    className={`px-2 py-2 ${
                        _.split(props.title, '.')[0].length <= 10 ? 'text-base' : 'text-xs'
                    } flex items-center font-bold cursor-pointer text-gray-900 transition-all border border-gray-900 rounded-lg sm:px-4 hover:bg-gray-100 dration-200`}
                >
                    {' '}
                    <BsFillPlayFill className="mr-2 h-4 w-4" />
                    How to pronunce {props.title}
                </a>
            ) : (
                <div className="btn btn-ghost hover:bg-transparent bg-transparent flex-shrink-0" onClick={handleClick}>
                    <a>
                        <BsPlayBtn className="w-12 h-12" />
                    </a>
                </div>
            )}
            <Fragment>{render && <>{LazyComponent}</>}</Fragment>
        </Fragment>
    );
};

export default SpeechDelay;
