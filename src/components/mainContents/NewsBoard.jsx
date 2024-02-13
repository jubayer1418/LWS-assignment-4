import { useContext } from "react";
import { NewsFeeds } from "../../context";
import LoadingSpinner from "../LoadingSpinner";
import NewsLeftSide from "./NewsLeftSide";
import NewsRightSide from "./NewsRightSide";
function NewsBoard({ data, loading }) {
  const { isLoading } = useContext(NewsFeeds);
  console.log(data);
  return (
    <main className="my-10 lg:my-14">
      {isLoading || loading ? (
        <LoadingSpinner />
      ) : (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {data?.length > 0 ? (
            <>
              {data?.map((article) => (
                <div
                  key={article?.title}
                  className="col-span-12 grid grid-cols-12 gap-4"
                >
                  {/* <!-- info --> */}
                  <div className="col-span-12 lg:col-span-4">
                    <a href={article?.url}>
                      <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                        {article?.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#5C5955]">
                      {article.description}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">
                      {article?.publishedAt}
                    </p>
                  </div>
                  {/* <!-- thumb --> */}
                  <div className="col-span-12 lg:col-span-8">
                    <img
                      className="w-full"
                      src={article?.urlToImage}
                      alt="thumb"
                    />
                    <p className="mt-5 text-base text-[#5C5955]">
                      {article?.author}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <NewsLeftSide />
              <NewsRightSide />
            </>
          )}
        </div>
      )}
    </main>
  );
}

export default NewsBoard;
