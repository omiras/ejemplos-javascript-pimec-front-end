// 1. El response.json() hace algo muy similar a esto

//https://www.w3schools.com/js/js_json_parse.asp

const personaje = `{
    "name": "Manz",
    "life": 3,
    "totalLife": 6,
    "power": 10,
    "dead": false,
    "props": ["invisibility", "coding", "happymood"],
    "senses": {
      "vision": 50,
      "audition": 75,
      "taste": 40,
      "touch": 80
    }
  }`;

// transformamos el string que contiene un JSON en un formato conocido de JavaScript (un objeto)
const personajeParseado = JSON.parse(personaje);

// Acceder a cualquier propiedad de ese objeto
console.log("Nombre del personake: ", personajeParseado.name);
