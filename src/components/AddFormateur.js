import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AddFormateur({ addFormateur }) {
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [expertise, setExpertise] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormateur = { name, prenom, expertise };
    addFormateur(newFormateur);
    navigate('/');
  };

  return (
    <div>
      <h2>Ajouter un formateur</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Expertise"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
          required
        />
        <button type="submit" className="button add">Ajouter</button>
      </form>
    </div>
  );
}

export default AddFormateur;
