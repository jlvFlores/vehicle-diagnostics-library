import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SearchItem = ({ id, title }) => (
  <div className="search-item">
    <NavLink to={`/content/${id}`}>
      <p>{title}</p>
    </NavLink>
  </div>
);

SearchItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SearchItem;
