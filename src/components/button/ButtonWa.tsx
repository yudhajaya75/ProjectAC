import { BsWhatsapp } from "react-icons/bs";
import useContact from '../../hooks/useContact';

const ButtonWa = () => {
    const { content } = useContact()

    return (

        <div className=" bg-[#1FAF38] mx-auto w-[300px] text-white font-medium text-2xl py-4 rounded-lg ">
            <div>
                {content && (
                    <a href={`https://wa.me/${content.attributes.phone}`} target='_blank'>
                        <div className='flex justify-center gap-5 '>
                            <div>Daftar Sekarang</div>
                            <BsWhatsapp size={32} />
                        </div>
                    </a>
                )}
            </div>
        </div>

    )
}

export default ButtonWa