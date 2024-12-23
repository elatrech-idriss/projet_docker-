import React, { useState } from 'react';

// URL relative pour passer par Nginx
const apiUrl = process.env.REACT_APP_API_URL || ''; 
console.log('API URL utilisée:', apiUrl);

const UserForm = ({ setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}`, { // Pas besoin de /users ici car apiUrl est déjà /users
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message || 'Erreur serveur');
          });
        }
        return response.json();
      })
      .then((newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setName('');
        setEmail('');
        setError(null);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setError(error.message);
      });
  };

  const handleTestAPI = () => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((data) => console.log('Données reçues:', data))
      .catch((error) => console.error('Erreur lors du test API:', error));
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>Erreur: {error}</div>}
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
      <button onClick={handleTestAPI} style={{ marginTop: '20px' }}>
        Tester API
      </button>
    </div>
  );
};

export default UserForm;
