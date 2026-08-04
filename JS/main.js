document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("catalogo");
  const buscador = document.getElementById("buscador");
  const chips = document.querySelectorAll(".filtro-chip");
  const sinResultados = document.getElementById("sinResultados");

  let categoriaActiva = "todas";

  function crearTarjeta(obra) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-libro";
    tarjeta.innerHTML =
      '<span class="categoria">' + obra.categoriaLabel + '</span>' +
      '<h3>' + obra.titulo + '</h3>' +
      '<p class="autor">' + obra.autor + ' · ' + obra.anio + '</p>' +
      '<p class="descripcion">' + obra.descripcion + '</p>' +
      '<div class="acciones">' +
      '<a class="btn btn-oro" href="' + obra.archivo + '" target="_blank" rel="noopener">Leer</a>' +
      '<a class="btn" href="' + obra.archivo + '" download>Descargar</a>' +
      '</div>';
    return tarjeta;
  }

  function render() {
    const texto = buscador.value.trim().toLowerCase();
    const resultados = CATALOGO.filter(function (obra) {
      const coincideCategoria = categoriaActiva === "todas" || obra.categoria === categoriaActiva;
      const coincideTexto =
        obra.titulo.toLowerCase().includes(texto) ||
        obra.autor.toLowerCase().includes(texto);
      return coincideCategoria && coincideTexto;
    });

    contenedor.innerHTML = "";
    resultados.forEach(function (obra) {
      contenedor.appendChild(crearTarjeta(obra));
    });
    sinResultados.style.display = resultados.length === 0 ? "block" : "none";
  }

  buscador.addEventListener("input", render);
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("activo"); });
      chip.classList.add("activo");
      categoriaActiva = chip.getAttribute("data-categoria");
      render();
    });
  });

  render();
});
