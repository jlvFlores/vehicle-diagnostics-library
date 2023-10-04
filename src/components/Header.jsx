import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { logoutRequest, setIsSignedIn } from '../app/signin/signinSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const route = useLocation().pathname;
  const { token } = useSelector((store) => store.signin);

  const handleSignOut = () => {
    dispatch(setIsSignedIn(false));
    dispatch(logoutRequest(token));
  };

  return (
    <header>
      <h1 className="logo">E.M.A.T.</h1>
      { route !== '/login' && route !== '/register'
        ? (
          <nav>
            <div>
              <NavLink id="return-link" className={`header-link ${id !== undefined ? 'return-link' : ''}`} to="/">Return</NavLink>
            </div>
            <div>
              <button type="button" className="header-link" onClick={handleSignOut}>Sign out</button>
            </div>
          </nav>
        )
        : (
          <nav>
            <div>
              <NavLink id="return-link" className={`header-link ${id !== undefined ? 'return-link' : ''}`} to="/">Return</NavLink>
            </div>
            <div>
              <NavLink className="header-link" to="/login">Login</NavLink>
              <NavLink className="header-link" to="/register">Register</NavLink>
            </div>
          </nav>
        )}
    </header>
  );
};

export default Header;
