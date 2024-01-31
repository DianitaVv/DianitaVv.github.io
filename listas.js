var datosPaises = {
  "1": {
    nombre: "México",
    estados: {
      "1": {
        nombre: "Ciudad de México",
        municipios: ["Álvaro Obregón", "Iztapalapa", "Coyoacán"],
        localidades: {
          "1": ["Santa Fe", "San Ángel", "Mixcoac"],
          "2": ["Iztapalapa Centro", "San Lorenzo Tezonco", "Constitución de 1917"],
          "3": ["Coyoacán Centro", "Del Carmen", "Pedregal"]
        }
      },
      "2": {
        nombre: "Jalisco",
        municipios: ["Guadalajara", "Tlaquepaque", "Puerto Vallarta"],
        localidades: {
          "1": ["Zapopan", "Tlaquepaque", "Tonala"],
          "2": ["San Pedro Tlaquepaque", "San Martín de las Flores", "Tateposco"],
          "3": ["Zona Romántica", "Marina Vallarta", "Las Juntas"]
        }
      },
      "3": {
        nombre: "Nuevo León",
        municipios: ["Monterrey", "San Nicolás de los Garza", "Santa Catarina"],
        localidades: {
          "1": ["San Pedro Garza García", "Guadalupe", "Apodaca"],
          "2": ["Anáhuac", "Las Puentes", "Nueva Linda Vista"],
          "3": ["La Fama", "Valle Alto", "Los Pinos"]
        }
      }
    }
  },
  "2": {
    nombre: "Canadá",
    estados: {
      "1": {
        nombre: "Ontario",
        municipios: ["Toronto", "Ottawa", "Hamilton"],
        localidades: {
          "1": ["Mississauga", "Scarborough", "Etobicoke"],
          "2": ["Gatineau", "Kanata", "Nepean"],
          "3": ["Burlington", "Stoney Creek", "Ancaster"]
        }
      },
      "2": {
        nombre: "Quebec",
        municipios: ["Montreal", "Quebec City", "Gatineau"],
        localidades: {
          "1": ["Laval", "Longueuil", "Brossard"],
          "2": ["Lavis", "Sainte-Foy", "Beauport"],
          "3": ["Hull", "Aylmer", "Gatineau"]
        }
      },
      "3": {
        nombre: "Alberta",
        municipios: ["Calgary", "Edmonton", "Lethbridge"],
        localidades: {
          "1": ["Edmonton", "Red Deer", "Airdrie"],
          "2": ["St. Albert", "Sherwood Park", "Fort Saskatchewan"],
          "3": ["Coaldale", "Taber", "Raymond"]
        }
      }
    }
  },
  "3": {
    nombre: "Estados Unidos",
    estados: {
      "1": {
        nombre: "Florida",
        municipios: ["Miami", "Orlando", "Tampa"],
        localidades: {
          "1": ["Coral Gables", "Miami Beach", "Coconut Grove"],
          "2": ["Winter Park", "Kissimmee", "Apopka"],
          "3": ["St. Petersburg", "Clearwater", "Brandon"]
        }
      },
      "2": {
        nombre: "Illinois",
        municipios: ["Chicago", "Springfield", "Peoria"],
        localidades: {
          "1": ["Evanston", "Oak Park", "Naperville"],
          "2": ["Chatham", "Sherman", "Rochester"],
          "3": ["East Peoria", "Washington", "Pekin"]
        }
      },
      "3": {
        nombre: "Colorado",
        municipios: ["Denver", "Colorado Springs", "Boulder"],
        localidades: {
          "1": ["Aurora", "Lakewood", "Englewood"],
          "2": ["Monument", "Fountain", "Manitou Springs"],
          "3": ["Longmont", "Lafayette", "Louisville"]
        }
      }
    }
  }
};

function agregarSelecciona(selectElement) {
  var opcionSelecciona = document.createElement("option");
  opcionSelecciona.text = "Selecciona";
  opcionSelecciona.value = "";
  selectElement.add(opcionSelecciona);
}

var paisSelect = document.getElementById("pais");
var estadoSelect = document.getElementById("estado");
var municipioSelect = document.getElementById("municipio");
var localidadSelect = document.getElementById("localidad");

for (var paisId in datosPaises) {
  var opcionPais = document.createElement("option");
  opcionPais.text = datosPaises[paisId].nombre;
  opcionPais.value = paisId;
  paisSelect.add(opcionPais);
}

paisSelect.addEventListener("change", cambioP);

function agregarSelecciona(selectElement) {
  var opcionSelecciona = document.createElement("option");
  opcionSelecciona.text = "Selecciona";
  opcionSelecciona.value = "";
  selectElement.add(opcionSelecciona);
}
function cambioP() {
  var seleccionPais = paisSelect.value;
  limpiarSelect(estadoSelect);
  limpiarSelect(municipioSelect);
  limpiarSelect(localidadSelect);
  agregarSelecciona(estadoSelect); 
  cargarEstados(datosPaises[seleccionPais].estados);
}

agregarSelecciona(estadoSelect);
agregarSelecciona(municipioSelect);
agregarSelecciona(localidadSelect);

function cargarEstados(estados) {

  for (var estadoId in estados) {
    var opcionEstado = document.createElement("option");
    opcionEstado.text = estados[estadoId].nombre;
    opcionEstado.value = estadoId;
    estadoSelect.add(opcionEstado);
  }
}

estadoSelect.addEventListener("change", cambioE);

function cambioE() {
  var seleccionPais = paisSelect.value;
  var seleccionEstado = estadoSelect.value;
  limpiarSelect(municipioSelect);
  limpiarSelect(localidadSelect);
  agregarSelecciona(municipioSelect); 
  cargarMunicipios(datosPaises[seleccionPais].estados[seleccionEstado].municipios);
}

function cargarMunicipios(municipios) {
  for (var i = 0; i < municipios.length; i++) {
    var opcionMunicipio = document.createElement("option");
    opcionMunicipio.text = municipios[i];
    opcionMunicipio.value = i + 1;
    municipioSelect.add(opcionMunicipio);
  }
}

municipioSelect.addEventListener("change", cambioM);

function cambioM() {
  var seleccionPais = paisSelect.value;
  var seleccionEstado = estadoSelect.value;
  var seleccionMunicipio = municipioSelect.value;
  limpiarSelect(localidadSelect);
  agregarSelecciona(localidadSelect);  // Agregar "Selecciona" en el cambio de municipio
  cargarLocalidades(datosPaises[seleccionPais].estados[seleccionEstado].localidades[seleccionMunicipio]);
}

function cargarLocalidades(localidades) {
  for (var i = 0; i < localidades.length; i++) {
    var opcionLocalidad = document.createElement("option");
    opcionLocalidad.text = localidades[i];
    opcionLocalidad.value = i + 1;
    localidadSelect.add(opcionLocalidad);
  }
}

function limpiarSelect(selectElement) {
  selectElement.innerHTML = "";
}



