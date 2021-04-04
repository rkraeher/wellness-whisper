import './App.css';
import Layout from "./components/Layout";
import NewsContextProvider from "./utils/NewsContext";

function App() {
  return (
    <div>
      <NewsContextProvider>
        <Layout />
      </NewsContextProvider>
    </div>
  );
}

export default App;