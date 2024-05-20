import { useState, useEffect } from "react";

const Teks = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 500);

  return (
    <>
      {loading ? (
        <div className="hidden"></div>
      ) : (
        <div className="text-[15px] relative left-[100px] top-[120px] z-20">
          <p className="relative top-6 font-bold  text-[20px] text-[#002157]">
            Berita Terbaru
          </p>
          <a
            className="text-[#002157] font-bold relative left-[300px] z-10"
            href="/beritabaru"
          >
            See more...
          </a>
          <p className="relative left-[480px] bottom-7 font-bold text-[20px] text-[#002157]">
            Category Artikel baru
          </p>
          <p className="absolute top-7 left-[900px] font-bold text-[20px] text-[#002157]">
            Popular Post
            <a
              className="text-[#002157] font-bold relative z-10 left-[130px]"
              href="/beritapopulate"
            >
              See more...
            </a>
          </p>
        </div>
      )}
    </>
  );
};

const Founding = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth <= 440 ? <Mobile /> : <Teks />;
};

const Mobile = () => {
  return (
    <>
      <div className="text-[10px] relative left-[180px] top-[50px]">
        <p className="relative top-1 font-bold left-[-160px] text-[#002157]">
          Berita Terbaru
        </p>
        <a
          className="text-[#002157] font-bold relative left-[-80px] bottom-3"
          href="/beritabaru"
        >
          See more...
        </a>
        <p className="relative left-[0px] bottom-6 font-bold text-[8px] text-[#002157]">
          Category Artikel baru
        </p>
        <p className="absolute top-2 left-[120px] font-bold text-[7px] text-[#002157]">
          Popular Post
          <a
            className="text-[#002157] font-bold relative z-10 left-[30px] text-[7px]"
            href="/beritapopulate"
          >
            See more...
          </a>
        </p>
      </div>
    </>
  );
};

export default Founding;
