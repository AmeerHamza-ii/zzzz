import React, { useState, useEffect } from "react";
import axios from "axios";
import "./data.css";

const ModelOutput = () => {
  const [data, setData] = useState(() => {
    // Retrieve data from local storage if available
    const savedData = localStorage.getItem("modelOutputData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const [totalMSE, setTotalMSE] = useState(() => {
    // Retrieve totalMSE from local storage if available
    const savedTotalMSE = localStorage.getItem("totalMSE");
    return savedTotalMSE ? JSON.parse(savedTotalMSE) : 0;
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000");
      const responseData = response.data;

      // Store data in local storage
      localStorage.setItem("modelOutputData", JSON.stringify(responseData));

      // Update state with fetched data
      setData(responseData);

      const mseValues = Object.values(responseData.mse);

      const sum = mseValues.reduce((acc, curr) => acc + curr, 0);
      // Store totalMSE in local storage
      localStorage.setItem("totalMSE", JSON.stringify(sum));

      // Update state with totalMSE
      setTotalMSE(sum);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    // Fetch data only if not already fetched
    if (!data) {
      fetchData();
    }
  });
  const handleFetchDataClick = () => {
    fetchData();
  };
  return (
    <div className="maindiv">
      <button onClick={handleFetchDataClick}>Refresh &#10140; </button>
    </div>
  );
};

export default ModelOutput;
