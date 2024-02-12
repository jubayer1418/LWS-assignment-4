import Page from "./page/Page";
import NewsFeedProvider from "./provider/NewsFeedsProvider";
import NewsQueryProvider from "./provider/NewsQueryProvider";

function App() {
  return (
    <NewsQueryProvider>
      <NewsFeedProvider>
        <Page></Page>
      </NewsFeedProvider>
    </NewsQueryProvider>
  );
}

export default App;
