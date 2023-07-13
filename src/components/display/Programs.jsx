import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTab } from '../../app/searchbar/searchbarSlice';

const Programs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTab('programs'));
  }, [dispatch]);

  return (
    <>Programs</>
  );
};
export default Programs;
