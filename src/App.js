import "./styles.css";
import Quote from "./components/quote";
import Header from "./components/header";
import Searchbar from "./components/searchbar";
import { useSearch } from "./lib/useSearch";
import Lottie from "react-lottie";
import loadingAnimation from "./assets/93354-loading.json";
import Modal from "./components/modal";

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
            results.map(({ book, quote, id }) => (
              <Quote book={book} quote={quote} key={id} />
            ))
          )}
        </div>
      </main>
      <footer>
        <p>
          Developed & Maintained by{" "}
          <a href="https://www.abhinrustagi.xyz">Abhin Rustagi</a>.
        </p>
      </footer>
    </>
  );
}
