import { useState } from "react";

function App() {
  const [addArcticles, setAddArcticle] = useState("Titolo articolo");
  const [arcticles, setArcticles] = useState([
    "Tagli all'edilizia",
    "Omicidio su Marte",
    "Concerto Stranamore a Pisa",
  ]);

  const handleInputChange = (event) => {
    setAddArcticle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Aggiungi l'articolo: " + addArcticles);
    const newArcticles = [...arcticles, addArcticles];
    setArcticles(newArcticles);
  };

  return (
    <>
      <div className="container">
        <h1>Form</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={addArcticles}
            onChange={handleInputChange}
          />
          <button>Invia</button>
        </form>
        <hr />
        <ul>
          {arcticles.map((arcticle) => (
            <li key={arcticle}>{arcticle}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
