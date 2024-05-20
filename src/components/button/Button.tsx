import { ReactNode } from "react";

type Props = {
  action?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  customClass?: string;
};

const Button = ({ action, children, customClass }: Props) => {
  return (
    <button
      onClick={(e) => action!(e)}
      className={`rounded-md bg-[#002157] py-4 px-8 font-bold text-white ${
        customClass && customClass
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
