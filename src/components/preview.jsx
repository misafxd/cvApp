import "../styles/cvPreview.css"
import React, { useRef } from "react"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Preview({ general, practical, education }) {
  const previewRef = useRef();

  const downloadPDF = async () => {
    const element = previewRef.current;
    const downloadButton = element.querySelector(".download");
    downloadButton.style.display = "none";

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "letter");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width / 4;
    const imgHeight = (canvas.height / canvas.width) * imgWidth;

    const scaleX = pageWidth / imgWidth;
    const scaleY = pageHeight / imgHeight;
    const scale = Math.min(scaleX, scaleY);

    const finalWidth = imgWidth * scale;
    const finalHeight = imgHeight * scale;

    const offsetX = (pageWidth - finalWidth) / 2;
    const offsetY = 0;

    pdf.addImage(imgData, "PNG", offsetX, offsetY, finalWidth, finalHeight);

    pdf.save("cv-preview.pdf");
    downloadButton.style.display = "block";
  }

  return (
    <div ref={previewRef} className='preview'>
      <div className='cv-header'>
        <h1>{general.name}</h1>
        <p>Email: {general.email} | Tel: {general.phone}</p>
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <p>
              <strong>{edu.school}</strong> - {edu.title}
            </p>
            <p className="study-date">{edu.date}</p>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2>Experience</h2>
        {practical.map((prac, index) => (
          <div key={index} className="experience-item">
            <h3>{prac.company}</h3>
            <p className="date-range">
              From: {prac.dateFrom} - Until: {prac.dateUntil}
            </p>
            <p>Position: {prac.position}</p>
            <p className="responsibilities">Main responsibilities</p>
            <p className="responsibilities">{prac.responsibilities}</p>
          </div>
        ))}
      </div>
      <button className="download" onClick={downloadPDF}>Download PDF</button>
    </div>
  )
}

export default Preview
