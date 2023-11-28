let inputs = document.querySelectorAll(".controls");
inputs.forEach(function (input) {
  input.addEventListener("keyup", validarFormulario);
  //   input.addEventListener("click", validarFormulario);
  //   input.addEventListener("dblclick", validarFormulario);
  //   input.addEventListener("mouseenter", validarFormulario);
  //   input.addEventListener("mouseout", reiniciarFuncion);
  //   input.addEventListener("blur", validarFormulario);
});

let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

function validarFormulario(e) {
  console.log(e);
  switch (e.target.name) {
    case "usuario":
      if (usuario.test(e.target.value)) {
        document.getElementById("usuario").style.backgroundColor = "#d8ffd8";
      } else {
        document.getElementById("usuario").style.backgroundColor = "#ffc7c7";
      }
      break;
    case "contrasena":
      if (contrasena.test(e.target.value)) {
        document.getElementById("contrasena").style.backgroundColor = "#d8ffd8";
        console.log(e.target.value);
      } else {
        document.getElementById("contrasena").style.backgroundColor = "#ffc7c7";
        console.log(e.target.value);
      }
      break;
    case "correo":
      if (correo.test(e.target.value)) {
        document.getElementById("correo").style.backgroundColor = "#d8ffd8";
        console.log(e.target.value);
      } else {
        document.getElementById("correo").style.backgroundColor = "#ffc7c7";
        console.log(e.target.value);
      }
      break;
  }
}

// for (let index = 0; index < inputs.length; index++) {
//     console.log(inputs[index] )
// }
