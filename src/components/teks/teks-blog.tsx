import React from 'react'
import { Link } from 'react-router-dom';

const Teks = (props: any) => {
    return (
        <>
            <div className='lg:text-[15px] pt-10 relative mx-20 lg:left-[0px] sm-440:left-[10px] sm-440:bottom-[20px] lg:bottom-[20px] line-clamp-1'>
                <p className='text-[#6F6F6F]'>Berita Baru
                    <a className='text-[#002157] font-bold' href="/blog"> &gt; {props.title} </a>
                </p>
            </div >
            <div className='mx-20 relative top-2'>
                <a className='text-[#002157] font-bold' href="/blog"> &lt; Back</a>
            </div>
        </>
    )
}

export default Teks