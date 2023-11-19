import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Subscribe = () => {
    return (
        <>
            <div className="subscribe-area container mx-auto text-center my-8 py-8">
                <p className='text-xl text-orange-500 font-semibold'>SUBSCRIBE</p>



                <h2 className='text-3xl font-bold pt-4 pb-2 mx-auto w-[70%] sm:w-[65%] md:w-[55%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%]'>Subscribe To Get The Latest News about Us</h2>



                <p className='text-base pb-8 text-gray-500'>Please Drop Your Email Below To Get Daily Update About What We Do</p>
                <form>
                    <div className="form-area relative">
                        <input type="text" placeholder='Enter Your Email Address' className='w-[80%] sm:w-[80%] md:w-[75%] lg:w-[55%] xl:w-[47%] 2xl:w-[47%] pl-4 py-4 sm:py-4 md:py-4 border border-black rounded-xl' />
                        <button className='subscribe-btn px-[3%] sm:py-3 md:py-3 py-3 bg-orange-500 text-white rounded-xl absolute top-[8%] left-[72%] sm:left-[72.3%] md:left-[71.8%] lg:left-[64.3%] xl:left-[61.7%] 2xl:left-[62.7%] font-medium'>Subscribe</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Subscribe;
