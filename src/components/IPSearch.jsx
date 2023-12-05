import React, { useContext, useRef } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IpContext } from '../contexts/IpContext';


export const IPSearch = () => {

    const inputRef = useRef("");
    const ipContext = useContext(IpContext);
    
    return (
        <div className='sm:w-[35rem] w-80 h-14 flex rounded-2xl overflow-hidden'>
            <input ref={inputRef} className="pl-6 text-lg text-[#2c2c2c] flex-1 outline-none hover:cursor-pointer" type="text" placeholder='Search for any IP address' />
            <button onClick={(e) => ipContext.setUserIp(inputRef.current.value)} className='p-6 h-full bg-black flex items-center justify-center hover:bg-[#3F3F3F]'>
                <IoIosArrowForward style={{color: 'white'}}/>
            </button>
        </div>
    )
}
