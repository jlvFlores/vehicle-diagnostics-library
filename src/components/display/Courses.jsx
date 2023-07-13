import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTab } from '../../app/searchbar/searchbarSlice';

const Courses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTab('courses'));
  }, [dispatch]);

  return (
    <>Courses</>
  );
};

export default Courses;
