import React, { useState, useEffect } from 'react';
import Auth0Lock from 'auth0-lock';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Fork from './Fork';

const Login = () => {
  const [token, setToken] = useState('');
  const [profile, setProfile] = useState({});
  var clientId = 'gTVhDDGBJV4FbimNo6gVK5KLLsR1ay3U';
  var domain = 'dev-2tw3ctk5.us.auth0.com';
  var lock;
  useEffect(() => {
    lock = new Auth0Lock(clientId, domain);
    lock.on('authenticated', function (authResult) {
      lock.getUserInfo(authResult.accessToken, function (error, profileResult) {
        if (error) {
          console.log(error);
          return;
        }
        setUser(authResult.accessToken, profileResult);
      });
    });
  }, []);

  function setUser(token, profile) {
    localStorage.setItem('aToken', token);
    localStorage.setItem('profile', JSON.stringify(profile));
    setToken(localStorage.getItem('aToken'));
    setProfile(JSON.parse(localStorage.getItem('profile')));
  }
  console.log(token, profile);
  function showLock() {
    lock.show();
  }
  var gitty;
  if (!token) {
    gitty = 'Please click on the Login button to see fork users';
  } else {
    gitty = <Fork />;
  }
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>Fork</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={showLock} href='#'>
            Login
          </Nav.Link>
        </Nav>
      </Navbar>
      {gitty}
    </div>
  );
};
export default Login;
