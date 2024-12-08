export function _parseKey(value: string): string {
  // Dizionario di mappatura colori esadecimali -> nomi
  const colorNames: Record<string, string> = {
    "#FFFFFF": "White",
    "#000000": "Black",
    "#FF0000": "Red",
    "#00FF00": "Green",
    "#0000FF": "Blue",
    "#FFFF00": "Yellow",
    "#FFA500": "Orange",
    "#800080": "Purple",
    "#FFC0CB": "Pink",
    "#808080": "Gray",
    "#ADD8E6": "Light Blue",
    "#800000": "Maroon",
    "#00FFFF": "Cyan",
    "#FFD700": "Gold",
    "#A52A2A": "Brown",
    "#7FFF00": "Chartreuse",
    "#F0E68C": "Khaki",
    "#D2691E": "Chocolate",
    "#8A2BE2": "Blue Violet",
    "#FF6347": "Tomato",
  };

  // Regex per verificare se la stringa è un colore esadecimale
  const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

  // Se la stringa è un colore esadecimale, cerca il nome nel dizionario
  if (hexColorRegex.test(value)) {
    const colorName = colorNames[value.toUpperCase()] || "Unknown Color";
    return `${value.toUpperCase()} (${colorName})`;
  }

  // Altrimenti, esegui la formattazione standard
  return value
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2') // Separa lettere da numeri
    .replace(/([0-9])([a-zA-Z])/g, '$1 $2') // Separa numeri da lettere
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Separa lettere minuscole da maiuscole
    .replace(/^./, (str: string) => str.toUpperCase()); // Prima lettera maiuscola
}
