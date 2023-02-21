import styles from "@/styles/Home.module.css";
import Heading from "@/components/heading/Heading";
import Synonyms from "@/components/synonyms/Synonyms";
import Search from "@/components/search/Search";
import { useState } from "react";

const Home: React.FC = () => {
  const [searchedWord, setSearchedWord] = useState<string>("");

  const updateWord = (word: string): void => {
    setSearchedWord(word);
  };

  console.log("Index.tsx " + searchedWord);

  return (
    <div class="text-3xl">
      <div className={styles.layout}>
        <main className={styles.main}>
          <Heading />
          <Search word={searchedWord} updateWord={updateWord} />
        </main>
        <Synonyms word={searchedWord} />
      </div>
    </div>
  );
};

export default Home;
