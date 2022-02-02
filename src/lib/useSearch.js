import React from "react";

export const search = (list, key, query) => {
  return list.filter((quote) => quote[key].match(query));
};

export const useSearch = (list) => {
  const [book, setBook] = React.useState("");
  const [quote, setQuote] = React.useState("");
  const [results, setResult] = React.useState([]);

  React.useEffect(() => {
    if (book === "") {
      setResult([...list]);
    } else {
      setResult([...search(list, "book", book)]);
    }
  }, [book]);

  React.useEffect(() => {
    if (book === "") {
      setResult([...list]);
    } else {
      setResult([...search(list, "quote", quote)]);
    }
  }, [quote]);

  return { setBook, setQuote, book, quote, results };
};
