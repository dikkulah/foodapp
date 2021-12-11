import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searhTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searhTerm,
          location: "san jose",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  // tek sefer çağrıda bulunmak için , başlangıç araması
  useEffect(() => {
    searchApi("meat");
  }, []);
  //searchApi('pasta');

  return [searchApi, restaurants, errorMessage];
};
