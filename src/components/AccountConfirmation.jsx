import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmationRequest } from '../app/confirmation/confirmationSlice';

const AccountConfirmation = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.confirmation);

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const confirmationToken = params.get('confirmation_token');

  useEffect(() => {
    dispatch(confirmationRequest({ confirmationToken }));
  }, [dispatch, confirmationToken]);

  return (
    <div>
      <p>AccountConfirmation</p>
      {status}
    </div>
  );
};

export default AccountConfirmation;
