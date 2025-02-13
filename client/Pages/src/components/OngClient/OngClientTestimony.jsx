import React from 'react';
import { FormButton } from '../Login/LoginComponents/FormButton';
import { IconOngTestimony } from './IconOngTestimony';
import { NavLink } from 'react-router-dom';

export const OngClientTestimony = ({ darkMode }) => {
  return (
    <>
      <main className={`flex justify-between px-4 py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-[#82C7A5]'
      }`}>
        <div className="max-w-xl">
          <div className="pb-4">
            <h2  className={`text-4xl font-bold text-left ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
            >
              Impulsar tu ONG con talento <br />
              de calidad ahora es simple
            </h2>
          </div>
          <div className="pb-4">
            <p className={`text-sm text-left ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Polo IT te ayuda a encontrar, contratar y gestionar los mejores talentos de la región.
            </p>
          </div>
          <a>
          <NavLink to='/crear-cuenta'>
            <FormButton 
              text="Empezá tu camino"
              className={`${
                darkMode 
                  ? 'bg-sky-600 hover:bg-sky-700' 
                  : 'bg-sky-500 hover:bg-sky-600'
              } text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
            />
          </NavLink>
          </a>
        </div>
        <div className="flex items-start pr-20">
          <IconOngTestimony />
        </div>
      </main>
    </>
  );
};
