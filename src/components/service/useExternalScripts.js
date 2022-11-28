import React from 'react';
import Script from 'next/script';

export default function useExternalScripts() {
    return (
        <div>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script strategy="lazyOnload">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
            </Script>
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            var _hoid = _hoid || []; _hoid.push('ho_6nENk4YXpeFZ9W2S7Q0TArqHD8ChUB1wvGy5s3cuafmxJMK');
            var heyopath = (('https:' == document.location.protocol) ? 'https://www.heyoliver.com/webroot/ho-ui/v2/' :
            'http://www.heyoliver.com/webroot/ho-ui/v2/');
            var heyop = (('https:' == document.location.protocol) ? 'https://' : 'http://');
            var heyospt = document.createElement('script'); heyospt.type = 'text/javascript';
            heyospt.async = true; heyospt.src = heyopath + 'ho2.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(heyospt, s);
  `
                }}
            />
        </div>
    );
}
