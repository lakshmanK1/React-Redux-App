import classes from './Header.module.css';
import { authAction } from '../Store/index';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {


  const isAuth = useSelector(state=>state.Auth.isAuthenticated);
  const dispatch = useDispatch();

    const LogOutHandler = () => {
    dispatch(authAction.logOut());
  }



  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
           <button onClick={LogOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
