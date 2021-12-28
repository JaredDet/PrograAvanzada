export function estaOk(nroFila, nroColumna) {
  return (
    (nroFila == 0 && nroColumna == 0) ||
    (nroFila == 0 && nroColumna == 5)
  );
}