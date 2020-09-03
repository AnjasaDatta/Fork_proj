import React, { useState, useEffect } from 'react';
import Search from './Search';
import Profile from './Profile';
var URL = 'https://api.github.com/repos';
const Fork = () => {
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);
  function getProfile(username) {
    var finalURL = `${URL}/${username}/react/forks?page=4&per_page=10'`;
    fetch(finalURL)
      .then(response => response.json())
      .then(data => {
        setUserName('facebook');
        var u = data.map(user => user.owner.login);
        setUsers(u);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => {
    getProfile(userName);
  }, []);

  return (
    <div>
      <Search searchProfile={getProfile} />
      <Profile un={userName} us={users} />
    </div>
  );
};
export default Fork;
