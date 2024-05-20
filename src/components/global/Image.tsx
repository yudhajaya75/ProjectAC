import { server } from "../../config/server";

type Props = {
  customClass?: string;
  alt?: string;
  src?: string;
  isExternal?: boolean;
  notLazy?: boolean;
};

const Image = ({ alt, customClass, isExternal, src, notLazy }: Props) => {
  const finalClasses = `aspect-auto object-cover ${customClass}`;

  return (
    <img
      loading={notLazy ? "eager" : "lazy"}
      alt={alt ? alt : src}
      src={isExternal ? src : server.BASE_URL + src}
      className={finalClasses}
    />
  );
};

export default Image;
