const express = require("express");
const cors = require("cors");

const app = express();
// MODIFICACIÓN: Asignamos 4000 directamente, ignorando process.env.PORT
const PORT = 4000; 

app.use(cors());
app.use(express.json());

// Endpoint simple para probar el backend
app.get("/api/saludo", (req, res) => {
  // Usaré el mensaje que tienes actualmente
  res.json({ mensaje: "Hola desde el backend con Express + CI/CD 🚀" }); 
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});