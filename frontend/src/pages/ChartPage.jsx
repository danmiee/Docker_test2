import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const ChartPage = () => {
  let socket;

  const start = () => {
    socket = new WebSocket('ws://localhost:8080/coin');
    socket.onopen = () => {
      console.log('연결됨');
    };
    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log(data);
    };
  };

  const stop = () => {
    socket.close();
  };

  return (
    <div style={{ width: '50%', padding: '20px' }}>
      <h1>Chart Page</h1>
      <Button
        variant="primary"
        onClick={() => {
          start();
        }}
      >
        Open
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          stop();
        }}
      >
        Close
      </Button>
    </div>
  );
};

export default ChartPage;
