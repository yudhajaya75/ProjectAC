import React from "react";
import "./sosmed.css";
import Image from "../global/Image";

interface SocialMediaProfileProps {
  name: string;
  subtitle: string;
  bio: string;
  image: string;
  link1: string;
  link2: string;
}

const SocialMediaProfile: React.FC<SocialMediaProfileProps> = ({
  name,
  subtitle,
  bio,
  link1,
  link2,
  image,
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white pb-6 w-full overflow-hidden md:max-w-sm rounded-lg drop-shadow-xl">
        <div className="h-[150px]"></div>
        <div className="mx-auto h-24 w-24 -my-20 bottom-10">
          <div className="object-cover w-full h-full">
            <Image src={image} />
          </div>
        </div>
        <div className="mt-20 p-5">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="text-sm text-gray-600 text-left my-4">{subtitle}</p>
          <p className="text-sm text-gray-600 text-justify">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaProfile;
