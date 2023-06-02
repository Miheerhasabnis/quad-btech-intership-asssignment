import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './showSummary.css'
const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setSummary(response.data.summary);
      })
      .catch(error => {
        console.error('Error fetching show summary:', error);
      });
  }, [id]);

  return (
    <div className='container'>
      <h1>Show Summary</h1>
      <p  className='summary' dangerouslySetInnerHTML={{ __html: summary }}></p>
      <button className='button' onClick={() => console.log('Book ticket clicked!')}>
        Book Movie Ticket
      </button>
    </div>
  );
};

export default ShowSummary