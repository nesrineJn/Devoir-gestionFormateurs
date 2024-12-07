import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ListFormateurs({ formateurs, deleteFormateur }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFormateur, setSelectedFormateur] = useState(null);

  const handleDelete = (id, name) => {
    setSelectedFormateur({ id, name });
    setShowModal(true); 
  };

  const confirmDelete = () => {
    deleteFormateur(selectedFormateur.id); 
    setShowModal(false); 
    setSelectedFormateur(null);
  };

  const cancelDelete = () => {
    setShowModal(false); 
    setSelectedFormateur(null);
  };

  return (
    <div>
      <h1>Gestion des Formateurs</h1>
      <Link to="/add">
        <button className="add">Ajouter un formateur</button>
      </Link>
      <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Expertise</th>
        <th>Editer</th>
        <th>Supprimer</th>
      </tr>
</thead>
    <tbody>
      {formateurs.map((formateur) => (
        <tr key={formateur.id}>
          <td>{formateur.id}</td>
          <td>{formateur.name}</td>
          <td>{formateur.prenom}</td>
          <td>{formateur.expertise}</td>
          <td>
            <Link to={`/edit/${formateur.id}`}>
              <button className="edit">Editer</button>
            </Link>
          </td>
          <td>
            <button
              className="delete"
              onClick={() =>
                handleDelete(formateur.id, `${formateur.prenom} ${formateur.name}`)
              }
            >
              Supprimer
            </button>
          </td>
        </tr>
      ))}
</tbody>

      </table>

   

    {/*Modal pour supp*/}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirmer la suppression</h2>
            <p>
              Êtes-vous sûr de vouloir supprimer le formateur{" "}
              <strong>{selectedFormateur?.name}</strong> ?
            </p>
            <div className="modal-actions">
              <button className="button delete-red" onClick={confirmDelete}>
                Supprimer
              </button>
              <button className="button cancel-gray" onClick={cancelDelete}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListFormateurs;
