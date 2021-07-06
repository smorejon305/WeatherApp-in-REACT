import "./App.css";

import Search from "./Search";
import City from "./City";
import DateTime from "./DateTime";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1 className="pageTitle">Weather the Storm</h1>
      <hr />
      <Search />

      <City />
      <DateTime />

      <WeatherData />
      <hr />

      <Forecast />

      <Footer />
    </div>
  );
}
