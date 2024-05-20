import { Link } from "react-router-dom";
import Image from "../global/Image";

type Props = {
  link?: string;
  imageSource?: string;
};

const SocialBubble = ({ link, imageSource }: Props) => {
  return (
    <Link to={link ? link : "#"} className="h-8 rounded-full hover:scale-110 transition-all duration-500">
      {imageSource && <Image isExternal src={imageSource} alt={link} customClass="h-full" />}
    </Link>
  );
};

export default SocialBubble;
