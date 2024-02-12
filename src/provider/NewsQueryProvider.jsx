import { useState } from "react";
import { NewsQuery } from "../context";

const NewsQueryProvider = ({ children }) => {
  const [query, setQuery] = useState("general");
  const handleQuery = (e) => {
    const search = e.target.innerText.toLowerCase();
    setQuery(search);
  };

  return (
    <NewsQuery.Provider value={{ handleQuery, query }}>
      {children}
    </NewsQuery.Provider>
  );
};

export default NewsQueryProvider;
