import React from 'react';
import { useEffect, useState, Fragment } from 'react';
import { CartProvider } from 'react-use-cart';
import Link from 'next/link';
import Router from 'next/router';
import CookieConsent from 'react-cookie-consent';
import NProgress from 'nprogress';
import '../css/main.css';
import '../css/antd.css';
import '../css/nprogress.css';

export default function MyApp({ Component, pageProps }) {

    const [LazyComponent, setLazyComponent] = useState(null);
    const [render, setRender] = useState(false);
    const loadLazyComponent = async () => {
        if (LazyComponent !== null) {
            return;
        }

        // import default export of `lazy.js` module
        const { default: lazyModule } = await import('../components/service/useExternalScripts');
        // create React component so it can be rendered
        const LazyElement = React.createElement(lazyModule, {
            // pass props to component here
        });
        setLazyComponent(LazyElement);
    };

    useEffect(() => {
        loadLazyComponent();
        setTimeout(() => {
            setRender(true);
        }, 6500);
    }, []);
      
    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        Router.events.on('routeChangeStart', handleRouteStart);
        Router.events.on('routeChangeComplete', handleRouteDone);
        Router.events.on('routeChangeError', handleRouteDone);

        return () => {
            // Make sure to remove the event handler on unmount!
            Router.events.off('routeChangeStart', handleRouteStart);
            Router.events.off('routeChangeComplete', handleRouteDone);
            Router.events.off('routeChangeError', handleRouteDone);
        };
    }, []);
    return (
        <CartProvider>
            {/* <Script src="https://cdn.boei.help/hello.js" async defer strategy="lazyOnload" /> */}
            {/* <Script
                id="HelpCFWidgetScript"
                src="https://my.abhisi.com:443/app/HelpWidget/HelpWidgetScript.js?connectionSettings=d061b4d2-d4ba-677d-2e06-b1881fc4a5e6@abhisimail.com&frontendUrl=https://my.abhisi.com:443&backendUrl=https://abhisibackend.azurewebsites.net/api/"
            /> */}
            <Fragment>{render && <>{LazyComponent}</>}</Fragment>
            <Component {...pageProps} />
            {/* <CookieConsent
                    debug={false}
                    buttonClasses="btn btn-secondary btn-sm"
                    location="bottom"
                    buttonText="Got it!"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: '#2B373B' }}
                    buttonStyle={{ background: '#e92751', color: 'rgb(43 55 59)', fontSize: '13px', borderRadius: '4px' }}
                    expires={150}
                >
                    We use cookies to optimise site functionality and give you the best possible experience.{' '}
                    <span>
                        <Link href="/cookie-policy">
                            <a className="text-primary">Learn more</a>
                        </Link>
                    </span>
                </CookieConsent> */}
        </CartProvider>
    );
}
