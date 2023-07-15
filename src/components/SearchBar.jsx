import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../app/searchbar/searchbarSlice';
import SearchItem from './SearchItem';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { courses, manuals, programs } = useSelector((store) => store.content);
  const { searchValue } = useSelector((store) => store.searchbar);

  const [showAllCheckbox, setShowAllCheckbox] = useState(true);
  const [checkboxStates, setCheckboxStates] = useState([true, true, true]);

  useEffect(() => {
    const [checkbox0, checkbox1, checkbox2] = checkboxStates;
    setShowAllCheckbox(checkbox0 && checkbox1 && checkbox2);
  }, [checkboxStates]);

  const handleCheckboxChange = (checkboxIndex) => {
    setCheckboxStates((prevStates) => {
      const newStates = [...prevStates];
      if (checkboxIndex === 'show-all') {
        setShowAllCheckbox(true);
        newStates[0] = true;
        newStates[1] = true;
        newStates[2] = true;
      } else {
        setShowAllCheckbox(false);
        newStates[checkboxIndex] = !newStates[checkboxIndex];
      }
      return newStates;
    });
  };

  const handleSearchInput = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const renderSearchItems = () => {
    const filterItems = (items, itemName) => items
      .filter((item) => (searchValue.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchValue)))
      .map((item) => <SearchItem key={item.id} id={item.id} tab={itemName} title={item.title} />);

    const filteredItems = [];

    if (checkboxStates[0]) {
      filteredItems.push(filterItems(courses, 'courses'));
    }
    if (checkboxStates[1]) {
      filteredItems.push(filterItems(manuals, 'manuals'));
    }
    if (checkboxStates[2]) {
      filteredItems.push(filterItems(programs, 'programs'));
    }

    return filteredItems.flat();
  };

  return (
    <section id="search-section">
      <form id="search-form">
        <input id="search-input-field" type="text" placeholder="search by name" onChange={handleSearchInput} />
        <div className="checkbox-filters">
          <label htmlFor="show-all-checkbox">
            <input
              type="checkbox"
              id="show-all-checkbox"
              checked={showAllCheckbox}
              onChange={() => handleCheckboxChange('show-all')}
            />
            Show all
          </label>
          <label htmlFor="courses-checkbox">
            <input
              type="checkbox"
              id="courses-checkbox"
              checked={checkboxStates[0]}
              onChange={() => handleCheckboxChange(0)}
            />
            Courses
          </label>
          <label htmlFor="manuals-checkbox">
            <input
              type="checkbox"
              id="manuals-checkbox"
              checked={checkboxStates[1]}
              onChange={() => handleCheckboxChange(1)}
            />
            Manuals
          </label>
          <label htmlFor="programs-checkbox">
            <input
              type="checkbox"
              id="programs-checkbox"
              checked={checkboxStates[2]}
              onChange={() => handleCheckboxChange(2)}
            />
            Programs
          </label>
        </div>
      </form>
      <div>{renderSearchItems()}</div>
    </section>
  );
};

export default SearchBar;
