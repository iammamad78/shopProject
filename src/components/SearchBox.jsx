import { ImSearch } from "react-icons/im";
import styles from "./SearchBox.module.css";
import { createQueryObject } from "../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
