import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTab } from '../../app/searchbar/searchbarSlice';

const Manuals = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTab('manuals'));
  }, [dispatch]);

  return (
    <>Manuals</>
  );
};

export default Manuals;
