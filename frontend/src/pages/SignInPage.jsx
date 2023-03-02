import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignInPage = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    loginId: '',
    password: '',
  });

  const successSignIn = () => {
    navigate('/chart');
  };

  const changeValue = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signIn', {
        loginId: auth.loginId,
        password: auth.password,
      });
      console.log(response);
      localStorage.setItem('accessToken', response.data.data.accessToken);
      localStorage.setItem('refreshToken', response.data.data.refreshToken);
      response.data.code === 200 && successSignIn();
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div style={{ width: '50%', padding: '20px' }}>
      <h1>SignIn Page</h1>
      <Form onSubmit={signInHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ID"
            name="loginId"
            onChange={changeValue}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={changeValue}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          SignIn
        </Button>
      </Form>
    </div>
  );
};

export default SignInPage;
