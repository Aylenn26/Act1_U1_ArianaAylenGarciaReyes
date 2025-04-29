
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formProducto");
    const tabla = document.getElementById("tablaProductos");
    const contenedorTabla = document.getElementById("contenedorTabla");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add('was-validated');
  
      let valido = true;
  
      const talla = document.querySelector('input[name="talla"]:checked');
      if (!talla) {
        document.getElementById("tallaError").style.display = "block";
        valido = false;
      } else {
        document.getElementById("tallaError").style.display = "none";
      }
  
      if (!form.checkValidity()) {
        valido = false;
      }
  
      if (!valido) return;
  
      const idProducto = document.getElementById("idProducto").value;
      const nombre = document.getElementById("nombre").value;
      const precio = document.getElementById("precio").value;
      const categoria = document.getElementById("categoria").value;
      const fecha = document.getElementById("fecha").value;
      const popularidad = parseInt(document.getElementById("popularidad").value);
      const disponible = document.getElementById("disponible").checked ? "Sí" : "No";
  
      const nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML = `
        <td>${idProducto}</td> 
        <td>${nombre}</td>
        <td>$${precio}</td>
        <td>${categoria}</td>
        <td>${fecha}</td>
        <td>
        ${[...Array(5)].map((_, i) => 
        `<span style="color: ${i < popularidad ? '#ffc107' : '#e4e5e9'};">★</span>`
           ).join('')}
        </td>

        <td class="${disponible === 'Sí' ? 'text-success fw-bold' : 'text-danger fw-bold'}">
            ${disponible}
        </td>
        <td>${talla.value}</td>
        <td>
          <button class="btn btn-sm btn-warning editar"><img src="assets/icon/editar.png" width="20"></button>
          <button class="btn btn-sm btn-success guardar" style="display:none;"><img src="assets/icon/guardar.png" width="20"></button>
          <button class="btn btn-sm btn-danger eliminar"><img src="assets/icon/eliminar.png" width="20"></button>
          <button class="btn btn-sm btn-secondary cancelar" style="display:none;"><img src="assets/icon/cancelar.png" width="20"></button>
        </td>
      `;
  
      tabla.appendChild(nuevaFila);
      
  tabla.addEventListener("click", function (e) {
    const boton = e.target.closest("button");
    if (!boton) return;
    const fila = boton.closest("tr");

    //editar
    if (boton.classList.contains("editar")) {
      const celdas = fila.querySelectorAll("td");
      for (let i = 0; i < celdas.length - 1; i++) {
        const texto = celdas[i].innerText;
        celdas[i].setAttribute("data-original", texto);
        if (i !== 5) { 
          celdas[i].innerHTML = `<input type="text" class="form-control" value="${texto}">`;
        }
      }
      toggleBotones(fila, true);
    }

    //guardar
    if (boton.classList.contains("guardar")) {
      const celdas = fila.querySelectorAll("td");
      for (let i = 0; i < celdas.length - 1; i++) {
        if (i !== 5) {
          const input = celdas[i].querySelector("input");
          if (input) celdas[i].innerText = input.value;
        }
      }
      toggleBotones(fila, false);
      alert("✅ Producto guardado correctamente.");
    }

    //cancelar
    if (boton.classList.contains("cancelar")) {
      const celdas = fila.querySelectorAll("td");
      for (let i = 0; i < celdas.length - 1; i++) {
        if (i !== 5) {
          const original = celdas[i].getAttribute("data-original");
          if (original !== null) celdas[i].innerText = original;
        }
      }
      toggleBotones(fila, false);
    }

    //eliminar
    if (boton.classList.contains("eliminar")) {
      fila.remove();
      if (tabla.querySelectorAll("tr").length === 0) {
        contenedorTabla.style.display = "none";
      }
    }
  });

  function toggleBotones(fila, editando) {
    fila.querySelector(".editar").style.display = editando ? "none" : "inline-block";
    fila.querySelector(".guardar").style.display = editando ? "inline-block" : "none";
    fila.querySelector(".cancelar").style.display = editando ? "inline-block" : "none";
    fila.querySelector(".eliminar").style.display = editando ? "none" : "inline-block";
  }

    contenedorTabla.style.display = "block";
    form.reset();
    form.classList.remove('was-validated');
  });

});


  
