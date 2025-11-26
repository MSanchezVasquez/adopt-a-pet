const Hero = ({ image, displayText }) => {
  const type = "";

  return (
    <div
      className="hero-container"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <img
        src={image || "pets-hero.webp"}
        alt="Mascotas felices"
        fetchpriority="high" // ¡Clave para LCP!
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // La enviamos al fondo
          filter: "brightness(0.6)", // Reemplaza al linear-gradient negro de antes
        }}
      />
      <h2 style={{ position: "relative" }}>
        {displayText || getHeroTitle(type)}
      </h2>
    </div>
  );
};

export default Hero;

const getHeroTitle = (type) => {
  switch (type) {
    case "dog":
      return "Dogs";
    case "cat":
      return "Cats";
    case "rabbit":
      return "Rabbits";
    case "bird":
      return "Birds";
    default:
      return "Find your perfect pet";
  }
};
