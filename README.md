# UA Promos — Plataforma de Flyers Promocionales

## Cómo agregar un nuevo template

1. Exportar el diseño como **SVG** desde Illustrator / AI
2. Copiar el archivo a la carpeta `templates/`
3. Editar `templates/catalog.json` y agregar una entrada:

```json
{
  "id": "promo-ar",
  "name": "Promo Argentina",
  "file": "templates/promo-ar.svg",
  "fields": [
    {
      "id": "descuento",
      "label": "Porcentaje de descuento",
      "type": "number",
      "placeholder": "40",
      "selector": ".st3 tspan",
      "hint": "Solo el número (sin %)"
    },
    {
      "id": "cuotas",
      "label": "Cuotas / Financiación",
      "type": "text",
      "placeholder": "6 cuotas sin interés",
      "selector": ".st11 tspan",
      "hint": ""
    }
  ]
}
```

> **Tip:** El campo `selector` usa el nombre de clase CSS del elemento de texto en el SVG.
> Para encontrarlo: abrí el SVG en un editor de texto y buscá el texto que querés hacer editable.

---

## Deploy en GitHub Pages

1. Crear un repositorio en GitHub
2. Subir todos los archivos
3. En **Settings → Pages**, elegir rama `main` y carpeta `/root`
4. La URL quedará: `https://TU-ORG.github.io/ua-promo-platform/`

## Correr localmente

```bash
# Python 3
python3 -m http.server 8080
# Abrir: http://localhost:8080
```
