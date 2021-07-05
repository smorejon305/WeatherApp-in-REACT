import "./styles.css";
import Search from "./Search";
import City from "./City";
import DateTime from "./DateTime";

export default function App() {
  return (
    <div className="App">
      <h1 className="pageTitle">Weather the Storm</h1>
      <hr />
      <Search />

      <City />
      <DateTime />
    </div>
  );
}
