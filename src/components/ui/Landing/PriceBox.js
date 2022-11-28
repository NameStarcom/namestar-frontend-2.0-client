import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { IoMdRadioButtonOff } from 'react-icons/io';

const { Panel } = Collapse;

export default function PriceBox() {
    return (
        <div>
            <Collapse accordion ghost defaultActiveKey={['1']} expandIcon={({ isActive }) => (isActive ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />)}>
                <Panel
                    header={
                        <div className="flex justify-between w-full">
                            <p className="font-bold text-xl">Buy Now</p>
                            <p className="font-bold text-xl">$15,000 USD</p>
                        </div>
                    }
                    key="1"
                >
                    <p className="text-base text-darkBlueGray-400 leading-8 font-normal">You pay a fixed amount, and receive total ownership of this domain.</p>
                </Panel>
                <Panel
                    header={
                        <div className="flex justify-between w-full">
                            <p className="font-bold text-xl">Pay in instalments</p>
                            <p className="font-bold text-xl">$1,200/mo</p>
                        </div>
                    }
                    key="2"
                >
                    <p>
                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households
                        across the world.
                    </p>
                </Panel>
            </Collapse>
            <div className="p-4">
                <a
                    className="block py-5 px-10 mt-3 md:mx-auto w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="#"
                >
                    Buy Now
                </a>
            </div>
            <ul className="p-6 border-b border-gray-100" data-path="0.1.0.0.0.1.0.1">
                <li className="py-2 flex items-center text-lg" data-path="0.1.0.0.0.1.0.1.3">
                    <svg
                        className="mr-2"
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-2-2"
                        data-path="0.1.0.0.0.1.0.1.3.1"
                    >
                        <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="#1F40FF"
                            data-path="0.1.0.0.0.1.0.1.3.1.0"
                        ></path>
                    </svg>
                    <span data-config-id="b1-4" data-path="0.1.0.0.0.1.0.1.3.2">
                        Domain name: name.com
                    </span>
                </li>
                <li className="py-2 flex items-center text-lg" data-path="0.1.0.0.0.1.0.1.3">
                    <svg
                        className="mr-2"
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-2-2"
                        data-path="0.1.0.0.0.1.0.1.3.1"
                    >
                        <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="#1F40FF"
                            data-path="0.1.0.0.0.1.0.1.3.1.0"
                        ></path>
                    </svg>
                    <span data-config-id="b1-4" data-path="0.1.0.0.0.1.0.1.3.2">
                        Free Transaction support
                    </span>
                </li>
                <li className="py-2 flex items-center text-lg" data-path="0.1.0.0.0.1.0.1.3">
                    <svg
                        className="mr-2"
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-2-2"
                        data-path="0.1.0.0.0.1.0.1.3.1"
                    >
                        <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="#1F40FF"
                            data-path="0.1.0.0.0.1.0.1.3.1.0"
                        ></path>
                    </svg>
                    <span data-config-id="b1-4" data-path="0.1.0.0.0.1.0.1.3.2">
                        Secure payments
                    </span>
                </li>
            </ul>
            <div className="flex flex-wrap sm:justify-end lg:justify-between mt-8" data-path="0.0.3.1.0">
                <img
                    className="mr-1 w-[72px] 2xl:w-20"
                    src="https://shuffle.dev/uinel-assets/brands/mastercard.svg"
                    alt=""
                    data-config-id="auto-img-7-5"
                    data-path="0.0.3.1.0.0"
                />
                <img
                    className="mr-1 w-[72px] 2xl:w-20"
                    src="https://shuffle.dev/uinel-assets/brands/paypal.svg"
                    alt=""
                    data-config-id="auto-img-8-5"
                    data-path="0.0.3.1.0.1"
                />
                <img
                    className="mr-1 w-[72px] 2xl:w-20"
                    src="https://shuffle.dev/uinel-assets/brands/visa.svg"
                    alt=""
                    data-config-id="auto-img-9-5"
                    data-path="0.0.3.1.0.2"
                />
                <img
                    className="w-[72px] 2xl:w-20"
                    src="https://shuffle.dev/uinel-assets/brands/american-express.svg"
                    alt=""
                    data-config-id="auto-img-10-5"
                    data-path="0.0.3.1.0.3"
                />
            </div>
        </div>
    );
}
