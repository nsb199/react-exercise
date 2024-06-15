import React, { useState, useEffect } from "react";
import Card from "./Card";
import TextField from '@mui/material/TextField';
import axios from "axios";
import './Gym.css';

function Gym() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [dataIncrease, setDataIncrease] = useState(12);

  async function fetchAPI() {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      params: { limit: dataIncrease },
      headers: {
        'x-rapidapi-key': 'e806a6f38cmsh3be995132d4f327p1cf72fjsn2908cf23eec5',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
      setContent(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [dataIncrease]);

  const handleChange = (query) => {
    if (query === '') {
      setData(content);
    } else {
      const newFilterData = content.filter(data => data.name.includes(query));
      setData(newFilterData);
    }
  };

  return (
    <div className="gym-container">
      <h1 className="gym-title">Exercise List</h1>
      <div className="gym-search">
        <TextField
          id="outlined-basic"
          style={{ width: "50%" }}
          label="Search"
          variant="outlined"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {data.length > 0 ? (
        <div className="gym-card-container">
          {data.map((e) => (
            <Card
              key={e.id}
              image={e.gifUrl}
              name={e.name}
              bodyPart={e.bodyPart}
              target={e.target}
            />
          ))}
        </div>
      ) : (
        <h2 className="gym-no-data">Data Not Found</h2>
      )}
      <div className="gym-show-more">
        <button onClick={() => setDataIncrease(dataIncrease + 10)}>
          Show More
        </button>
      </div>
    </div>
  );
}

export default Gym;
