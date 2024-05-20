const Teks = ({ title }: { title: string }) => {
  return (
    <>
      <div className="lg:text-[15px] pt-10 relative lg:left-[180px] sm-440:left-[10px] sm-440:bottom-[20px] lg:bottom-[20px]">
        <p className="text-[#6F6F6F]">
          Webminar
          <a className="text-[#002157] font-bold" href="/webinar">
            {" "}
            &gt; Webinar Belajar Life Planning untuk Gen Z{" "}
          </a>
        </p>
      </div>
    </>
  );
};

export default Teks;
