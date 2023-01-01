import React from 'react';
import { BiCurrentLocation, BiPhoneOutgoing, BiEnvelope, BiExit } from "react-icons/bi";
import { Link } from 'react-router-dom';
const HeaderSec = () => {
    return (
        <div>
            <section className='bg-[#F7F7F7] p-6 text-sm font-poppins'>
                <div className="container mx-auto" style={{ max: "1100px" }}>
                    <div className="flex flex-row items-center">
                        <div className='flex-1'>
                            <h3 className='font-[700] text-3xl text-[48px] '><span className='font-semibold text-primary'>Q</span>SHOP</h3>
                        </div>
                        <div className='flex-1'>
                            <div className="form-control">
                                <label className="input-group">
                                    <span  className='bg-primary text-white'>All</span>
                                    <input type="text" placeholder="10" className="input input-bordered" />
                                    <span className='bg-primary text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="flex center">
                                <BiCurrentLocation className='mr-5'></BiCurrentLocation>
                                <BiCurrentLocation className='mr-5'></BiCurrentLocation>
                                <BiCurrentLocation className='mr-5'></BiCurrentLocation>
                                <BiCurrentLocation className='mr-5'></BiCurrentLocation>
                                <BiCurrentLocation className='mr-0'></BiCurrentLocation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeaderSec;