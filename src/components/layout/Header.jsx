import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutRequest, setIsLoggedIn } from '../../app/login/loginSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.login);

  const handleSignOut = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(logoutRequest(token));
  };

  return (
    <header>
      <h1 className="logo">E.M.A.T.</h1>
      <nav>
        <div>
          <NavLink id="return-link" className="header-link" to="/">Recents</NavLink>
        </div>
        <div>
          <button type="button" className="header-link" onClick={handleSignOut}>Sign out</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
