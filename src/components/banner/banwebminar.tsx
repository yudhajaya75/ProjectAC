import { Skeleton } from '@mui/material';
import useBanWebinar from '../../hooks/useBanWebinar';

const Banner = () => {
    const { content, loading } = useBanWebinar();

    if (!content) return <div>No Data</div>
    return (
        <div className='w-full'>
            {loading ? (
                <div className='relative top-[100px]'>
                    <Skeleton variant="rectangular" width={1600} height={500} className='mt-[-100px]' />
                </div>
            ) : (
                <div>
                    <img className='lg:w-full sm-440:w-full lg:h-[600px] sm-440:h-[160px] object-cover lg:mt-[-0px] lg:z-10' src={`${process.env.REACT_APP_UPLOAD_URL}${content.attributes.image.data.attributes.url}`} alt="" />
                    <div className='absolute top-24 left-0 w-full h-screen'>
                        <div className='absolute top-1 w-full h-full justify-center'>
                            <div className='md:left-[10%] absolute sm-440:left-[-50px] max-w-[800px] m-auto lg:mt-[250px] sm-440:mt-[30px]'>
                                <h1 className='font-bold text-4xl lg:text-left sm-440:text-left sm-440:ml-20 
                        md:text-6xl  z-10 text-[#002157] sm-440:text-[20px] '>{content.attributes.header}</h1>
                                <p className=' lg:max-w-[600px] sm-440:max-w-[220px] lg:text-left sm-440:text-left drop-shadow-2xl 
                        lg:py-8 sm-440:py-0 md:text-4xl z-10 text-[#5b5b5b] sm-440:text-[15px] ml-20 '>{content.attributes.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Banner;

