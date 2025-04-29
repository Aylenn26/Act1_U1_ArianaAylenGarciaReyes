
const Buttons = {
    botones: {
      btnEdit: {
        id: "btnEditar",
        ruta: "img/edit.png",
        title: "Editar",
      },
      btnGuardar: {
        id: "btnGuardar",
        ruta: "img/save.png",
        title: "Guardar",
      },
      btnCancelar: {
        id: "btnCancelar",
        ruta: "img/cancel.png",
        title: "Cancelar",
      },
      btnDelete: {
        id: "btnEliminar",
        ruta: "img/delete.png",
        title: "Eliminar",
      },
    },
  
    crearBoton(id, ruta, title) {
      const img = document.createElement("img");
      img.id = id;
      img.src = ruta;
      img.title = title;
      img.style.cursor = "pointer";
      img.style.margin = "0 5px";
      return img;
    },
  
    crearBotonesAcciones(contenedor, btn, id, ruta, title) {
      const boton = this.crearBoton(id, ruta, title);
      contenedor.appendChild(boton);
    },
  
    cambiarBoton(contenedor, nuevoBoton) {
      contenedor.innerHTML = "";
      contenedor.appendChild(nuevoBoton);
    }
  };
  
  window.Buttons = Buttons;
  