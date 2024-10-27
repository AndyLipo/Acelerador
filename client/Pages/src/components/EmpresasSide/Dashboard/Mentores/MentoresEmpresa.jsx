import React from 'react'; 
import { MentoresTable } from './MentoresTable';

export const MentoresEmpresa = ({ darkMode }) => {
  return (
    <div className="mt-20 flex justify-start"> {/* Cambié justify-center a justify-start */}
      <div className={`ml-32 w-[1300px] rounded-md shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-[#C6E5D6]'}`}> {/* Ancho incrementado */}
        <div className={`p-4 rounded-t-md ${darkMode ? 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800' : 'bg-gradient-to-r from-[#76B596] via-[#41849D] to-[#034AA6]'}`}>
          <h2 className="text-center text-white text-xl font-semibold">Empresa</h2>
        </div>
        
        <div className={`p-4 rounded-b-md ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-[#C6E5D6] text-black'}`}>
          <MentoresTable darkMode={darkMode}/>
        </div>
      </div>
    </div>
  );
};
