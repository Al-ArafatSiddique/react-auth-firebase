import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/Auth-Context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!authCtx.token && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {authCtx.token && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
         {authCtx.token &&  <li>
            <button>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
