import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: ReactNode;
  customClass?: string;
  url?: string;
  target?: React.HTMLAttributeAnchorTarget;
};

const CLink = ({ url, children, customClass, target }: Props) => {
  return (
    <Link
      to={url ? url : "#"}
      target={target}
      className={`rounded-md bg-[#002157] py-2 px-4 lg:py-4 lg:px-8 font-bold text-white flex gap-3 justify-center items-center ${
        customClass && customClass
      }`}
    >
      {children}
    </Link>
  );
};

export default CLink;
