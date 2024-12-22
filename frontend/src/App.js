import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  // Charger les utilisateurs depuis le backend
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Erreur lors du chargement des utilisateurs:', error));
  }, []);

  return (
    <div>
      <h1>Gestion des Utilisateurs</h1>
      <UserForm setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
