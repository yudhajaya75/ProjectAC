import React from 'react'
import { Link } from 'react-router-dom'

const teks = () => {
    return (
        <div className='p-10 font-sans relative bottom-[50px]'>
            <p className='pt-10 text-center text-[50px] font-bold text-[#074288]'>Webinar Belajar Life Planning untuk Gen Z</p>
            <div className="flex justify-center relative top-14">
                <div className='bg-[#002157] w-[250px] h-[60px] rounded-md'>
                    <div className='flex justify-center relative top-3 text-white md:text-[24px]'>
                        <a href="/login">Pesan Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default teks