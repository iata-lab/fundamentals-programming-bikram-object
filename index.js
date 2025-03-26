const Coche = {
  marca: "Seat",
  modelo: "Leon",
  matricula: "1234ABC",
};

const Casa = {
  codPostal: 48002,
  calle: "Iparraguirre",
  portal: "13",
  piso: "5C",
};

const FullStackDeveloper = {
  lenguajes: ["JS", "Python", "Java"],
  proyectos: ["Project1", "Project2", "Project3"],
};

const Perro = {
  nombre: "Luna",
  raza: "chow_chow",
  color: "marron",
  edad: 10,
  ladrar: function () {
    console.log("Bark,bark!");
  },
  popo: function () {
    return Math.random() * 3;
  },
};

let marcaPortatil = Portatil.marca;

let marcaPortatil2 = Portatil["marca"];

let grupos = Concierto.grupos;

let RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = "P345";

Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha = new Date();

Impresora.imprimiendo = {
  nombreArchivo: "justificanteFalta",
  copias: 5,
  numPaginas: 1,
};

// 13

const Noticia = {
  titular: "Asesisinato",
  cuerpo: "Lorem",
};

const Persona = {
  nombre: "Lorem",
  apellidos: "Ipsum",
  edad: -10,
};

const Avion = {
  numPasajeros: 23,
  despegar: function () {
    console.log("despegando");
  },
  volar: function () {
    console.log("llegando al destino");
  },
  aterrizar: function () {
    console.log("aterrizando");
  },
};

const Paquete = {
  contenido: ["cepillo electrico", "cubo magico", "cubo rubik"],
};

const Pais = {
  numHabitantes: 4000,
  continente: "America",
  gentilicio: "antiguanos",
};

// 18

let codError = O_Error.codigo;

let integrantes = Grupo.integrantes;

let nivelesTinta = Impresora.tinta;

let pixeles = Pantalla.pixeles;

let especificaciones = Movil["especificaciones"];

Grupo.numIntegrantes = 5;

Pantalla.dimensiones = "1920x1080";

//forma semipro

Led.encendido = !Led.encendido;

// Led.encendido ^= true
// true^true = false
// false^true = true

Movil.temperatura = "20º";
