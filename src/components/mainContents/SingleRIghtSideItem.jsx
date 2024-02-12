import { useContext } from "react";
import { NewsFeeds } from "../../context";

function SingleRIghtSideItem() {
  const { isLoading, loading, error, data } = useContext(NewsFeeds);

  if (isLoading) {
    <p className="bg-red-700">{loading}</p>;
  }
  return (
    <>
      {data?.articles?.slice(10).map((article) => (
        <div key={article.title} className="col-span-12 mb-6 md:col-span-8">
          <img className="w-full" src={article.urlToImage} alt="thumb" />
          {/* <!-- info --> */}
          <div className="col-span-12 mt-6 md:col-span-4">
            <a href={article?.url}>
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                {article.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{article.description}</p>
            <p className="mt-5 text-base text-[#94908C]">
              {article.publishedAt}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default SingleRIghtSideItem;
