import { useState } from "react";

function App() {
  // const [addArcticles, setAddArcticle] = useState("Titolo articolo");
  // const [arcticles, setArcticles] = useState([
  //   "Tagli all'edilizia",
  //   "Omicidio su Marte",
  //   "Concerto Stranamore a Pisa",
  // ]);

  // const handleInputChange = (event) => {
  //   setAddArcticle(event.target.value);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Aggiungi l'articolo: " + addArcticles);
  //   const newArcticles = [...arcticles, addArcticles];
  //   setArcticles(newArcticles);
  // };
  const [titleField, setTitleField] = useState("");
  const [articleList, setArticleList] = useState([]);

  const handleInsertArticleSubmit = (e) => {
    e.preventDefault();

    if (!titleField) return;

    const newArticle = {
      title: titleField,
    };

    setArticleList([...articleList, newArticle]);
    setTitleField("");
    console.log(articleList);
  };

  const handleTitleChange = (e) => {
    setTitleField(e.target.value);
  };

  const deleteArticle = (deleteIndex) => {
    const newArticleList = articleList.filter(
      (article, articleIndex) => articleIndex !== deleteIndex
    );

    setArticleList(newArticleList);
  };

  return (
    <>
      <div className="container">
        {/* INSERT ARTICLE POST SECTION */}
        <section className="py-4">
          <form onSubmit={handleInsertArticleSubmit}>
            <h2>Insert Form</h2>
            <div className="row">
              <div className="col-3">
                <label className="form-label" htmlFor="article-title">
                  Titolo
                </label>
                <input
                  value={titleField}
                  onChange={handleTitleChange}
                  type="text"
                  className="form-control mb-3"
                  id="article-title"
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary">Crea articolo</button>
              </div>
            </div>
          </form>
        </section>
        <hr />
        {/* LIST ARTICLE SECTION */}
        <section className="py-4">
          <h2>Post list</h2>
          <div className="row row-cols-3 g-3">
            {articleList.length ? (
              articleList.map((article, index) => (
                <div key={index} className="col">
                  <div className="card">
                    <button
                      onClick={() => deleteArticle(index)}
                      type="button"
                      className="btn-close"
                    ></button>
                    <div className="card-body">
                      <h3>{article.title}</h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <h3>Nessun articolo disponibile</h3>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* <div className="container">
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
      </div> */}
    </>
  );
}

export default App;
