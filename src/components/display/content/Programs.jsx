import React from 'react';
import PropTypes from 'prop-types';

const Programs = ({ selectedProgram }) => (
  <div className="program-container">
    <div className="download-header">
      <p>IMAGE</p>
      <a href={selectedProgram.file} download="file.pdf">{selectedProgram.title}</a>
    </div>
    <p>{selectedProgram.description}</p>
  </div>
);

Programs.propTypes = {
  selectedProgram: PropTypes.instanceOf(Object).isRequired,
};

export default Programs;
