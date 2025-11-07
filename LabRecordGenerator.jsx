// src/LabRecordGenerator.jsx
import React, { useState, useCallback } from 'react';
import { FileText, Moon, Sun } from 'lucide-react';
import LabRecordForm from './components/LabRecordForm';
import ExportButtons from './components/ExportButtons';
import { generatePDF, generateWord } from './utils/documentGenerators';

export default function LabRecordGenerator() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    course: '',
    semester: '',
    labNumber: '',
    date: new Date().toISOString().split('T')[0],
    aim: '',
    tools: '',
    theory: '',
    code: '',
    output: '',
    conclusion: ''
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);
  
  // Wrap generators to pass current formData
  const handleGeneratePDF = () => generatePDF(formData);
  const handleGenerateWord = () => generateWord(formData);

  const containerClass = darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100';
  const cardClass = darkMode 
    ? 'bg-gray-800 shadow-gray-900/50 hover:shadow-2xl hover:shadow-blue-500/20' 
    : 'bg-white hover:shadow-2xl hover:shadow-indigo-500/20';
  const headerIconClass = darkMode ? 'text-blue-400' : 'text-indigo-600';
  const headerTitleClass = darkMode ? 'text-white' : 'text-gray-800';
  const headerSubtitleClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${containerClass} p-6`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:shadow-lg hover:shadow-yellow-400/50' 
                : 'bg-white text-indigo-600 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-500/50'
            }`}
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        {/* Main Card */}
        <div className={`rounded-lg shadow-lg p-8 mb-6 transition-all duration-300 ${cardClass}`}>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <FileText className={`w-10 h-10 ${headerIconClass}`} />
            <div>
              <h1 className={`text-3xl font-bold ${headerTitleClass}`}>Lab Record Generator</h1>
              <p className={headerSubtitleClass}>Create standardized laboratory records automatically</p>
            </div>
          </div>

          {/* Form Content */}
          <LabRecordForm 
            formData={formData} 
            handleChange={handleChange} 
            darkMode={darkMode} 
          />

          {/* Export Buttons and Instructions */}
          <ExportButtons 
            generatePDF={handleGeneratePDF} 
            generateWord={handleGenerateWord} 
            darkMode={darkMode} 
          />
        </div>
      </div>
    </div>
  );
}