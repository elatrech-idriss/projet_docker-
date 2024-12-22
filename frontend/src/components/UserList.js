import React from 'react';

const UserList = ({ users, setUsers }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, { method: 'DELETE' })
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => console.error('Erreur lors de la suppression:', error));
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
          <button onClick={() => handleDelete(user.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
