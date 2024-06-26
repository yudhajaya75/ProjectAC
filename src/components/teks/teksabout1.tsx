import { useState, useEffect } from 'react';

const Text = () => {
    return (
        <div className='teks'>
            <h1 className='font-bold left-[80px]
            text-2xl mt-10 relative 
            text-[#002157] max-w-[200px] text-center
            '>Join Layanan kami yuk! Cek disini</h1>
        </div>

    )
}

const Text1 = () => {
    return (
        <div className='p-10 font-sans font-bold 
        sm:text-left text-4xl sm:text-3xl text-[#074288] 
        mb-[-300px]' style={{ position: 'relative', top: '70px', zIndex: 1 }}>
            <div className=''>
                <h5 className='mb-[-200px] text-center'>
                    Join Layanan kami yuk! Cek disini
                </h5>
            </div>
        </div>
    );
};

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

    return windowWidth <= 440 ? <Text /> : <Text1 />;
};

export default Founding;
