import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './showList.css'
const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching show list:', error);
      });
  }, []);

  return (
    <div className='container'>
      <h1>TV Shows</h1>
      {shows.map(showData => {
        const show = showData.show;
        return (
            <div className='show' key={show.id}>
            <h2>{show.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
            <Link to={`/shows/${show.id}`}>View Summary</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShowList;