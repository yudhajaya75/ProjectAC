import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Teks2 = () => {
    return (
        <>
            <div className='text-[15px]  relative left-[180px] top-[50px]'>
                <a className='text-[#002157] font-bold' href="/blog"> &lt; Back</a>
                <p className='relative top-6 font-bold text-[20px] text-[#002157]'>Berita Popular</p>
            </div >
        </>
    )
}

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <Mobile /> : <Teks2 />;
};

const Mobile = () => {
    return (
        <>
            <div className='text-[15px] relative left-[180px] top-[50px]'>
                <Link className='text-[#002157] font-bold relative left-[-150px] z-10' to="/blog">&lt; Back</Link>
                <p className='relative top-1 font-bold left-[-150px] text-[20px] text-[#002157]'>Berita Popular</p>
            </div>
        </>
    );
}

export default Founding
