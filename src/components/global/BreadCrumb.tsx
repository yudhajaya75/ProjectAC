import { Link } from "react-router-dom";

type Props = {
  breadCrumbs: { pageName: string; link: string }[];
};

const BreadCrumbs = ({ breadCrumbs }: Props) => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] py-8 px-5 lg:px-24">
        {breadCrumbs.map((breadCrumb, index) => {
          return (
            <Link
              key={index}
              to={breadCrumb.link}
              className={`text-[16px] ${index + 1 === breadCrumbs.length ? "text-[#002157] font-bold" : ""}`}
            >
              {breadCrumb.pageName}{" "}
              {index + 1 !== breadCrumbs.length && <span> &gt; </span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
