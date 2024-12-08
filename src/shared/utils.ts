export function _parseKey(value: string) {
    return value.replace(/([a-zA-Z])([0-9])/g, '$1 $2') // Separa lettere da numeri
      .replace(/([0-9])([a-zA-Z])/g, '$1 $2') // Separa numeri da lettere
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Separa lettere minuscole da maiuscole
      .replace(/^./, (str: string) => str.toUpperCase()); // Prima lettera maiuscola
  }