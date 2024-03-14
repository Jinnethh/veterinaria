let data = [];

    function crear() {
      let datos = {};

      datos = {
        tipoMascota: document.getElementById("tipo-mascota").value,
        nombreMascota: document.getElementById("nombre-mascota").value,
        propietario: document.getElementById("propietario").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        sintomas: document.getElementById("sintomas").value,
      };

      data.push(datos);

      createProducts();
      limpiar();
    }
   

    const createProducts = () => {
      const citasContainer = document.getElementById("citas-cartas");

      citasContainer.innerHTML = "";

      data.forEach((item, i) => {
        let imagenContenedor;

        if (item.tipoMascota === "perro") {
      imagenContenedor = `<img id="gt" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36455974-ff49-4b3b-a5c8-727004fdd9a8/debz3o5-e81f252e-fac3-43c7-8a8e-ca81a96501e9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2NDU1OTc0LWZmNDktNGIzYi1hNWM4LTcyNzAwNGZkZDlhOFwvZGViejNvNS1lODFmMjUyZS1mYWMzLTQzYzctOGE4ZS1jYTgxYTk2NTAxZTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZVd-fMmF-_nuBQjkYcpRr6g3054f1h3Wtj4X4Ee23tQ">`;
    } else if (item.tipoMascota === "gato") {
      imagenContenedor = `<img id="gto" src="./d41ijn0-abc1a80b-3632-4169-b690-fef5e2b663e1.gif">`;
    } else {
      imagenContenedor = `<img id="gta" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17a034de-8964-454a-9065-0a0411b6ba21/ddbprs3-451e699d-e330-4726-9e61-768b7c5f8733.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3YTAzNGRlLTg5NjQtNDU0YS05MDY1LTBhMDQxMWI2YmEyMVwvZGRicHJzMy00NTFlNjk5ZC1lMzMwLTQ3MjYtOWU2MS03NjhiN2M1Zjg3MzMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BIbHh4EO-qhW2nis0L-UbMCbHHU1myl7e1Wmk7nRaFQ">`;
    }

        const cardElement = `
          <div class="cita">
            ${imagenContenedor}
            <h2 class="cita-nombre-mascota">${item.nombreMascota}</h2>
            <p class="cita-propietario"><b>propietario:</b>${item.propietario}</p>
            <p class="cita-telefono" ><b>telefono:</b>${item.telefono}</p>
            <p class="cita-fecha"><b>fecha:</b>${item.fecha}</p>
            <p class="cita-hora"><b>hora:</b>${item.hora}</p>
            <p class="cita-sintomas"><b>sintomas:</b>${item.sintomas}</p>
            <button class="eliminar-cita" onclick="eliminarCita(${i})">Eliminar</button>
           
          </div>
        `;

        citasContainer.innerHTML += cardElement;
      });

      if (data.length === 0) {
    document.getElementById("com").innerHTML = "No tienes citas.";
  } else {
    document.getElementById("com").innerHTML = "Administra tus citas";
  }
    }

 


    function eliminarCita(index) {
      data.splice(index, 1);
      createProducts();
    }
    function limpiar() {
  document.getElementById("tipo-mascota").value = "";
  document.getElementById("nombre-mascota").value = "";
  document.getElementById("propietario").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("sintomas").value = "";
}

