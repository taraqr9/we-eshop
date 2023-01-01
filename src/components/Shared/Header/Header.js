import React from 'react';
// import { BiPhoneOutgoingBiEnvelope } from "react-icons/sl";
import { BiCurrentLocation, BiPhoneOutgoing, BiEnvelope, BiExit } from "react-icons/bi";
import HeaderSec from '../HeaderSec/HeaderSec';
const Header = () => {
    return (
        <div>
            <section className='bg-bgWhite p-3 text-sm font-openSans font-[600] text-[11px]'>
                <div className='container mx-auto flex lg:flex-row' style={{ max: "1100px" }}>
                    <div className='flex-1 flex'>
                        <div className="flex flex-row">
                            <BiPhoneOutgoing className='text-primary text-2xl font-semibold'></BiPhoneOutgoing>
                            <span className='ml-2'> +88012 3456 7894</span>
                        </div>
                        <div className="flex flex-row">
                            <BiEnvelope className='ml-4  text-primary text-2xl font-semibold'></BiEnvelope>
                            <span className='ml-2'> eshop@gmail.com</span>
                        </div>
                        {/* <i className='fa fa-envelope mr-2.5'></i> */}
                        {/* <label> support@ui-lib.com</label> */}
                    </div>
                    <div className='flex-2'>
                        {/* <label className='mr-7'>Theme FAQ"s</label>
                        <label className='mr-7'>Need Help?</label>
                        <span>🏳️‍⚧️</span>
                        <label className='mr-7'>EN</label>
                        <span>🏳️‍⚧️</span>
                        <label className='mr-7'>USD</label> */}
                        <div className='flex-2 flex'>
                            <div className="flex flex-row">
                                <BiCurrentLocation className=' text-primary text-2xl font-semibold'></BiCurrentLocation>
                                <span className='ml-2'> Shop Location</span>
                            </div>
                            <div className="flex flex-row">
                                <BiExit className='ml-4  text-primary text-2xl font-semibold'></BiExit>
                                <span className='ml-2'> Login</span>
                            </div>
                            {/* <i className='fa fa-envelope mr-2.5'></i> */}
                            {/* <label> support@ui-lib.com</label> */}
                        </div>
                    </div>

                </div>
            </section>
            <HeaderSec></HeaderSec>
        </div>
    );
};

export default Header;