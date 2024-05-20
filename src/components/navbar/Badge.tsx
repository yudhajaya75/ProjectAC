import Dropdown from "./Dropdown";

type Props = {
  email?: string;
  menu: {
    pathName: string;
    url: string;
  }[];
};

const Badge = ({ email, menu }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <Dropdown menu={menu} parentMenu={email ? email : "NO EMAIL"} />
    </div>
  );
};

export default Badge;
