import React from 'react';

// URL relative pour passer par Nginx
const apiUrl = process.env.REACT_APP_API_URL || ''; 
console.log('API URL utilisée:', apiUrl);

const UserList = ({ users, setUsers }) => {
  const handleDelete = async (id) => {
    try {
      console.log(`Tentative de suppression de l'utilisateur avec l'ID : ${id}`);
      const response = await fetch(`${apiUrl}/${id}`, { // Corrigé pour éviter /users/users
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur serveur');
      }

      console.log(`Utilisateur avec l'ID ${id} supprimé avec succès.`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'utilisateur avec l'ID ${id}:`, error.message);
      alert(`Erreur lors de la suppression : ${error.message}`);
    }
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
