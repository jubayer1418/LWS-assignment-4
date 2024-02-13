import { useContext } from "react";
import { NewsFeeds, NewsQuery } from "../context";
import { useNewsQuery } from "../hooks";

const NewsFeedProvider = ({ children }) => {
  const { query } = useContext(NewsQuery);
  const { isLoading, loading, error, data } = useNewsQuery(query);
  const calc = (data?.articles?.length / 2).toFixed();
  console.log(isLoading);
  return (
    <NewsFeeds.Provider
      value={{
        isLoading,
        loading,
        error,
        dataL: data?.articles?.slice(0, calc),
        dataR: data?.articles?.slice(calc),
      }}
    >
      {children}
    </NewsFeeds.Provider>
  );
};

export default NewsFeedProvider;
