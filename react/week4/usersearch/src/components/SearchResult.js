import React, { useContext} from "react";
import UserContext from "./ListUserContext";

function SearchResult() {

const { users, loading, error } = useContext(UserContext);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {!users || users.length === 0 ? (
        <li className="result">No results</li>
      ) : (
        users.map((user) => {
          return (
            <li key={user.id} className="listing">
               {user.login} <br />
              Repos : <a href={user.repos_url}> {user.repos_url}</a>
            </li>
            );
        })
      )}
    </ul>
  );
} 
export default SearchResult;