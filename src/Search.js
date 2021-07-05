import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" className="searchBar" />
        <input type="submit" value="Search" className="searchButton" />
        <input
          type="submit"
          value="Current Location"
          className="currentLocationButton"
        />
      </form>
    </div>
  );
}
