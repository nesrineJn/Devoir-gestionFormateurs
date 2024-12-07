import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

function EditFormateur({ formateurs, updateFormateur }) {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [expertise, setExpertise] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const formateur = formateurs.find(f => f.id === parseInt(id));
    if (formateur) {
      setName(formateur.name);
      setPrenom(formateur.prenom);
      setExpertise(formateur.expertise);
    }
  }, [id, formateurs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormateur({ id: parseInt(id), name, prenom, expertise });
    navigate('/');
  };

  return (
    <div>
      <h2>Editer le formateur</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">Nom :</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom" className="label">Prénom :</label>
          <input
            id="prenom"
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expertise" className="label">Expertise :</label>
          <input
            id="expertise"
            type="text"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button edit">Modifier</button>
      </form>
    </div>
  );
}

export default EditFormateur;
