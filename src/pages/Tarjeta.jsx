import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Tarjeta = () => {
  const { currentColor } = useStateContext();
  const [cardCollections, setCardCollections] = useState([]);

  useEffect(() => {
    // Simula la llamada a la API y actualiza el estado con la respuesta
    const fetchCardCollections = async () => {
      try {
        const response = await fetch('https://kofy-back.onrender.com/dashboard/getCardCollections');
        const data = await response.json();
        setCardCollections(data);
      } catch (error) {
        // eslint-disable-next-line
        console.error('Error al obtener las colecciones de tarjetas', error);
      }
    };

    fetchCardCollections();
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Tarjetas" />
      <div className="flex flex-wrap justify-justify">
        {cardCollections.map((collection) => (
          <div key={collection.id} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-80 p-8 pt-9 m-3 flex flex-col justify-between border border-gray-300">
            <div className="flex justify-around items-center">
              <div
                type="icon"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
              >
                <img src={collection.icon} alt={`${collection.name} Icon`} className="w-8 h-8" />
              </div>
              <div>
                <p className="text-2xl">{collection.name}</p>
              </div>
            </div>
            {collection.cards.map((card) => (
              <div key={card.id} className="flex justify-around items-center flex-grow">
                <div>
                  <p className="font-bold text-gray-400 flex justify-center">{card.index}</p>
                  <p className="text-2xl">{card.content}</p>
                  {card.is_video ? (
                    <iframe width="280" height="240" src={card.video_link} title={`${card.content} Video`} className="object-cover rounded-lg" />
                  ) : (
                    <img src={card.image_link} alt={`${card.content} Imagen`} className="w-full mt-4 rounded-lg" />
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-around items-center mt-4">
              <button type="button" className="bg-blue-500 text-white p-2 rounded-md">
                Editar
              </button>
              <button type="button" className="bg-red-500 text-white p-2 rounded-md">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tarjeta;
