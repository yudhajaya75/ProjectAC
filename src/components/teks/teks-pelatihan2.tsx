import React from 'react'
import { Link } from 'react-router-dom';

const Teks = (props: any) => {
    return (
        <>
            <div className='lg:text-[15px] pt-10 relative lg:left-[180px] sm-440:left-[10px] sm-440:bottom-[20px] lg:bottom-[20px]'>
                <p className='text-[#6F6F6F]'>Pelatihan
                    <a className='text-[#002157] font-bold' href="/webinar"> &gt; {props.title} </a>
                </p>
            </div >

        </>
    )
}

export default Teks