import { useState, useEffect } from "react";
import classes from "@/components/synonyms/Synonyms.module.css";
import CSS from "csstype";

interface synonymData {
  word: string;
  score: number;
  tags: string;
}

interface searchedWord {
  word: string;
}

const Synonyms = (searchedWord: any) => {
  const pStyles: CSS.Properties = {
    fontStyle: "italic",
  };
  const [synonyms, setSynonyms] = useState<synonymData[]>([]);

  useEffect(() => {
    fetch("https://api.datamuse.com/words?ml=" + searchedWord.word + "&max=30")
      .then((res) => res.json())
      .then((data) => {
        setSynonyms(data);
        console.log("Synonyms.tsx " + searchedWord.word);
      });
  }, [searchedWord]);

  return (
    <div className={classes.synonyms}>
      {!searchedWord.word && <h1>Search for a word!</h1>}
      {searchedWord.word && (
        <h1>Synonyms of &apos;{searchedWord.word}&apos;:</h1>
      )}
      <ul className={classes.ul}>
        {synonyms.map((synonym) => (
          <li className={classes.list} key={synonym.word}>
            <h2>&apos;{synonym.word}&apos;</h2>
            <p>Score: {synonym.score}</p>
            <p style={pStyles}>Tags: {synonym.tags}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Synonyms;
