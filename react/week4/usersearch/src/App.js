import "./App.css";
import Header from "./components/Header";
import {ContextProvider} from "./components/ListUserContext";
import SearchResult from "./components/SearchResult";
import UserSearch from "./components/SearchUser";

function App() {
  return (
    <div>
      <Header />
      <ContextProvider>
      <UserSearch />
      <SearchResult />
      </ContextProvider>
    </div>
  );
}

export default App;