import { Skeleton } from '@mui/material';
import useBanPelaData from '../../hooks/useBanPelaData';

const Banner = () => {
    const { content, loading } = useBanPelaData();

    if (!content) return <div>No Data</div>
    return (
        <div className='w-full'>
            {loading ? (
                <div className='relative top-[0px]'>
                    <Skeleton variant="rectangular" width={1600} height={500} />
                </div>
            ) : (
                <div>
                    <img className='lg:w-full sm-440:w-full lg:h-[550px] sm-440:h-[160px] object-cover lg:mt-[-0px] lg:z-10' src={`${process.env.REACT_APP_UPLOAD_URL}${content.attributes.image.data.attributes.url}`} alt="" />
                    <div className='absolute top-24 left-0 w-full h-screen'>
                        <div className='relative top-1 w-full h-full justify-center z-50'>
                            <div className='lg:left-[40%] sm-440:right-[10%] absolute max-w-[900px] m-auto lg:mt-[170px] sm-440:mt-[50px]'>
                                <h1 className='font-bold text-4xl lg:text-left sm-440:text-left sm-440:ml-[280px] 
                        md:text-6xl  z-10 text-white sm-440:text-[20px]'>{content.attributes.header}</h1>
                                <p className=' lg:max-w-[600px] sm-440:max-w-[200px] lg:text-left sm-440:text-left drop-shadow-2xl 
                        lg:py-8 sm-440:py-0 md:text-4xl z-10 text-white sm-440:text-[11px] lg:ml-[270px] sm-440:ml-[280px]'>{content.attributes.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Banner;
