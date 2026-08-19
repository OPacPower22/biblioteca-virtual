/**
 * Catálogo de la Biblioteca Virtual.
 * Este es un catálogo de EJEMPLO (15 obras de dominio público). Los enlaces
 * apuntan a Google Drive o a archive.org para permitir lectura y descarga
 * directa en GitHub Pages sin depender de rutas locales.
 */
const CATALOGO = [
  {
    id: "obr-001",
    titulo: "Constituciones de Anderson",
    autor: "James Anderson",
    categoria: "historia",
    categoriaLabel: "Historia",
    anio: 1723,
    descripcion: "Texto fundacional de la masonería moderna, base de las constituciones de numerosas obediencias.",
    archivo: "https://drive.google.com/file/d/1lZJ3Wdo1-IZ7vhP4CbZS2EgJaJjTukSE/view?usp=drive_link"
  },
  {
    id: "obr-002",
    titulo: "Morals and Dogma",
    autor: "Albert Pike",
    categoria: "filosofia",
    categoriaLabel: "Filosofía",
    anio: 1871,
    descripcion: "Comentario extenso sobre los grados del Rito Escocés Antiguo y Aceptado.",
    archivo: "https://drive.google.com/file/d/1HqCyqnZJLEka9IBIpHxB7JolljPZR4U6/view?usp=drive_link"
  },
  {
    id: "obr-003",
    titulo: "The Builders: A Story and Study of Masonry",
    autor: "Joseph Fort Newton",
    categoria: "historia",
    categoriaLabel: "Historia",
    anio: 1914,
    descripcion: "Panorama histórico del origen y desarrollo de la institución masónica.",
    archivo: "https://drive.google.com/file/d/1ChLDjOPqDTr-nHmAvjvOCMlKccr3EhuH/view?usp=drive_link"
  },
  {
    id: "obr-004",
    titulo: "Manuscrito Regius",
    autor: "Anónimo",
    categoria: "historia",
    categoriaLabel: "Historia",
    anio: 1390,
    descripcion: "El documento masónico conocido más antiguo, origen de las constituciones góticas.",
    archivo: "https://drive.google.com/file/d/1yKNBfjCnQ4jOdZJP1wNnLltvIqBcH_fP/view?usp=drive_link"
  },
  {
    id: "obr-005",
    titulo: "Simbolismo Masónico",
    autor: "Autor por definir",
    categoria: "simbolismo",
    categoriaLabel: "Simbolismo",
    anio: 2020,
    descripcion: "Introducción al lenguaje simbólico de la escuadra, el compás y las herramientas de trabajo.",
    archivo: "https://drive.google.com/file/d/1s28eyItfhDbiG0fjLRjUuOMP-gJm7abi/view?usp=drive_link"
  },
  {
    id: "obr-006",
    titulo: "Masonería para principiantes",
    autor: "Robert Lomas",
    categoria: "filosofia",
    categoriaLabel: "Filosofía",
    anio: 0,
    descripcion: "Materiales de estudio orientados a los primeros pasos del camino masónico.",
    archivo: "https://drive.google.com/file/d/1lDcnLIr3ybJ82EVG8nliyKpW3VdtR14W/view?usp=drive_link"
  },
  {
    id: "obr-007",
    titulo: "The Symbolism of Freemasonry",
    autor: "Albert G. Mackey",
    categoria: "simbolismo",
    categoriaLabel: "Simbolismo",
    anio: 1882,
    descripcion: "Estudio clásico sobre el lenguaje simbólico masónico, sus leyendas, mitos y su filosofía.",
    archivo: "https://archive.org/details/MackeyAGTheSymbolismOfFreemasonry1882"
  },
  {
    id: "obr-008",
    titulo: "An Encyclopedia of Freemasonry",
    autor: "Albert G. Mackey",
    categoria: "historia",
    categoriaLabel: "Historia",
    anio: 1916,
    descripcion: "Obra de referencia enciclopédica sobre la historia, los ritos y las instituciones masónicas.",
    archivo: "https://archive.org/details/An_Encyclopedia_Of_Freemasonry_1916_Vol_1_-_A_G_Mackey"
  },
  {
    id: "obr-009",
    titulo: "The Meaning of Masonry",
    autor: "W. L. Wilmshurst",
    categoria: "filosofia",
    categoriaLabel: "Filosofía",
    anio: 1922,
    descripcion: "Ensayo sobre la dimensión espiritual e iniciática del trabajo masónico.",
    archivo: "https://archive.org/details/The_Meaning_Of_Masonry_-_W_L_Wilmshurst"
  },
  {
    id: "obr-010",
    titulo: "A Concise History of Freemasonry",
    autor: "Robert Freke Gould",
    categoria: "historia",
    categoriaLabel: "Historia",
    anio: 1904,
    descripcion: "Síntesis del desarrollo histórico de la Orden a partir de la obra de referencia de Gould.",
    archivo: "https://archive.org/details/cu31924030281459"
  },
  {
    id: "obr-011",
    titulo: "Illustrations of Masonry",
    autor: "William Preston",
    categoria: "historia",
    categoriaLabel: "Historia",
    anio: 1772,
    descripcion: "Uno de los textos fundacionales de la pedagogía masónica moderna, con doce ediciones en vida del autor.",
    archivo: "https://archive.org/details/IllustrationsOfMasonryPreston"
  },
  {
    id: "obr-012",
    titulo: "The Secret Tradition in Freemasonry",
    autor: "Arthur Edward Waite",
    categoria: "simbolismo",
    categoriaLabel: "Simbolismo",
    anio: 1911,
    descripcion: "Análisis de la relación entre el simbolismo de los grados simbólicos y los altos grados masónicos.",
    archivo: "https://archive.org/details/secrettraditioni01waituoft"
  },
  {
    id: "obr-013",
    titulo: "Duncan's Masonic Ritual and Monitor",
    autor: "Malcolm C. Duncan",
    categoria: "simbolismo",
    categoriaLabel: "Simbolismo",
    anio: 1866,
    descripcion: "Guía monitorial ilustrada de los grados simbólicos, ampliamente reeditada desde el siglo XIX.",
    archivo: "https://archive.org/details/DuncansMasonicRitualAndMonitorOfFreemasonryComplete18663rdEd"
  },
  {
    id: "obr-014",
    titulo: "The Lost Keys of Freemasonry",
    autor: "Manly P. Hall",
    categoria: "filosofia",
    categoriaLabel: "Filosofía",
    anio: 1923,
    descripcion: "Reflexión filosófica sobre el simbolismo de Hiram Abiff y el perfeccionamiento moral del masón.",
    archivo: "https://archive.org/details/lostkeysoffreema0000hall"
  },
  {
    id: "obr-015",
    titulo: "La Masonería en la Historia y en las Leyes de México",
    autor: "Félix Navarrete",
    categoria: "historia",
    categoriaLabel: "Historia",
    anio: 1962,
    descripcion: "Estudio histórico sobre la presencia de la masonería en la legislación mexicana, útil como fuente historiográfica de contraste.",
    archivo: "https://archive.org/details/la-masoneria-en-la-historia-de-las-leyes-de-mexico"
  }
];
