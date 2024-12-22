import React, { useState } from 'react';

const UserForm = ({ setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.json())
      .then((newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setName('');
        setEmail('');
      })
      .catch((error) => console.error('Erreur lors de l’ajout d’un utilisateur:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default UserForm;
