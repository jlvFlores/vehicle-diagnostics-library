import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { confirmationRequest } from '../../app/confirmation/confirmationSlice';

const AccountConfirmation = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.confirmation);
  const [queryParams] = useSearchParams();
  const confirmationToken = queryParams.get('confirmation_token');

  useEffect(() => {
    dispatch(confirmationRequest({ confirmationToken }));
  }, [dispatch, confirmationToken]);

  const confirmationMessage = () => {
    switch (status) {
      case 0:
        return (<p>Verifying your account...</p>);
      case 200:
        return (
          <>
            <p>Your account has been confirmed.</p>
            <Link to="/login">Login now</Link>
          </>
        );
      default:
        return (
          <>
            <p>Your account could not be confirmed.</p>
            <Link to="/register">Register again</Link>
          </>
        );
    }
  };

  return (
    <main className="container">
      <div className="box">
        {confirmationMessage()}
      </div>
    </main>
  );
};

export default AccountConfirmation;
