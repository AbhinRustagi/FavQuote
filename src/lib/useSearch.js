import React from "react";
import Fuse from "fuse.js";
import { getItems } from "./firebase";

const options = {
  includeMatches: true,
  findAllMatches: true,
  keys: ["book", "quote"],
};

export const useSearch = () => {
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [results, setResults] = React.useState(list);
  const fuse = new Fuse(list, options);

  const retreive = () => {
    getItems().then(({ ok, data, message, code }) => {
      setLoading(true);

      if (ok) {
        setList(data);
        setResults(data);
        setLoading(false);
      } else {
        alert("Error fetching data.", message, code);
        setLoading(false);
      }
    });
  };

  const handleChange = React.useCallback(
    ({ target: { value } }) => {
      setQuery(value);
    },
    [query]
  );

  React.useEffect(() => {
    if (query === "") {
      setResults(list);
      return;
    }

    const res = fuse.search(query);
    setResults([...res.map(({ item }) => item)]);
  }, [query]);

  React.useEffect(() => {
    // Get Data
    retreive();
  }, []);

  return { handleChange, query, results, loading, retreive };
};
