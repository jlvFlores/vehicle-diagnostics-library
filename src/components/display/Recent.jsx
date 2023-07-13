import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTab } from '../../app/searchbar/searchbarSlice';

const Recent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTab('recent'));
  }, [dispatch]);

  return (
    <>Recent</>
  );
};
export default Recent;
