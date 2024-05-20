import Image from "../global/Image";

type Props = {
  content?: string;
  imageSource?: string;
};

const SocialList = ({ content, imageSource }: Props) => {
  return (
    <li className="list-none flex gap-5 items-center">
      {imageSource && <Image isExternal src={imageSource} alt={content} customClass="h-5" />}
      <p className="text-white">{content}</p>
    </li>
  );
};

export default SocialList;
