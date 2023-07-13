import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../app/searchbar/searchbarSlice';
import SearchItem from './SearchItem';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((store) => store.courses);
  const { manuals } = useSelector((store) => store.manuals);
  const { programs } = useSelector((store) => store.programs);
  const { searchValue, currentTab } = useSelector((store) => store.searchbar);

  const handleSearchInput = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const renderSearchItems = () => {
    const filterItems = (items) => items
      .filter((item) => (searchValue.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchValue)))
      .map((item) => (
        <SearchItem key={item.id} id={item.id} tab={currentTab} title={item.title} />
      ));

    let filteredItems = [];

    switch (currentTab) {
      case 'courses':
        filteredItems = filterItems(courses);
        break;
      case 'manuals':
        filteredItems = filterItems(manuals);
        break;
      case 'programs':
        filteredItems = filterItems(programs);
        break;
      default:
        break;
    }

    return filteredItems;
  };

  return (
    <section id="search-section">
      <form id="search-form">
        <input id="search-input-field" type="text" placeholder="search by name" onChange={handleSearchInput} />
      </form>
      <div>{renderSearchItems()}</div>
    </section>
  );
};

export default SearchBar;
