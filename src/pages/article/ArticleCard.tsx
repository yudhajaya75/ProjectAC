import { Link } from "react-router-dom";
import Image from "../../components/global/Image";

type Props = {
  version?: "with banner" | "plain" | "card";
  title?: string;
  body?: string;
  viewCount?: number | string;
  date?: Date;
  banner?: string;
  url?: string;
};

const ArticleCard = ({
  version,
  body,
  date,
  title,
  viewCount,
  banner,
  url,
}: Props) => {
  if (version === "plain")
    return (
      <article className="hover:scale-105 hover:cursor-pointer transition-all duration-1000 px-7 py-5 h-fit border-b">
        <Link to={url ? "/article/" + url : "#"}>
          <h3 className="text-3xl font-bold pb-6">
            {title
              ? title.substring(0, 150)
              : "Lorem Ipsum has been the industry's standard dummy text."}
          </h3>
          <span className="text-[#8B8B8B]">
            {date ? new Date(date).toDateString() : "06 Maret 2023"}
          </span>
        </Link>
      </article>
    );

  if (version === "card")
    return (
      <article className="hover:scale-105 hover:cursor-pointer transition-all duration-1000 px-7 py-5 h-fit border-b">
        <Link to={url ? "/article/" + url : "#"}>
          <Image
            customClass="rounded-xl w-full"
            src={
              banner
                ? banner
                : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            }
            isExternal={banner ? false : true}
          />
          <span className="text-[#8B8B8B] py-5 block">
            {date ? new Date(date).toDateString() : "06 Maret 2023"}
          </span>
          <h3 className="text-3xl font-bold pb-6">
            {title
              ? title.substring(0, 150)
              : "Lorem Ipsum has been the industry's standard dummy text."}
          </h3>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold">
                {viewCount ? viewCount : "100K"}
              </span>
              <span>People Saw</span>
            </div>
            <div className="flex gap-2">
              <span>
                {date ? new Date(date).toDateString() : "06 Maret 2023"}
              </span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5 13.9997L16.3333 5.83301V10.4997C8.16667 11.6663 4.66667 17.4997 3.5 23.333C6.41667 19.2497 10.5 17.383 16.3333 17.383V22.1663L24.5 13.9997Z"
                  fill="#555555"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83301 24.5V5.83334C5.83301 5.19167 6.06167 4.64217 6.51901 4.18484C6.97634 3.7275 7.52545 3.49922 8.16634 3.5H19.833C20.4747 3.5 21.0242 3.72867 21.4815 4.186C21.9388 4.64334 22.1671 5.19245 22.1663 5.83334V24.5L13.9997 21L5.83301 24.5Z"
                  fill="#555555"
                />
              </svg>
            </div>
          </div>
        </Link>
      </article>
    );

  return (
    <article className="hover:scale-105 hover:cursor-pointer transition-all duration-1000">
      <Link to={url ? "/article/" + url : "#"}>
        <Image
          customClass="rounded-xl w-full"
          src={
            banner
              ? banner
              : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
          isExternal={banner ? false : true}
        />
        <div className="px-7 mx-4 py-5 bg-white shadow-md rounded-xl relative -mt-20">
          <h3 className="text-4xl font-bold">
            {title
              ? title.substring(0, 150)
              : "Lorem Ipsum has been the industry's standard dummy text."}
          </h3>
          <p
            className="text-base py-7"
            dangerouslySetInnerHTML={{
              __html: body
                ? body.substring(0, 150)
                : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            }}
          ></p>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold">
                {viewCount ? viewCount : "100K"}
              </span>
              <span>People Saw</span>
            </div>
            <div className="flex gap-2">
              <span>
                {date ? new Date(date).toDateString() : "06 Maret 2023"}
              </span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5 13.9997L16.3333 5.83301V10.4997C8.16667 11.6663 4.66667 17.4997 3.5 23.333C6.41667 19.2497 10.5 17.383 16.3333 17.383V22.1663L24.5 13.9997Z"
                  fill="#555555"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83301 24.5V5.83334C5.83301 5.19167 6.06167 4.64217 6.51901 4.18484C6.97634 3.7275 7.52545 3.49922 8.16634 3.5H19.833C20.4747 3.5 21.0242 3.72867 21.4815 4.186C21.9388 4.64334 22.1671 5.19245 22.1663 5.83334V24.5L13.9997 21L5.83301 24.5Z"
                  fill="#555555"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
