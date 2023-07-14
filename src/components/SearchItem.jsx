import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SearchItem = ({ id, tab, title }) => (
  <div className="search-item">
    <NavLink to={`/${tab}/${id}`}>
      <p>{title}</p>
    </NavLink>
  </div>
);

SearchItem.propTypes = {
  id: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SearchItem;
