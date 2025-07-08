
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Recommendation from "../Components/Recommendation";
import Header from "../Components/Header";

function SearchResults() {
  // console.log("Crops in SearchResults:", crops);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";
  console.log("Search query:", query);
   const [allCrops, setAllCrops] = useState([]);
  useEffect(() => {
      window.scrollTo(0, 0);
      const fetchCrops = async () => {
        try {
          const res = await fetch("api/v1/contractfarm/allcrops", {
            credentials: "include",
          });
          const data = await res.json();
          setAllCrops(data);
        } catch (err) {
          console.error("Error fetching crops:", err);
        }
      };
      fetchCrops();
    }, []);
    console.log("All crops:", allCrops);
  // Filter crops based on search query
  const filteredCrops = allCrops.filter(
    (crop) => crop.crop_name && crop.crop_name.toLowerCase().includes(query)
  );
  

  return (
    <>
    <Header />
    <div className="search-results-container">
      <h1>Search Results for: "{query}"</h1>
      {filteredCrops.length > 0 ? (
        <div className="recommendations-list">
 {filteredCrops.map((crop, index) => (
              <Recommendation key={index}crop={crop} />
            ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
    </>
  );
}

export default SearchResults;
