import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then(response => response.json())
      .then(data => {
        console.log("fetched", data);
        setUserData(data)})
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>Address: {userData.address}</p>
      </header>
    </div>
  );
}

export default App;
