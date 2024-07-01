import React from "react";
import "./styles.css";
import Quote from "./components/quote";
import Header from "./components/header";
import Searchbar from "./components/searchbar";
import { useSearch } from "./lib/useSearch";
import Lottie from "react-lottie";
import loadingAnimation from "./assets/93354-loading.json";

export default function App() {
  const { query, handleChange, results, loading, retreive } = useSearch();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Avoid re-render on Refreshing Data
  const renderQuotes = React.useCallback(() => {
    return results.map(({ book, quote, id }) => (
      <Quote book={book} quote={quote} key={id} />
    ));
  }, [results]);

  return (
    <>
      <Header />
      <main>
        <Searchbar
          refreshData={retreive}
          {...query}
          handleChange={handleChange}
        />
        <div className="card-container">
          {loading ? (
            <div className="loading">
              <Lottie options={defaultOptions} />
            </div>
          ) : (
            renderQuotes()
          )}
        </div>
      </main>
      <footer>
        <p>
          Developed by <a href="https://www.abhin.dev">Abhin Rustagi</a>.
        </p>
      </footer>
    </>
  );
}
