import {reiniciar} from "../juego/evento.js";
import Boton, {agregarEvento} from "./boton.js";
import {agregar} from "../../utilidades/agregaTabla.js";

export default function crear() {
    let boton = Boton("Reiniciar");
    agregar("aqui", boton);
    agregarEvento(reiniciar);
}