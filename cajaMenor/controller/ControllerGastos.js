import { gastos } from "../model/ModelGastos.js";
console.log(gastos);

let btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener("click", () => {
  console.log("iniciando sesión");
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("usuario").value;
  let correo = document.getElementById("usuario").value;
  console.log(usuario, contrasena, correo);
  // if (usuario == "Dayana") {
  //   if (contrasena == "dayana56") {
  //     if (correo == "dayanahernandezhincapie@gmail.com") {
  //       console.log("Inicio de sesion correcta");
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
  }, 3000);
  //       } else {
  //         console.log("Datos incorrectos");
  //       }
  //     } else {
  //       console.log("Datos incorrectos");
  //     }
  //   } else {
  //     console.log("Datos incorrectos");
  //   }
});

let cerrarSesion = document.getElementById("cerrarSesion");
cerrarSesion.addEventListener("click", () => {
  document.getElementById("login").style.display = "block";
  document.getElementById("panel").style.display = "none";
});
// Tope Maximo
var btnAsignar = document.getElementById("btnAsignar");
btnAsignar.addEventListener("click", () => {
  let topeMaximo = document.getElementById("topeMaximoInput").value;
  document.getElementById("topeMaximo").innerText =
    "Tope Máximo: " + topeMaximo;
});

let registrar = document.getElementById("registrar");
registrar.addEventListener("click", function () {
  document.getElementById("sectionListar").style.zIndex = "2";
  document.getElementById("sectionBuscar").style.zIndex = "2";
  document.getElementById("sectionRegistro").style.zIndex = "3";
});

let totalGasto = 0;
let btnGuardar = document.getElementById("btnGuardar");

btnGuardar.addEventListener("click", () => {
  let fcategoria = document.getElementById("fcategoria").value;
  let fdescripcion = document.getElementById("fdescripcion").value;
  let fvalor = document.getElementById("fvalor").value;
  let ffecha = document.getElementById("ffecha").value;
  let selectedCategory = document.getElementById("fcategoriaBuscar").value;
  totalGasto += fvalor;
  document.getElementById("fcategoria").value = "";
  document.getElementById("fdescripcion").value = "";
  document.getElementById("fvalor").value = "";
  document.getElementById("ffecha").value = "";
  let gasto = {
    id: Math.random() * 10,
    categoria: fcategoria,
    descripcion: fdescripcion,
    valor: fvalor,
    fecha: ffecha,
    selectedCategory: selectedCategory,
  };
  if (fvalor >= 1000) {
    gastos.push(gasto);
  } else {
    alert("El gasto debe ser mayor o igual a $1000");
  }
  let topeMaximo = document.getElementById("topeMaximoInput").value;
  let valorTopeMaximo = document.getElementById("topeMaximo");
  let porcentaje = (totalGasto / topeMaximo) * 100;
  if (porcentaje <= 25) {
    valorTopeMaximo.style.backgroundColor = "rgb(141 167 142)";
    valorTopeMaximo.style.width = "25%";
    valorTopeMaximo.style.borderRadius = "4px";
    valorTopeMaximo.style.justifyContent = center;
    valorTopeMaximo.style.display = flex;
  } else if (porcentaje <= 50) {
    valorTopeMaximo.style.backgroundColor = "rgb(193 189 146)";
    valorTopeMaximo.style.width = "25%";
    valorTopeMaximo.style.borderRadius = "4px";
    valorTopeMaximo.style.justifyContent = center;
    valorTopeMaximo.style.display = flex;
  } else if (porcentaje <= 75) {
    valorTopeMaximo.style.backgroundColor = "rgb(187 150 143)";
    valorTopeMaximo.style.width = "25%";
    valorTopeMaximo.style.borderRadius = "4px";
    valorTopeMaximo.style.justifyContent = center;
    valorTopeMaximo.style.display = flex;
  } else if (porcentaje <= 90) {
    alert(porcentaje - totalGasto + "falta para llegar al tope maximo ");
  }
});

let buscar = document.getElementById("buscar");
buscar.addEventListener("click", function () {
  document.getElementById("sectionListar").style.zIndex = "2";
  document.getElementById("sectionBuscar").style.zIndex = "3";
  document.getElementById("sectionRegistro").style.zIndex = "2";
});

function filterExpensesByCategory(category) {
  return gastos.filter((gasto) => gasto.categoria === category);
}

let buscarCate = document.getElementById("buscarCate");
buscarCate.addEventListener("click", function () {
  document.getElementById("sectionListar").innerHTML = ""; // Clear previous content
  let selectedCategory = document.getElementById("fcategoriaBuscar").value;
  console.log(selectedCategory);

  document.getElementById("sectionListar").style.zIndex = "2";
  document.getElementById("sectionBuscar").style.zIndex = "3";
  document.getElementById("sectionRegistro").style.zIndex = "2";

  if (selectedCategory === "all") {
    console.log("Inside if block");
    // Display all expenses if "All" category is selected
    gastos.map((gasto) => {
      let categoria = document.createElement("p");
      let descripcion = document.createElement("p");
      let valor = document.createElement("p");
      let fecha = document.createElement("p");
      let card = document.createElement("article");
      categoria.textContent = `Categoria: ${gasto.categoria}`;
      descripcion.textContent = `Descripción: ${gasto.descripcion}`;
      valor.textContent = `Valor: ${gasto.valor}`;
      fecha.textContent = `Fecha: ${gasto.fecha}`;
      card.classList.add("cardDos");


      card.append(categoria, descripcion, valor, fecha);
      document.getElementById("sectionBuscar").append(card);
    });
  } else {
    console.log("Inside else block");
    // Display expenses based on selected category
    let filteredExpenses = filterExpensesByCategory(selectedCategory);
    filteredExpenses.map((gasto) => {
      let categoria = document.createElement("p");
      let descripcion = document.createElement("p");
      let valor = document.createElement("p");
      let fecha = document.createElement("p");
      let card = document.createElement("article");
      categoria.textContent = `Categoria: ${gasto.categoria}`;
      descripcion.textContent = `Descripción: ${gasto.descripcion}`;
      valor.textContent = `Valor: ${gasto.valor}`;
      fecha.textContent = `Fecha: ${gasto.fecha}`;
      card.classList.add("cardDos");
      card.append(categoria, descripcion, valor, fecha);
      document.getElementById("sectionBuscar").append(card);
    });
  }
});

let listar = document.getElementById("listar");
listar.addEventListener("click", function () {
  document.getElementById("sectionListar").innerHTML = ""; //formateador de codigo
  document.getElementById("sectionListar").style.zIndex = "3";
  document.getElementById("sectionBuscar").style.zIndex = "2";
  document.getElementById("sectionRegistro").style.zIndex = "2";
  //Siempre se debe de trabajar con una funcion dentro del metodo
  gastos.map((gasto) => {
    let categoria = document.createElement("p");
    let descripcion = document.createElement("p");
    let valor = document.createElement("p");
    let fecha = document.createElement("p");
    let card = document.createElement("article");
    categoria.textContent = `Categoria: ${gasto.categoria}`;
    descripcion.textContent = `Descripción: ${gasto.descripcion}`;
    valor.textContent = `Valor: ${gasto.valor}`;
    fecha.textContent = `Fecha: ${gasto.fecha}`;
    card.classList.add("cardDos");
    card.append(categoria, descripcion, valor, fecha);
    document.getElementById("sectionListar").append(card);
  });
});

function displayExpense(gasto) {
  let categoria = document.createElement("p");
  let descripcion = document.createElement("p");
  let valor = document.createElement("p");
  let fecha = document.createElement("p");
  let card = document.createElement("article");
  categoria.textContent = `Categoria: ${gasto.categoria}`;
  descripcion.textContent = `Descripción: ${gasto.descripcion}`;
  valor.textContent = `Valor: ${gasto.valor}`;
  fecha.textContent = `Fecha: ${gasto.fecha}`;
  card.classList.add("card");
  card.append(categoria, descripcion, valor, fecha);
  document.getElementById("sectionListar").append(card);
}
