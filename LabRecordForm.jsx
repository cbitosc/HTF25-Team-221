// src/components/LabRecordForm.jsx
import React from 'react';
import { User, Target, Wrench, BookOpen, Code, Image, FileCheck } from 'lucide-react';

export default function LabRecordForm({ formData, handleChange, darkMode }) {
  const inputStyle = (dark) => 
    `rounded-lg px-4 py-2 transition-all duration-300 focus:ring-2 focus:border-transparent border ${
      dark
        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 hover:bg-gray-650 hover:shadow-lg hover:shadow-blue-500/30'
        : 'bg-white border-gray-300 text-gray-900 focus:ring-indigo-500 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/30'
    }`;
  
  const labelStyle = (dark) => `font-semibold ${dark ? 'text-gray-200' : 'text-gray-700'}`;
  const iconStyle = (dark) => `w-5 h-5 ${dark ? 'text-blue-400' : 'text-indigo-600'}`;

  return (
    <div className="space-y-6">
      {/* Student Details */}
      <div className="border-b pb-4" style={{borderColor: darkMode ? '#374151' : '#e5e7eb'}}>
        <div className="flex items-center gap-2 mb-4">
          <User className={iconStyle(darkMode)} />
          <h2 className={`text-xl font-semibold ${labelStyle(darkMode)}`}>Student Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="studentName" placeholder="Student Name" value={formData.studentName} onChange={handleChange} className={inputStyle(darkMode)} />
          <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} className={inputStyle(darkMode)} />
          <input type="text" name="course" placeholder="Course Name" value={formData.course} onChange={handleChange} className={inputStyle(darkMode)} />
          <input type="text" name="semester" placeholder="Semester" value={formData.semester} onChange={handleChange} className={inputStyle(darkMode)} />
          <input type="text" name="labNumber" placeholder="Lab Number (e.g., Lab 01)" value={formData.labNumber} onChange={handleChange} className={inputStyle(darkMode)} />
          <input type="date" name="date" value={formData.date} onChange={handleChange} className={inputStyle(darkMode)} />
        </div>
      </div>

      {/* Aim */}
      <div>
        <div className="flex items-center gap-2 mb-2"><Target className={iconStyle(darkMode)} /><label className={labelStyle(darkMode)}>Aim</label></div>
        <textarea name="aim" placeholder="Enter the objective of this lab experiment..." value={formData.aim} onChange={handleChange} rows="2" className={inputStyle(darkMode)} />
      </div>

      {/* Tools */}
      <div>
        <div className="flex items-center gap-2 mb-2"><Wrench className={iconStyle(darkMode)} /><label className={labelStyle(darkMode)}>Tools/Software Required</label></div>
        <textarea name="tools" placeholder="List all tools, software, and hardware required (e.g., Python 3.x, VS Code, Arduino IDE)..." value={formData.tools} onChange={handleChange} rows="2" className={inputStyle(darkMode)} />
      </div>

      {/* Theory */}
      <div>
        <div className="flex items-center gap-2 mb-2"><BookOpen className={iconStyle(darkMode)} /><label className={labelStyle(darkMode)}>Theory</label></div>
        <textarea name="theory" placeholder="Explain the theoretical background, concepts, and principles..." value={formData.theory} onChange={handleChange} rows="5" className={inputStyle(darkMode)} />
      </div>

      {/* Code */}
      <div>
        <div className="flex items-center gap-2 mb-2"><Code className={iconStyle(darkMode)} /><label className={labelStyle(darkMode)}>Program/Code</label></div>
        <textarea name="code" placeholder="Paste your code here..." value={formData.code} onChange={handleChange} rows="8" className={`${inputStyle(darkMode)} font-mono text-sm ${darkMode ? 'bg-gray-900 text-green-400 placeholder-gray-500 hover:bg-gray-850' : 'bg-gray-50'}`} />
      </div>

      {/* Output */}
      <div>
        <div className="flex items-center gap-2 mb-2"><Image className={iconStyle(darkMode)} /><label className={labelStyle(darkMode)}>Output</label></div>
        <textarea name="output" placeholder="Describe or paste the output of your program..." value={formData.output} onChange={handleChange} rows="4" className={inputStyle(darkMode)} />
      </div>

      {/* Conclusion */}
      <div>
        <div className="flex items-center gap-2 mb-2"><FileCheck className={iconStyle(darkMode)} /><label className={labelStyle(darkMode)}>Conclusion</label></div>
        <textarea name="conclusion" placeholder="Summarize your findings and learning outcomes..." value={formData.conclusion} onChange={handleChange} rows="3" className={inputStyle(darkMode)} />
      </div>
    </div>
  );
}