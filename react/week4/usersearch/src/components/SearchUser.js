import { useContext } from "react";
import UserContext from "./ListUserContext";

//query
function SearchUser() {
  const { query, setQuery } = useContext(UserContext);

  return (
    <div className="App">
      <input
        className="inputText"
        type="text"
        placeholder="search for user"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchUser;
