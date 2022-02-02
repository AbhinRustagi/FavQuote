import "./styles.css";
import Quote from "./components/quote";
import Header from "./components/header";
import Searchbar from "./components/searchbar";
import { useSearch } from "./lib/useSearch";

export default function App() {
  const { quote, book, setBook, setQuote, results } = useSearch([
    {
      book: "The Perks of Being a Wallflower",
      quote: "We accept the love we think we deserve."
    },
    {
      book: "The Perks of Being a Wallflower",
      quote: "We are infinite."
    },
    {
      book: "The Perks of Being a Wallflower",
      quote: "We are infinite."
    }
  ]);
  return (
    <>
      <Header />
      <main>
        <Searchbar
          bookParams={{ book, setBook }}
          quoteParams={{ quote, setQuote }}
        />
        <div className="card-container">
          {results.map((item, _) => (
            <Quote book={item?.book} quote={item?.quote} key={_} />
          ))}
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
