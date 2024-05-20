import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/lib/useLogin";

const Login = (props: { setEmail: (email: string) => void }) => {
  const {
    passwordVisible,
    handleTogglePassword,
    setEmail,
    setPassword,
    submit,
  } = useLogin(props);

  return (
    <>
      <div className="max-w-[1785px] h-[927px] lg:h-[1117px] mx-auto relative flex flex-col">
        <div className="w-[2100px] h-full bg-[#010d1f] absolute top-0 -z-20"></div>
        <img
          src="/images/Frame32.png"
          className="h-full absolute top-0 -z-10"
          alt=""
        />
        <div className="flex w-[150px] lg:w-[200px] h-[80px] my-10 ml-5 lg:ml-20">
          <a href="/home" className="flex w-[150px] lg:w-[200px] h-[80px]">
            <img
              src="/images/image-109.webp"
              alt="logo"
              className="w-[60px] h-[50px] lg:w-[70px] lg:h-[69px] my-auto mr-3"
            />
            <h1 className="text-white text-base lg:text-xl my-auto font-semibold leading-[20px]">
              Konseling Satir Indonesia
            </h1>
          </a>
        </div>

        {/* form */}
        <div className="rounded-md bg-white shadow-2xl h-[600px] w-[90%] md:w-[70%] lg:w-[40%] lg:h-[500px] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D] lg:mt-20">
          <h2 className="text-3xl font-medium text-black">
            Login to your account
          </h2>
          <form className="flex flex-col gap-10 lg:w-[70%]" onSubmit={submit}>
            {/* email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="text" className="font-medium">
                Email / Username
              </label>
              <div className="border-2 p-3 rounded-md hover:border-sky-400/[.5] focus:border-sky-400/[.5]">
                <input
                  type="text"
                  placeholder="Email / Username"
                  className="w-full"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ outline: "0px" }}
                />
              </div>
            </div>

            {/* password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
              </div>
              <div className="flex items-center lg:justify-between border-2 p-3 rounded-md hover:border-sky-400/[.5] focus:border-sky-400/[.5]">
                <input
                  type={passwordVisible ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full"
                  style={{ outline: "0px" }}
                  required
                />
                <div onClick={handleTogglePassword} className="w-[15px]">
                  {passwordVisible ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </div>
              </div>
            </div>
            {/* end password */}
            <button
              type="submit"
              className="bg-[#007DFA] lg:w-[100%] text-white w-[270px] 
                text-center font-medium p-3 rounded-md hover:bg-[#3390ed]"
            >
              Login
            </button>
          </form>
          <div className="flex gap-2">
            <p className="">Don't Have An Account ?</p>
            <Link
              to="/signup"
              className="text-[#007DFA] hover:underline underline-offset-1"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
