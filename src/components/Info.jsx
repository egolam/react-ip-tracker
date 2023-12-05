import React, { useContext } from 'react'
import { IpContext } from '../contexts/IpContext';

export const Info = () => {

    const {ip, location, isp} = useContext(IpContext);  

    return (
        <section className='sm:w-[69.375rem] w-80 sm:h-40 h-72 bg-white absolute z-50 m-auto left-0 right-0 sm:top-[12.5rem] top-44 rounded-2xl flex sm:p-8 p-6 drop-shadow-2xl sm:flex sm:flex-row flex-col sm:text-left text-center'>
            <div className='flex flex-col sm:gap-2 sm:border-r flex-1'>
                <h3 className='sm:text-xs text-[10px] text-[#979797] font-bold'>IP ADDRESS</h3>
                <p className='sm:text-2xl text-xl font-medium'>{ip}</p>
            </div>

            <div className='flex flex-col sm:gap-2 sm:border-r flex-1 sm:ml-8'>
                <h3 className='sm:text-xs text-[10px] text-[#979797] font-bold'>LOCATION</h3>
                <p className='sm:text-2xl text-xl font-medium'>{location?.region}, {location?.country} {location?.postalcode}</p>
            </div>

            <div className='flex flex-col sm:gap-2 sm:border-r flex-1 sm:ml-8'>
                <h3 className='sm:text-xs text-[10px] text-[#979797] font-bold'>TIMEZONE</h3>
                <p className='sm:text-2xl text-xl font-medium'>UTC {location?.timezone}</p>
            </div>

            <div className='flex flex-col sm:gap-2 flex-1 sm:ml-8'>
                <h3 className='sm:text-xs text-[10px] text-[#979797] font-bold'>ISP</h3>
                <p className='sm:text-2xl text-xl font-medium'>{isp}</p>
            </div>

        </section>
    )
}
