// src/utils/documentGenerators.js

// Function to generate the PDF (relies on the browser's print function)
export const generatePDF = (formData) => {
  const printWindow = window.open('', '_blank');
  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Lab Record - ${formData.labNumber}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Times New Roman', serif;
          padding: 40px;
          line-height: 1.6;
          color: #000;
        }
        .header {
          text-align: center;
          border-bottom: 3px double #000;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          font-size: 24px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .header h2 {
          font-size: 18px;
          font-weight: normal;
          color: #333;
        }
        .student-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 30px;
          padding: 15px;
          background: #f9f9f9;
          border: 1px solid #ddd;
        }
        .info-item {
          display: flex;
        }
        .info-label {
          font-weight: bold;
          min-width: 120px;
        }
        .section {
          margin-bottom: 25px;
          page-break-inside: avoid;
        }
        .section-title {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
          padding: 8px 12px;
          background: #000;
          color: #fff;
          text-transform: uppercase;
        }
        .section-content {
          padding: 15px;
          border: 1px solid #ddd;
          background: #fff;
          white-space: pre-wrap;
          min-height: 60px;
        }
        .code-block {
          background: #f5f5f5;
          padding: 15px;
          border: 1px solid #ddd;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          white-space: pre-wrap;
          overflow-x: auto;
        }
        .footer {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 2px solid #000;
          display: flex;
          justify-content: space-between;
        }
        .signature-box {
          text-align: center;
        }
        .signature-line {
          width: 200px;
          border-top: 1px solid #000;
          margin-top: 60px;
          padding-top: 5px;
        }
        @media print {
          body { padding: 20px; }
          .section { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Laboratory Record</h1>
        <h2>Computer Science & Engineering</h2>
      </div>
      
      <div class="student-info">
        <div class="info-item">
          <span class="info-label">Student Name:</span>
          <span>${formData.studentName || 'N/A'}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Roll Number:</span>
          <span>${formData.rollNumber || 'N/A'}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Course:</span>
          <span>${formData.course || 'N/A'}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Semester:</span>
          <span>${formData.semester || 'N/A'}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Lab Number:</span>
          <span>${formData.labNumber || 'N/A'}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Date:</span>
          <span>${formData.date || 'N/A'}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">1. Aim</div>
        <div class="section-content">${formData.aim || 'Not provided'}</div>
      </div>

      <div class="section">
        <div class="section-title">2. Tools/Software Required</div>
        <div class="section-content">${formData.tools || 'Not provided'}</div>
      </div>

      <div class="section">
        <div class="section-title">3. Theory</div>
        <div class="section-content">${formData.theory || 'Not provided'}</div>
      </div>

      <div class="section">
        <div class="section-title">4. Program/Code</div>
        <div class="code-block">${formData.code || 'No code provided'}</div>
      </div>

      <div class="section">
        <div class="section-title">5. Output</div>
        <div class="section-content">${formData.output || 'Not provided'}</div>
      </div>

      <div class="section">
        <div class="section-title">6. Conclusion</div>
        <div class="section-content">${formData.conclusion || 'Not provided'}</div>
      </div>

      <div class="footer">
        <div class="signature-box">
          <div class="signature-line">Student Signature</div>
        </div>
        <div class="signature-box">
          <div class="signature-line">Faculty Signature</div>
        </div>
      </div>
    </body>
    </html>
  `;
  
  printWindow.document.write(content);
  printWindow.document.close();
  printWindow.onload = () => {
    printWindow.print();
  };
};

// Function to generate the Word (.doc) document
export const generateWord = (formData) => {
  const content = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Lab Record</title></head>
    <body>
      <div style="text-align: center; border-bottom: 3px double #000; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="font-size: 24px; margin-bottom: 10px;">LABORATORY RECORD</h1>
        <h2 style="font-size: 18px; font-weight: normal;">Computer Science & Engineering</h2>
      </div>
      
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; margin-bottom: 30px; border-collapse: collapse;">
        <tr><td><b>Student Name:</b></td><td>${formData.studentName || 'N/A'}</td>
            <td><b>Roll Number:</b></td><td>${formData.rollNumber || 'N/A'}</td></tr>
        <tr><td><b>Course:</b></td><td>${formData.course || 'N/A'}</td>
            <td><b>Semester:</b></td><td>${formData.semester || 'N/A'}</td></tr>
        <tr><td><b>Lab Number:</b></td><td>${formData.labNumber || 'N/A'}</td>
            <td><b>Date:</b></td><td>${formData.date || 'N/A'}</td></tr>
      </table>

      <h3 style="background: #000; color: #fff; padding: 8px;">1. AIM</h3>
      <p style="padding: 15px; border: 1px solid #ddd; min-height: 60px;">${formData.aim || 'Not provided'}</p>

      <h3 style="background: #000; color: #fff; padding: 8px; margin-top: 20px;">2. TOOLS/SOFTWARE REQUIRED</h3>
      <p style="padding: 15px; border: 1px solid #ddd;">${formData.tools || 'Not provided'}</p>

      <h3 style="background: #000; color: #fff; padding: 8px; margin-top: 20px;">3. THEORY</h3>
      <p style="padding: 15px; border: 1px solid #ddd; white-space: pre-wrap;">${formData.theory || 'Not provided'}</p>

      <h3 style="background: #000; color: #fff; padding: 8px; margin-top: 20px;">4. PROGRAM/CODE</h3>
      <pre style="background: #f5f5f5; padding: 15px; border: 1px solid #ddd; font-family: 'Courier New', monospace;">${formData.code || 'No code provided'}</pre>

      <h3 style="background: #000; color: #fff; padding: 8px; margin-top: 20px;">5. OUTPUT</h3>
      <p style="padding: 15px; border: 1px solid #ddd; white-space: pre-wrap;">${formData.output || 'Not provided'}</p>

      <h3 style="background: #000; color: #fff; padding: 8px; margin-top: 20px;">6. CONCLUSION</h3>
      <p style="padding: 15px; border: 1px solid #ddd;">${formData.conclusion || 'Not provided'}</p>

      <div style="margin-top: 50px; display: flex; justify-content: space-between;">
        <div style="text-align: center;">
          <div style="margin-top: 60px; border-top: 1px solid #000; width: 200px; padding-top: 5px;">Student Signature</div>
        </div>
        <div style="text-align: center;">
          <div style="margin-top: 60px; border-top: 1px solid #000; width: 200px; padding-top: 5px;">Faculty Signature</div>
        </div>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', content], {
    type: 'application/msword'
  });
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Lab_Record_${formData.labNumber || 'document'}.doc`;
  link.click();
  URL.revokeObjectURL(url);
};