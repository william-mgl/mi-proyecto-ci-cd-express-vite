import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    // Usamos la URL desplegada en Render para el backend
    fetch("https://backend-express-ci-cd-latest.onrender.com/" + "api/saludo")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch(() =>
        setMensaje("No se pudo conectar con el backend (solo frontend) 😅")
      );
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Frontend Vite + React</h1>
      <p>Mensaje desde el backend:</p>
      <pre>{mensaje}</pre>
    </div>
  );
}

export default App;