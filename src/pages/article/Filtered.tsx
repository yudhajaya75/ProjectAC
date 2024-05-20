import useArticle from "../../hooks/useArticle";
import GlobalLayout from "../../layouts/GlobalLayout";
import CardSkeleton from "../../components/card/CardSkeleton";
import ArticleCard from "./ArticleCard";
import Heading from "../../components/global/Heading";
import ButtonPagination from "../../components/button/ButtonPagination";

type Props = {
  type: "Popular" | "Newest";
};

const Filtered = ({ type }: Props) => {
  const {
    content,
    loading,
    currentPage,
    paginationMeta,
    handlePrevClick,
    handleNextClick,
  } = useArticle(type === "Popular" ? "Popular" : "Newest", 1, 6);

  return (
    <GlobalLayout>
      <main className="px-5 lg:px-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Heading customClass="md:col-span-2 lg:col-span-3 py-[69px]">
          Result for {type} Article
        </Heading>
        {loading
          ? [...Array(5)].map((val) => {
              return <CardSkeleton key={val} />;
            })
          : content
          ? content.data.map((article, index) => {
              return (
                <ArticleCard
                  banner={article.attributes.image.data.attributes.url}
                  url={article.attributes.slug}
                  key={index}
                  viewCount={article.attributes.eye}
                  body={article.attributes.body}
                  date={new Date(article.attributes.createdAt)}
                  title={article.attributes.title}
                />
              );
            })
          : "No Article"}
      </main>
      <div className="flex justify-start ml-10 md:ml-20 mt-8 md:mt-14">
        <ButtonPagination
          handlePrev={handlePrevClick}
          handleNext={handleNextClick}
          page={currentPage}
          totalPages={paginationMeta?.pageCount || 0}
        />
      </div>
    </GlobalLayout>
  );
};

export default Filtered;
