import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Teks = () => {
    //    const [content, setContent] = useState<any>([]);
    //     const [loading, setLoading] = useState(true);

    //     useEffect(() => {
    //         axios.get(`${process.env.REACT_APP_SCRIPTS_URL}/contact-information`)
    //             .then((response) => {
    //                 setContent(response.data.data);
    //             })
    //             .catch((error) => {
    //                 console.error('Error fetching data:', error);
    //             });
    //     }, []);
    //     console.log(content)

    return (
        <div className='p-10 font-sans relative lg:bottom-[50px] sm-440:bottom-[30px]'>
            <p className='pt-10 text-center lg:text-[50px] sm-440:text-[18px] font-bold text-[#074288]'>Webinar Belajar Life Planning untuk Gen Z</p>
            <div className="flex justify-center relative lg:top-10 sm-440:top-3">
                <Link to="https://wa.me/6285718053834" target='_blank'>
                    <img src="./images/buttonwa.webp" className='sm-440:max-w-[200px] lg:max-w-[500px]' alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Teks