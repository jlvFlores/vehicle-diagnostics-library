import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setSelectedCategories } from '../app/searchbar/searchbarSlice';
import SearchItem from './SearchItem';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { courses, manuals, programs } = useSelector((store) => store.content);
  const { searchValue, selectedCategories } = useSelector((store) => store.searchbar);

  useEffect(() => {
    const checkboxes = document.querySelectorAll('.checkbox-filters input');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }, []);

  const handleSearchInput = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const renderSearchItems = () => {
    const filterItems = (items, item_name) => items
      .filter((item) => searchValue.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchValue))
      .map((item) => <SearchItem key={item.id} id={item.id} tab={item_name} title={item.title} />);

    let filteredItems = [];

    if (selectedCategories.includes('courses')) {
      filteredItems.push(filterItems(courses, 'courses'));
    }
    if (selectedCategories.includes('manuals')) {
      filteredItems.push(filterItems(manuals, 'manuals'));
    }
    if (selectedCategories.includes('programs')) {
      filteredItems.push(filterItems(programs, 'programs'));
    }

    return filteredItems.flat();
  };

  const handleSelectAllFilter = (e) => {
    const checkboxes = document.querySelectorAll('.checkbox-filters input');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = e.target.checked;
    });

    dispatch(setSelectedCategories(e.target.checked ? ['courses', 'manuals', 'programs'] : []));
  };

  const handleFilter = (e) => {
    const selectAllCheckbox = document.querySelector('#select-all-checkbox');
    const categoryName = e.target.id.split('-')[0];

    if (e.target.checked) {
      const newArray = [...selectedCategories, categoryName];
      dispatch(setSelectedCategories(newArray));
    } else {
      selectAllCheckbox.checked = false;
      const newArray = selectedCategories.filter((item) => item !== categoryName);
      dispatch(setSelectedCategories(newArray));
    }
  };

  return (
    <section id="search-section">
      <form id="search-form">
        <input id="search-input-field" type="text" placeholder="search by name" onChange={handleSearchInput} />
        <div className="checkbox-filters">
          <input type="checkbox" id="select-all-checkbox" onChange={handleSelectAllFilter} />
          <label htmlFor="select-all-checkbox">Show all</label>
          <input type="checkbox" id="courses-checkbox" onChange={handleFilter} />
          <label htmlFor="courses-checkbox">Courses</label>
          <input type="checkbox" id="manuals-checkbox" onChange={handleFilter} />
          <label htmlFor="manuals-checkbox">Manuals</label>
          <input type="checkbox" id="programs-checkbox" onChange={handleFilter} />
          <label htmlFor="programs-checkbox">Programs</label>
        </div>
      </form>
      <div>{renderSearchItems()}</div>
    </section>
  );
};

export default SearchBar;
