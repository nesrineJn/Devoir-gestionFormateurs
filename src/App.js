import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListFormateurs from "./components/ListFormateurs";
import AddFormateur from "./components/AddFormateur";
import EditFormateur from "./components/EditFormateur";
import "./App.css";

function App() {
  const [formateurs, setFormateurs] = useState([
    { id: 1, name: "Nesrine", prenom: "jouini", expertise: "React native" },
    { id: 2, name: "Ghassene", prenom: "zitoune", expertise: "React" },
    { id: 3, name: "Med", prenom: "Hbaib", expertise: "Devops" },
    { id: 4, name: "Nouha", prenom: "Jmal", expertise: "Node js" },
    { id: 5, name: "Taha", prenom: "Jmal", expertise: "Java" },
  ]);

  const [successMessage, setSuccessMessage] = useState("");

  const showSuccessMessage = (message) => {
    setSuccessMessage(message); 
    setTimeout(() => {
      setSuccessMessage(""); 
    }, 3000);
  };

  const addFormateur = (newFormateur) => {
    const lastId = formateurs.length > 0 ? Math.max(...formateurs.map(f => f.id)) : 0;
    const formateurWithId = { ...newFormateur, id: lastId + 1 };
    setFormateurs([...formateurs, formateurWithId]);
    showSuccessMessage("Formateur ajouté avec succès !");
  };

  const updateFormateur = (updatedFormateur) => {
    setFormateurs(formateurs.map(f => (f.id === updatedFormateur.id ? updatedFormateur : f)));
    showSuccessMessage("Formateur modifié avec succès !");
  };

  const deleteFormateur = (id) => {
    setFormateurs(formateurs.filter(f => f.id !== id));
    showSuccessMessage("Formateur supprimé avec succès !");
  };

  return (
    <Router>
      <div className="container">
        
        {successMessage && <div className="success-message">{successMessage}</div>}
        <Routes>
          <Route
            path="/"
            element={<ListFormateurs formateurs={formateurs} deleteFormateur={deleteFormateur} />}
          />
          <Route path="/add" element={<AddFormateur addFormateur={addFormateur} />} />
          <Route
            path="/edit/:id"
            element={<EditFormateur formateurs={formateurs} updateFormateur={updateFormateur} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
