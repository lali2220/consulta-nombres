import data from "../data/dni.json";

export default function handler(req, res) {
  const { dni } = req.query;

  if (!dni) {
    return res.status(400).json({
      success: false,
      message: "Debe enviar el parámetro dni"
    });
  }

  if (!/^\d{8}$/.test(dni)) {
    return res.status(400).json({
      success: false,
      message: "DNI inválido"
    });
  }

  const persona = data.find(p => p.dni === dni);

  if (!persona) {
    return res.status(404).json({
      success: false,
      message: "DNI no encontrado"
    });
  }

  return res.status(200).json({
    success: true,
    api: "RENIEC DEMO",
    data: persona
  });
}
