import React from 'react';

const Manuals = ({ selectedManual }) => {

  return (
    <div>
      <div className="manual-header" >
        {selectedManual.title}
        <button className="download-btn" type="button">Download PDF</button>
      </div>
      <iframe 
        className="manual-iframe"
        src={`https://docs.google.com/gview?url=${encodeURIComponent(selectedManual.url)}&embedded=true`} 
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}
export default Manuals;
