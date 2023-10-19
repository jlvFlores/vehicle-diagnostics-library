import PropTypes from 'prop-types';

const Manuals = ({ selectedManual }) => (
  <div>
    <div className="manual-header">
      {selectedManual.title}
      <a className="download-btn" href={`https://drive.google.com/uc?export=download&id=${selectedManual.key}`} target="_blank" rel="noopener noreferrer">Download PDF</a>
    </div>
    <iframe title="manual-preview" className="manual-iframe" src={`https://drive.google.com/file/d/${selectedManual.key}/preview`} />
  </div>
);

Manuals.propTypes = {
  selectedManual: PropTypes.instanceOf(Object).isRequired,
};

export default Manuals;
