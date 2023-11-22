import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import LoginPage from './pages/login';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Tarjetas, Calendario, Empleados, Registrar, Apilada, Kanban, Area, Barras, Pastel } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode } = useStateContext();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <Routes>
          {/* Ruta agregada para /login */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          {!isLoggedIn ? (
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          ) : (
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Ecommerce />} />
              <Route path="ecommerce" element={<Ecommerce />} />
              <Route path="tarjetas" element={<Tarjetas />} />
              <Route path="empleados" element={<Empleados />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="calendario" element={<Calendario />} />
              <Route path="kanban" element={<Kanban />} />
              <Route path="area" element={<Area />} />
              <Route path="barras" element={<Barras />} />
              <Route path="pastel" element={<Pastel />} />
              <Route path="apilada" element={<Apilada />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const MainLayout = () => {
  const { activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div
        className="fixed right-4 bottom-4"
        style={{ zIndex: '1000' }}
      >
        <TooltipComponent
          content="Ajustes"
          position="TopCenter"
        >
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{
              background: currentColor,
              borderRadius: '50%',
            }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
            <span className="sr-only">Settings</span>
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? 'md:ml-72' : 'flex-2'
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
        <div>
          {themeSettings && <ThemeSettings />}
          <Outlet /> {/* Este componente renderiza las rutas anidadas */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
