import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
const { request } = require('@octokit/request');

const Profile = props => {
  // const USERNAME = 'AnjasaDatta';
  // const PASSWORD = '3dc6c4f3c9d6d127ee39ac23fa2e0aa0f1e381b3';
  function handleClick() {
    props.us.map(async username => {
      await request(`PUT /user/following/${username}`, {
        username: 'username',
      });
    });
  }

  return (
    <div>
      {props.us.map(user => {
        return (
          <Card style={{ width: '18rem' }} className='card'>
            <Card.Body>
              <Card.Title>Forked Users</Card.Title>
              <Card.Text>{user}</Card.Text>
              <Card.Link onClick={handleClick}>Follow</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default Profile;
