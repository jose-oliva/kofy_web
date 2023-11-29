import React from 'react';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Tarjeta = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Tarjetas" />
      <div className="flex flex-wrap justify-justify ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-80 p-8 pt-9 m-3 flex flex-col justify-between border border-gray-300">
          <div className="flex justify-around items-center">
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <img src="https://kofy-back.onrender.com/images/inhalador/icon.png" alt="Inhalador Icon" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl"> Inhalador </p>
            </div>
          </div>
          <div className="flex justify-around items-center flex-grow">
            <div>
              <p className="font-bold text-gray-400 flex justify-center"> 1 </p>
              <p className="text-2xl"> Seña </p>
              <iframe width="280" height="240" src="https://youtu.be/Affn5KwAfXA" title="Seña Video" className="object-cover rounded-lg" />
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button type="button" className="bg-blue-500 text-white p-2 rounded-md">Editar</button>
            <button type="button" className="bg-red-500 text-white p-2 rounded-md">Eliminar</button>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-80 p-8 pt-9 m-3 flex flex-col justify-between border border-gray-300">
          <div className="flex justify-around items-center">
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <img src="https://kofy-back.onrender.com/images/inhalador/icon.png" alt="Inhalador Icon" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl"> Inhalador </p>
            </div>
          </div>
          <div className="flex justify-around items-center flex-grow">
            <div>
              <p className="font-bold text-gray-400 flex justify-center"> 2 </p>
              <p className="text-2xl"> Video Explicarorio </p>
              <iframe width="280" height="240" src="https://youtu.be/v7GnuwTGZUE" title="Video Explicarorio" className="object-cover rounded-lg" />
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button type="button" className="bg-blue-500 text-white p-2 rounded-md">Editar</button>
            <button type="button" className="bg-red-500 text-white p-2 rounded-md">Eliminar</button>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-around items-center">
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <img src="https://kofy-back.onrender.com/images/inhalador/icon.png" alt="Inhalador Icon" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl"> Inhalador </p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div>
              <p className="font-bold text-gray-400 flex justify-center"> 3 </p>
              <p className="text-2xl"> Agitar fuertemente de 10 a 15 veces, y exhalar por completo </p>
              <img src="https://kofy-back.onrender.com/images/inhalador/inhalador-02.png" alt="Agitar Imagen" className="w-full mt-4 rounded-lg" />
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button type="button" className="bg-blue-500 text-white p-2 rounded-md">Editar</button>
            <button type="button" className="bg-red-500 text-white p-2 rounded-md">Eliminar</button>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300 h-30">
          <div className="flex justify-around items-center">
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <img src="https://kofy-back.onrender.com/images/inhalador/icon.png" alt="Inhalador Icon" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl"> Inhalador </p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div>
              <p className="font-bold text-gray-400 flex justify-center"> 4 </p>
              <p className="text-2xl"> Sostener inhalador con boquilla hacia abajo y colocar labios alrededor </p>
              <img src="https://kofy-back.onrender.com/images/inhalador/inhalador-03.png" alt="Sostener Imagen" className="w-full mt-4 rounded-lg" />
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button type="button" className="bg-blue-500 text-white p-2 rounded-md">Editar</button>
            <button type="button" className="bg-red-500 text-white p-2 rounded-md">Eliminar</button>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-around items-center">
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <img src="https://kofy-back.onrender.com/images/inhalador/icon.png" alt="Inhalador Icon" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl"> Inhalador </p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div>
              <p className="font-bold text-gray-400 flex justify-center"> 5 </p>
              <p className="text-2xl"> Inhalar lentamente, apretar inhalador una vez y continuar inhalando </p>
              <img src="https://kofy-back.onrender.com/images/inhalador/inhalador-04.png" alt="Sostener Imagen" className="w-full mt-4 rounded-lg" />
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button type="button" className="bg-blue-500 text-white p-2 rounded-md">Editar</button>
            <button type="button" className="bg-red-500 text-white p-2 rounded-md">Eliminar</button>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-30 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-around items-center">
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <img src="https://kofy-back.onrender.com/images/inhalador/icon.png" alt="Inhalador Icon" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl"> Inhalador </p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div>
              <p className="font-bold text-gray-400 flex justify-center"> 6 </p>
              <p className="text-2xl"> Sacar inhalador y aguantar respiración por 10 segundos, luego exhalar </p>
              <img src="https://kofy-back.onrender.com/images/inhalador/inhalador-05.png" alt="Sostener Imagen" className="w-full mt-4 rounded-lg" />
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button type="button" className="bg-blue-500 text-white p-2 rounded-md">Editar</button>
            <button type="button" className="bg-red-500 text-white p-2 rounded-md">Eliminar</button>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-around items-center">
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <img src="https://kofy-back.onrender.com/images/inhalador/icon.png" alt="Inhalador Icon" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl"> Inhalador </p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div>
              <p className="font-bold text-gray-400 flex justify-center"> 7 </p>
              <p className="text-2xl"> Coloca de nuevo la tapa sobre la boquilla y asegurarse de que este cerrada </p>
              <img src="https://kofy-back.onrender.com/images/inhalador/inhalador-06.png" alt="Sostener Imagen" className="w-full mt-4 rounded-lg" />
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button type="button" className="bg-blue-500 text-white p-2 rounded-md">Editar</button>
            <button type="button" className="bg-red-500 text-white p-2 rounded-md">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
