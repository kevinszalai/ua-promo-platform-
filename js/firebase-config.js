export const firebaseConfig = {
  apiKey: "AIzaSyA0xwzqKDthx7ZT9jaPjmYXyLdm7aVoCUw",
  authDomain: "flyerspromos-58e65.firebaseapp.com",
  projectId: "flyerspromos-58e65",
  storageBucket: "flyerspromos-58e65.firebasestorage.app",
  messagingSenderId: "936855471215",
  appId: "1:936855471215:web:d3c92d6b923a42813c399a"
};

export const DEFAULT_FIELDS = [
  {
    id: "hasta",
    label: "Encabezado",
    type: "select",
    options: ["Hasta", "Obtené", "Planes anuales", "Planes por días", "Plan Value", "Plan Excellence", "Plan Exclusive", "Plan Maximum", "Plan Million", "Plan Best"],
    selector: ".st9 tspan"
  },
  {
    id: "descuento",
    label: "Porcentaje de descuento",
    type: "number",
    placeholder: "50",
    selector: ".st3 tspan",
    hint: "Número entre 1 y 90",
    min: 1,
    max: 90
  },
  {
    id: "cuotas",
    label: "¿Lleva cuotas?",
    type: "cuotas",
    optional: true
  },
  {
    id: "beneficio2",
    label: "Beneficio adicional 2",
    type: "text",
    placeholder: "Menores gratis en anuales",
    hint: "Si hay cuotas va debajo de ellas; si no, ocupa ese lugar",
    optional: true
  }
];

export const SVG_CONFIG = {
  bebasSelectors: [".st6", ".st7"],
  hideSelectors: [".st10"],
  selectorCuotas: ".st11 tspan",
  selectorBeneficio2: ".st8 tspan"
};
