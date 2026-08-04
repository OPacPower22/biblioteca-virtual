# Biblioteca Virtual — Fraternidad No. 1

Catálogo digital estático (HTML/CSS/JS, sin build tools) de acceso público. Es un proyecto independiente de `Fraternitas-ERP-prototipo` y del sitio institucional (`10_PROYECTOS/IAF`).

## Qué es esto y qué no es

- **Biblioteca Virtual (aquí)**: catálogo público de lectura/descarga, sin necesidad de iniciar sesión. Pensado para difusión y estudio abierto.
- **Módulo Biblioteca del ERP** (`Fraternitas-ERP-prototipo`): gestión interna de préstamos y devoluciones de los ejemplares físicos de la Logia, restringido a miembros con sesión iniciada.

Son sistemas distintos que resuelven necesidades distintas; el sitio institucional enlaza a ambos desde su página `biblioteca.html`.

## Estructura

```
20_BIBLIOTECA/
├── index.html         Catálogo con buscador y filtros por categoría
├── CSS/style.css       Mismo lenguaje visual del sitio institucional
├── JS/catalog.js        Datos del catálogo (EDITAR AQUÍ para agregar/quitar obras)
├── JS/main.js             Render, búsqueda y filtros
└── assets/docs/            Coloca aquí los archivos (PDF, EPUB…) del catálogo
```

## Cómo agregar una obra real

1. Coloca el archivo en `assets/docs/` (por ejemplo `assets/docs/mi-obra.pdf`).
2. Agrega una entrada en `JS/catalog.js`:

```js
{
  id: "obr-007",
  titulo: "Título de la obra",
  autor: "Autor",
  categoria: "historia",       // historia | filosofia | simbolismo (o agrega una nueva y su chip en index.html)
  categoriaLabel: "Historia",
  anio: 2024,
  descripcion: "Breve descripción.",
  archivo: "assets/docs/mi-obra.pdf"
}
```

El catálogo actual (`obr-001` a `obr-006`) son **entradas de ejemplo** con obras de dominio público conocidas, para mostrar el diseño funcionando. Reemplázalas por el acervo real de la Logia.

## Cómo verlo localmente

```bash
python3 -m http.server 8000
```

## Conexión con el sitio institucional

El botón "← Volver al sitio principal" y el enlace "Biblioteca" del sitio en `10_PROYECTOS/IAF` usan rutas relativas válidas en desarrollo local. Al desplegar cada proyecto en su propio dominio, actualiza esas URLs (aquí en el `<a>` del header de `index.html`, y en `IAF/JS/config.js` del otro lado).
