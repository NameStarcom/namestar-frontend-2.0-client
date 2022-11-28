import React from 'react';

export default function Logos() {
    return (
        <div>
            <section className="py-12">
                <div className="container px-4 py-4 mx-auto">
                    <h2 className="mb-16 font-heading font-medium text-center text-6xl leading-relaxed">Trusted by brands all over the world</h2>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/3 lg:w-1/6 px-2 mb-4 lg:mb-0">
                            <div className="flex items-center justify-center h-28 px-4 rounded-5xl">
                                <img className="h-12" src="https://shuffle.dev/uinel-assets/brands/docusign.png" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/6 px-2 mb-4 lg:mb-0">
                            <div className="flex items-center justify-center h-28 px-4 rounded-5xl">
                                <img className="h-12" src="https://shuffle.dev/uinel-assets/brands/british-business-bank.png" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/6 px-2 mb-4 lg:mb-0 brightness-0">
                            <div className="flex items-center justify-center h-28 px-4 rounded-5xl">
                                <img className="h-12" src="https://shuffle.dev/uinel-assets/brands/fedex.png" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/6 px-2 mb-4 md:mb-0 brightness-0	">
                            <div className="flex items-center justify-center h-28 px-4 rounded-5xl">
                                <img className="h-16" src="https://shuffle.dev/uinel-assets/brands/starling-bank.png" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/6 px-2 mb-4 md:mb-0 brightness-0	">
                            <div className="flex items-center justify-center h-28 px-4 rounded-5xl">
                                <img className="h-22" src="https://shuffle.dev/uinel-assets/brands/zendesk.png" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/6 px-2 brightness-0	">
                            <div className="flex items-center justify-center h-28 px-4 rounded-5xl">
                                <img className="h-10" src="https://shuffle.dev/uinel-assets/brands/aol.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="bg-white py-24">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-16 font-heading font-medium text-center text-6xl leading-relaxed">Trusted by brands all over the world</h2>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-6 xl:mb-0">
                            <div className="flex items-center py-4 px-5 bg-black rounded-9xl">
                                <div className="flex items-center justify-center bg-white w-16 h-16 rounded-5xl shadow-sm">
                                    <img className="h-8" src="https://shuffle.dev/uinel-assets/brands/spotify.png" alt="" />
                                </div>
                                <p className="ml-6 text-xl text-white font-heading font-medium">Spotify</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-6 xl:mb-0">
                            <div className="flex items-center py-4 px-5 lg:mt-16 bg-black rounded-9xl">
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-5xl shadow-sm">
                                    <img className="h-8" src="https://shuffle.dev/uinel-assets/brands/slack.png" alt="" />
                                </div>
                                <p className="ml-6 text-xl text-white font-heading font-medium">Slack</p>
                            </div>
                        </div>
                        <div className="hidden xl:block xl:w-1/5 px-2 mb-6 xl:mb-0">
                            <div className="flex items-center py-4 px-5 lg:mt-16 bg-black rounded-9xl">
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-5xl shadow-sm">
                                    <img className="h-5" src="https://shuffle.dev/uinel-assets/brands/we-transfer.png" alt="" />
                                </div>
                                <p className="ml-6 text-xl text-white font-heading font-medium">WeTransfer</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-6 lg:mb-0">
                            <div className="flex items-center py-4 px-5 lg:mt-16 bg-black rounded-9xl">
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-5xl shadow-sm">
                                    <img className="h-8" src="https://shuffle.dev/uinel-assets/brands/miro.svg" alt="" />
                                </div>
                                <p className="ml-6 text-xl text-white font-heading font-medium">Miro</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-6 lg:mb-0">
                            <div className="flex items-center py-4 px-5 bg-black rounded-9xl">
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-5xl shadow-sm">
                                    <img className="h-8" src="https://shuffle.dev/uinel-assets/brands/dropbox.png" alt="" />
                                </div>
                                <p className="ml-6 text-xl text-white font-heading font-medium">WeTransfer</p>
                            </div>
                        </div>
                        <div className="xl:hidden w-full md:w-1/2 lg:w-1/4 px-2 mx-auto">
                            <div className="flex items-center py-4 px-5 bg-black rounded-9xl">
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-5xl shadow-sm">
                                    <img className="h-8" src="https://shuffle.dev/uinel-assets/brands/we-transfer.png" alt="" />
                                </div>
                                <p className="ml-6 text-xl text-white font-heading font-medium">WeTransfer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}
