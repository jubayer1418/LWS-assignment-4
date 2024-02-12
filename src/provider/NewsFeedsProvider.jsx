import { useContext } from "react";
import { NewsFeeds, NewsQuery } from "../context";
import { useNewsQuery } from "../hooks";

const NewsFeedProvider = ({ children }) => {
  const { query } = useContext(NewsQuery);
  const { isLoading, loading, error, data } = useNewsQuery(query);

  return (
    <NewsFeeds.Provider value={{ isLoading, loading, error, data }}>
      {children}
    </NewsFeeds.Provider>
  );
};

export default NewsFeedProvider;
