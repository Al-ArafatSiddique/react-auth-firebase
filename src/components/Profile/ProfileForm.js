import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/Auth-Context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history=useHistory();
  const authCtx= useContext(AuthContext);
  const newPasswordRef= useRef();
  const passwordChangeHandler=(event)=>{
    event.preventDefault();
    const enteredPassword = newPasswordRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDP1CTmqWAzT9NubNB8zP4JLKdP3l8-BpA',
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((data)=>{
      console.log(data);
      history.replace('/');
    })


  }
  return (
    <form className={classes.form} onSubmit={passwordChangeHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
