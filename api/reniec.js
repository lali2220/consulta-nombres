import data from "../data/dni.json";

export default function handler(req, res) {
  const { dni } = req.query;

  if (!dni) {
    return res.status(400).json({ error: "Falta el DNI" });
  }

  if (!/^\d{8}$/.test(dni)) {
    return res.status(400).json({ error: "DNI inválido" });
  }

  const persona = data.find(p => p.dni === dni);

  if (!persona) {
    return res.status(404).json({ error: "No encontrado" });
  }

  res.json({
    success: true,
    data: persona
  });
}
