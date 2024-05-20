import { SyntheticEvent, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Login = (props: { setEmail: (email: string) => void }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const lastLoginData = localStorage.getItem('lastLoginData');
        if (lastLoginData) {
            const { email } = JSON.parse(lastLoginData);
            setEmail(email);
        }
    }, []);

    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        console.log(response);

        setIsSubmitting(false);

        if (response.status === 400) {
            setShowAlert(true);
            return;
        } else if (response.status === 201) {
            router('/home')
        }

        props.setEmail(email);

        localStorage.setItem('lastLoginData', JSON.stringify({ email }));

    };

    return (
        <>
            {showAlert && (
                <div className="absolute top-[100px] left-[43%]">
                    <Stack sx={{ width: '100%', }} spacing={1}>
                        <Alert severity="error">Email & Password Salah</Alert>
                    </Stack>
                </div>
            )}
            <div className='max-w-[1785px] h-[927px] lg:h-[1117px] mx-auto relative flex flex-col'>
                <div className='w-[2100px] h-full bg-[#010d1f] absolute top-0 -z-20'></div>
                <img src='http://localhost:3000/images/Frame32.png' className='h-full absolute top-0 -z-10' alt="" />
                <div className="flex w-[150px] lg:w-[200px] h-[80px] my-10 ml-5 lg:ml-20">
                    <a href="/home" className="flex w-[150px] lg:w-[200px] h-[80px]">
                        <img src='http://localhost:3000/images/image-109.webp' alt="logo" className="w-[60px] h-[50px] lg:w-[70px] lg:h-[69px] my-auto mr-3" />
                        <h1 className="text-white text-base lg:text-xl my-auto font-semibold leading-[20px]">Konseling Satir Indonesia</h1>
                    </a>
                </div>

                {/* form */}
                <div className='rounded-md bg-white shadow-2xl h-[600px] w-[90%] md:w-[70%] lg:w-[40%] lg:h-[500px] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D] lg:mt-20'>
                    <h2 className='text-3xl font-medium text-black'>Enter Your Email</h2>
                    <form className="flex flex-col gap-10 lg:w-[70%]" onSubmit={submit}>
                        {/* email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='font-medium'>Email</label>
                            <div className='border-2 p-3 rounded-md hover:border-sky-400/[.5] focus:border-sky-400/[.5]'>
                                <input type="email" placeholder='Email Address' className='w-full' required
                                    onChange={e => setEmail(e.target.value)}
                                    style={{ outline: '0px' }} />
                            </div>
                        </div>

                        {/* end password */}
                        <button type="submit" className='bg-[#007DFA] lg:w-[100%] text-white w-[270px] 
                text-center font-medium p-3 rounded-md hover:bg-[#3390ed]'>
                            Login
                        </button>
                    </form>
                    <div className="flex gap-2">
                        <p className="">Don't Have An Account ?</p>
                        <Link to="/signup" className='text-[#007DFA] hover:underline underline-offset-1'>
                            Sign Up
                        </Link>
                    </div>
                </div>
                {/* end form */}

                {/* <div className="text-white text-4xl w-[300px] my-20 ml-5 lg:text-5xl lg:w-[400px] italic font-thin">
                    <h1>
                        Welcome to. Konseling Satir Indonesia
                    </h1>
                </div> */}
            </div>
        </>
    );
};

export default Login;
