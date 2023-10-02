import PropTypes from 'prop-types';

const Manuals = ({ selectedManual }) => (
  <div>
    <div className="manual-header">
      {selectedManual.title}
      <button className="download-btn" type="button">Download PDF</button>
    </div>
    <iframe
      className="manual-iframe"
      src={`https://docs.google.com/gview?url=${encodeURIComponent(selectedManual.url)}&embedded=true`}
      title="PDF Viewer"
    />
  </div>
);

Manuals.propTypes = {
  selectedManual: PropTypes.instanceOf(Object).isRequired,
};

export default Manuals;
