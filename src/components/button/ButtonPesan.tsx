import { useNavigate } from 'react-router-dom';

export const ButtonPesan = ({ accountEmail }: { accountEmail: string }) => {

    const router = useNavigate();

    const handlePesanSekarang = () => {
        if (accountEmail !== '') {
            router('/pelatihan2');
        } else {
            router('/login');
        }
    };

    return (
        <div className='bg-[#002157] w-[250px] py-3 rounded-md mx-auto'>
            <div className='text-center text-white md:text-[24px]'>
                <button onClick={handlePesanSekarang}>Pesan Sekarang</button>
            </div>
        </div>
    )
}