import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../components';

const Tarjeta = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        // Esto no resolverá el problema de CORS si el servidor no acepta tu origen.
        'Access-Control-Allow-Origin': 'https://kofy-back.onrender.com',
      },
    };
    axios.get('https://kofy-back.onrender.com/dashboard/getCardCollections', options)
      .then((response) => {
        setCollections(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Tarjetas" />
      {collections.map((collection) => (
        <div key={collection.id}>
          <h1>{collection.name}</h1>
          <img src={collection.icon} alt={collection.name} />
          <div>
            {collection.cards.map((card) => (
              <div key={card.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                <h2>{card.content}</h2>
                {card.is_video ? (
                  // eslint-disable-next-line
                  <video width="320" height="240" controls>
                    <source src={card.video_link} type="video/mp4" />
                    Tu navegador no soporta videos.
                  </video>
                ) : (
                  <img src={`https://kofy-back.onrender.com/images/${card.image_link}`} alt={card.content} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tarjeta;
