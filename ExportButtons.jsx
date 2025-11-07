// src/components/ExportButtons.jsx
import React from 'react';
import { Download } from 'lucide-react';

export default function ExportButtons({ generatePDF, generateWord, darkMode }) {
  const borderColor = darkMode ? '#374151' : '#e5e7eb';
  const instructionBg = darkMode ? 'bg-gray-800 shadow-gray-900/50 hover:shadow-2xl hover:shadow-blue-500/20' : 'bg-white hover:shadow-2xl hover:shadow-indigo-500/20';

  return (
    <>
      {/* Export Buttons */}
      <div className="flex gap-4 mt-8 pt-6 border-t" style={{borderColor}}>
        <button
          onClick={generatePDF}
          className={`flex-1 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 ${
            darkMode
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-2xl hover:shadow-indigo-500/50'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-2xl hover:shadow-indigo-500/50'
          }`}
        >
          <Download className="w-5 h-5" />
          Export as PDF
        </button>
        <button
          onClick={generateWord}
          className={`flex-1 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 ${
            darkMode
              ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/50'
              : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/50'
          }`}
        >
          <Download className="w-5 h-5" />
          Export as Word
        </button>
      </div>

      {/* Instructions */}
      <div className={`rounded-lg shadow-lg p-6 mt-6 transition-all duration-300 ${instructionBg}`}>
        <h3 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Instructions</h3>
        <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <li>• Fill in all the required fields for your lab record</li>
          <li>• Click "Export as PDF" to print or save as PDF</li>
          <li>• Click "Export as Word" to download as a Word document</li>
          <li>• All formatting will be automatically applied</li>
        </ul>
      </div>
    </>
  );
}