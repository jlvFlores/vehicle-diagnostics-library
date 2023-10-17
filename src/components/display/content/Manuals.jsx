import PropTypes from 'prop-types';

const Manuals = ({ selectedManual }) => (
  <div>
    <div className="manual-header">
      {selectedManual.title}
      <button className="download-btn" type="button">Download PDF</button>
    </div>
    <iframe title="manual-preview" className="manual-iframe" src={selectedManual.url} />
  </div>
);

Manuals.propTypes = {
  selectedManual: PropTypes.instanceOf(Object).isRequired,
};

export default Manuals;
