import { revisar } from "../utilidades/revisa.js";

export function seGana(){
    let botones = document.getElementsByTagName("BUTTON");
    return revisar(botones)
}