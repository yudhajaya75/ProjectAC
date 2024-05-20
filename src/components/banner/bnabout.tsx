import '../banner/bnabout.css'
import { Skeleton } from '@mui/material';
import useBanAbout from '../../hooks/useBanAbout';

const Banner = () => {
    const { content, loading } = useBanAbout()

    if (!content) return <div>No Data</div>
    return (
        <div className='w-full'>
            {loading ? (
                <div className='relative bottom-[100px]'>
                    <Skeleton variant="rectangular" width={1600} height={800} />
                </div>
            ) : (
                <div>
                    <img className='w-full h-[800px] object-cover mt-[-100px] z-10' src={`${process.env.REACT_APP_UPLOAD_URL}${content.attributes.image.data.attributes.url}`} alt="" />
                    <div className='absolute top-24 left-0 w-full h-screen'>
                        <img className='h-[600px] relative float-right mr-[50px] mt-[100px]' style={{ maxWidth: '17%', height: 'auto' }} src="./images/bgabout1.webp" alt="" />
                        <img className='h-[300px] relative float-right mr-[50px] mt-[100px]' style={{ maxWidth: '10%', height: 'auto' }} src="./images/bgabout1.webp" alt="" />
                        <div className='absolute top-1 w-full h-full justify-center'>
                            <div className='md:left-[10%] max-w-[800px] m-auto absolute mt-[250px]'>
                                <h1 className='font-bold text-4xl text-center sm:text-left md:text-6xl z-10 text-[#002157]'>{content.attributes.header}</h1>
                                <p className='max-w-[600px] text-center sm:text-left drop-shadow-2xl py-10 text-4xl z-10 text-[#5b5b5b]'>{content.attributes.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Banner;
