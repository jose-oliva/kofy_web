import React, { useState } from 'react';
import { Header } from '../components';

const Registrar = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    puesto: '',
    ubicacion: '',
    fechaContratacion: '',
    jefe: '',
    foto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Registrar" />
      <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md shadow-md">
        <p className="text-xl font-bold mb-4">Formulario de Registro de Empleado</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="puesto" className="block text-sm font-medium text-gray-600">
              Puesto:
              <input
                type="text"
                name="puesto"
                value={formData.puesto}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-600">
              Ubicación:
              <input
                type="text"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="fechaContratacion" className="block text-sm font-medium text-gray-600">
              Fecha de Contratación:
              <input
                type="date"
                name="fechaContratacion"
                value={formData.fechaContratacion}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="jefe" className="block text-sm font-medium text-gray-600">
              Jefe:
              <input
                type="text"
                name="jefe"
                value={formData.jefe}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="foto" className="block text-sm font-medium text-gray-600">
              Foto:
              <input
                type="file"
                name="foto"
                accept="image/*"
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registrar;
