import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ userInfo, username, password, setUserName, setPassword, onSubmit, sigIn, warn }: any) {
  let navigate = useNavigate();

  useEffect(() => {
    if(sigIn) {
      return navigate("/main")
  } else {return navigate('/')}
  }, [navigate, sigIn])

  return (
    <form className='form' onSubmit={onSubmit}>
        <h2>Sign In</h2>
        {warn && <p style={{color: 'red'}}>{warn}</p>}
        <input data-testid="user-field" type="text" placeholder='Username' className='userfield' onChange={(e) => setUserName(e.target.value)}/>
        <input data-testid="pass-field" type="password" placeholder='Password' className='passfield' onChange={(e) => setPassword(e.target.value)}/>
        <input data-testid="btn-sign-in" type="submit" value='Sign In' className='btnSignIn'/>
    </form>
  )
}

export default LoginForm