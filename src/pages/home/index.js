import React, { useEffect, useState } from "react";
import { getPets } from "../../api/petfinder";
import Hero from "../../components/hero";

// import useParams
import { useParams } from "react-router-dom";
// import Link
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets(type);
      setData(petsData);
    }

    getPetsData();
  }, [type]);

  // NOTA: Eliminamos el "if (!data) return Loading" que bloqueaba toda la página

  return (
    <div className="page">
      {/* 1. HERO INMEDIATO: Se renderiza YA, sin esperar a la API */}
      <Hero />

      <h3>
        <span className="pet-type-label">{type ? `${type}s` : "Pets"}</span>{" "}
        available for adoption near you
      </h3>

      {/* 2. CARGA LOCALIZADA: Solo esperamos datos para la rejilla */}
      {!data ? (
        <h2 style={{ textAlign: "center", padding: "2rem" }}>
          Loading pets...
        </h2>
      ) : data.length ? (
        <div className="grid">
          {data.map((animal, index) => (
            <Link
              key={animal.id}
              to={`/${animal.type.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <article>
                <div className="pet-image-container">
                  <img
                    className="pet-image"
                    src={animal.photos[0]?.medium || "/missing-animal.png"}
                    alt={`Foto de ${animal.name}`}
                    /* TUS OPTIMIZACIONES PREVIAS */
                    width="300"
                    height="300"
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <h3>{animal.name}</h3>
                <p>Breed: {animal.breeds.primary}</p>
                <p>Color: {animal.colors.primary}</p>
                <p>Gender: {animal.gender}</p>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p className="prompt">No {type}s available for adoption now.</p>
      )}
    </div>
  );
};

export default HomePage;
