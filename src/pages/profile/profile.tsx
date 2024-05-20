import { useState } from "react";
import Button from "../../components/button/Button";
import HistoryCard from "../../components/content/HistoryCard";
import Content2 from "../../components/content/content3";
import usePersonalTransactions from "../../hooks/usePersonalTransactions";
import GlobalLayout from "../../layouts/GlobalLayout";

const Profile = (props: { email: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const userEmail = localStorage.getItem("email");
  const { content, error } = usePersonalTransactions(
    props.email || userEmail || "",
    currentPage
  );

  return (
    <>
      <GlobalLayout>
        <Content2 accountEmail={userEmail || ""} />
        <div className="mt-10 mx-10 md:mx-20 min-h-[331px] bg-white shadow-lg rounded-2xl p-6">
          {content ? (
            content.meta.pagination.total === 0 ? (
              <h1 className="pt-10 text-center">{error}</h1>
            ) : (
              content.data.map((history, index) => {
                return <HistoryCard key={index} detail={history} />;
              })
            )
          ) : (
            <h1>{error}</h1>
          )}
        </div>
        <div className="flex justify-center mt-10 gap-5">
          {content && content.meta.pagination.pageCount > 1 && (
            <>
              <Button
                action={() => {
                  setCurrentPage(
                    currentPage > 1 ? currentPage - 1 : currentPage
                  );
                }}
              >
                Previous Page
              </Button>
              <Button
                action={() => {
                  setCurrentPage(
                    currentPage < content.meta.pagination.pageCount
                      ? currentPage + 1
                      : currentPage
                  );
                }}
              >
                Next Page
              </Button>
            </>
          )}
        </div>
      </GlobalLayout>
    </>
  );
};

export default Profile;
