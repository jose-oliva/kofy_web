import React, { useEffect, useState } from 'react';
import { GoDiamond } from 'react-icons/go';
import { IoMan, IoMedkit, IoWater, IoWarning, IoScale } from 'react-icons/io5';
// IoMaleFemale, IoWoman,
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const MainDoctor = () => {
  const { currentColor } = useStateContext();
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetch('https://kofy-back.onrender.com/dashboard/getSummary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ accessId: '0ysieo2' }),
    })
      .then((response) => response.json())
      .then((data) => {
        const extractedData = {};
        data.resultado.forEach((item) => {
          const [key, value] = item.split(': ');
          if (key.toLowerCase().includes('medicamentos recetados')) {
            // eslint-disable-next-line dot-notation
            extractedData['medicamentosrecetados'] = value.split(', ');
          } else {
            extractedData[key.toLowerCase().replace(/ /g, '')] = value;
          }
        });
        setSummary(extractedData);
      })
      // eslint-disable-next-line
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-24">
      <h1 className="flex justify-center"> Bienvenido Doctor/a 👋 {summary.firmadopor} </h1>
      <h1 className="flex justify-center"> Aqui esta la información de la sesion con fecha de {summary.fecha} </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-50 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Paciente (Masculino)</p>
              <p className="text-2xl"> {summary.paciente} </p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <IoMan />
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-60 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Edad</p>
              <p className="text-2xl"> {summary.edad} </p>
              <p className="font-bold text-gray-400">Sangre</p>
              <p className="text-2xl">N/A</p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
            >
              <IoWater />
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-60 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Altura</p>
              <p className="text-2xl">N/A cm</p>
              <p className="font-bold text-gray-400">Peso</p>
              <p className="text-2xl">N/A kg</p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <IoScale />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Alergias</p>
              <p className="text-2xl">N/A</p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <IoWarning />
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Enfermedades</p>
              <p className="text-2xl">N/A</p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
            >
              <IoMedkit />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold">Sesion de Escucha</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDiamond />
                </span>
                <span>Original</span>
              </p>
              <p className="flex items-center gap-2 text-red-400 hover:drop-shadow-xl">
                <span>
                  <GoDiamond />
                </span>
                <span>Modificado</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div>
              <div>
                <p>
                  <span className="text-3xl font-semibold">N/A</span>
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Editar Sesion"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" rounded-2xl md:w-400 p-4 m-3" style={{ backgroundColor: currentColor }}>
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white">Recordatorios</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">
                {summary.medicamentosrecetados && summary.medicamentosrecetados.map((medicamento, index) => (
                  <div key={index}>- {medicamento}</div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDoctor;