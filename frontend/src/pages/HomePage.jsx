import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '50%', padding: '20px' }}>
      <h1>Home Page</h1>
      <Button
        variant="primary"
        style={{ marginRight: '10px' }}
        onClick={() => {
          navigate('/signIn');
        }}
      >
        SignIn
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          navigate('/signUp');
        }}
      >
        SignUp
      </Button>
    </div>
  );
};

export default HomePage;
