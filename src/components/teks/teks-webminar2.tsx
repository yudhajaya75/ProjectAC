import { Link } from "react-router-dom";

const Text = () => {
  return (
    <>
      <div className="mt-20 flex flex-col items-center text-center gap-y-20 text-2xl sm:text-4xl ">
        <h1 className="font-bold text-[#002157]">
          Hubungi kami melalui Whatsapp
        </h1>
        <div className="">
          <Link to="https://wa.me/6285718053834" target="_blank">
            <img className="w-[50px]" src="/images/wa.webp" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Text;
