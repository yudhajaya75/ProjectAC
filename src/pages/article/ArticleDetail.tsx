import { useParams } from "react-router-dom";

import GlobalLayout from "../../layouts/GlobalLayout";
import Heading from "../../components/global/Heading";
import Image from "../../components/global/Image";
import BreadCrumbs from "../../components/global/BreadCrumb";
import useArticleDetail from "../../hooks/useArticleDetail";

const ArticleDetail = () => {
  const { slug } = useParams();

  const { content, loading } = useArticleDetail(slug!);

  if (!slug) return <GlobalLayout>Please Provide Slug</GlobalLayout>;

  const bc = [
    { pageName: "Article", link: "/article" },
    {
      pageName: content ? content.attributes.title : "Title",
      link: "/article/" + slug,
    },
  ];

  console.log("PRODUCT PAGE", slug);

  if (!content)
    return (
      <GlobalLayout>
        <main className="h-screen flex flex-col justify-center items-center text-center">
          <span className="text-3xl">404 Not Found :(</span>
          <h2 className="font-bold">{slug.replaceAll("-", " ")}</h2>{" "}
          <code className="mx-2 italic underline">{window.location.href}</code>
        </main>
      </GlobalLayout>
    );

  return (
    <GlobalLayout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        content && (
          <>
            <BreadCrumbs breadCrumbs={bc} />
            <main className="px-5 lg:px-24">
              {content.attributes.image.data.attributes.url && (
                <Image
                  customClass="w-full h-[400px] rounded-xl"
                  src={content.attributes.image.data.attributes.url}
                />
              )}
              <div className="flex gap-2 py-5">
                <span>
                  {content.attributes.createdAt
                    ? new Date(content.attributes.createdAt).toDateString()
                    : "06 Maret 2023"}
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
              <Heading customClass="text-start">
                {content.attributes.title}
              </Heading>
              <p
                className="pt-10"
                dangerouslySetInnerHTML={{ __html: content.attributes.body }}
              ></p>
            </main>
          </>
        )
      )}
    </GlobalLayout>
  );
};

export default ArticleDetail;
