/**
 * En Urgencias hay diferentes niveles de prioridad. 0 a la 5.
 *
 * 0 es urgencia vital
 * 1,2 es urgente, tienes prioridad
 * 3,4 es urgente, pero puede esperar
 * 5-100 no es urgente
 */

let prioridad = 10;
// En función de este valor, te van a asignar una categoría : "urgencia vital", "Urgencia Prioritaria", "Urgencia NO Prioritaria", "NO urgente"
let categoria;

switch (prioridad) {
  case 0:
    categoria = "Urgencia Vital";
    break;
  case 1:
  case 2:
    categoria = "Urgencia Prioritaria";
    break;
  case 3:
  case 4:
    categoria = "URgencia NO Prioritaria";
    break;
  default: // en cualquier otro caso...
    categoria = "NO es una urgencia";
}

console.log(categoria);



// switch (error.message) {
//     case "NameConflictError":
//       return response
//         .status(409)
//         .send({ Error: "Name already exists" });
//     case "EmailConflictError":
//       return response
//         .status(409)
//         .send({ Error: "Email already exists" });
//     case "UserNotFound":
//       return response
//         .status(404)
//         .send({ Error: "Player(s) not found" });
//     case "EmailNotExists":
//       return response
//         .status(401)
//         .send({ Error: "Email doesn't exist" });
//     case "AddingMessageError":
//       return response
//         .status(500).send({ Error: "Error playing game" });
//     case "jwtExpired":
//       return response
//         .status(401)
//         .send({ Error: "Authentication required" });
//     case "NoToken":
//       return response
//         .status(401)
//         .send({ Error: "No token" });
//     default:
//       return response
//         .status(500)
//         .json({ error: error.message });
//   }
