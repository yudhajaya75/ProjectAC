import FounderCard from './foundercard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../founding/slider.css';
import { Skeleton } from '@mui/material';
import useFounding from '../../hooks/useFounding';

const Team = () => {
    const { content, loading } = useFounding()

    if (!content) return <div>No Data</div>
    return (
        <div className='flex justify-evenly mt-[50px] flex-wrap'>
            {loading ? (
                <div className="flex justify-evenly mt-[50px] flex-wrap">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="w-[230px]flex justify-evenly mx-14 mt-[0px] flex-wrap">
                            <Skeleton variant="rectangular" width={230} height={200} />
                            <div className="w-full p-6">
                                <Skeleton variant="text" width={150} height={42} />
                                <Skeleton variant="text" width={100} height={32} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex justify-evenly mt-[50px]  flex-wrap'>
                    {content.map((res: any, index) => (
                        <FounderCard
                            key={index}
                            name={res.attributes.name}
                            title={res.attributes.title}
                            imageUrl={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                            position={index % 2 === 0 ? 'top' : 'bottom'}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Team;
