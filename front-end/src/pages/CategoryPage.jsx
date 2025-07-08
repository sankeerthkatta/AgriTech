import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Recommendation from "../Components/Recommendation";
import "../index.css";

import Header from "../Components/Header";

function CategoryPage() {
  const { categoryName } = useParams();
  const [cropss, setCrops] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await fetch("/api/v1/contractfarm/allcrops", {
          credentials: "include",
        });
        const data = await res.json();
        setCrops(data);
        console.log("Fetched crops:", data);

      } catch (err) {
        console.error("Error fetching crops:", err);
      }
    };

    fetchCrops();
  }, []);

const filteredByCategory = cropss.filter(
  crop => crop.category.toUpperCase() === categoryName.toUpperCase()
);

  // console.log("Filtered:", filteredByCategory);

  const subcategories = ["All", ...new Set(filteredByCategory.map(item => item.crop_name))];

  const filteredRecommendations = selectedSubcategory === "All"
    ? filteredByCategory
    : filteredByCategory.filter(item => item.crop_name === selectedSubcategory);

  return (
    <div className="category-page-container">
      <Header />
      <div className="category-page">
        <div className="sidebar">
          <h3>Subcategories</h3>
          <ul>
            {subcategories.map((sub, index) => {
              const imageName = sub === "All"
                ? `All${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}.png`
                : `${sub}.png`;
                console.log("Image name:", imageName);
              return (
                <li
                  key={sub + index}
                  className={selectedSubcategory === sub ? "active" : ""}
                  onClick={() => setSelectedSubcategory(sub)}
                >
                  <span>
                    <img
                      src={`/${imageName}`}
                      alt={sub}
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "15px",
                        marginRight: "8px"
                      }}
                    />
                  </span>
                  {sub.toUpperCase()}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="recommendation-container">
          <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
          <div className="recommendation-crops">
            {filteredRecommendations.map((rec, index) => (
              <Recommendation key={index} crop={rec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default CategoryPage;
