// Dizionario di mappatura colori esadecimali -> nomi
// Qui riportiamo manualmente i nomi dei colori (sia dai "popular" che dai "hair", "clothing" e "skin")
const colorNames: Record<string, string> = {
  // Popular Colors
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
  "#800000": "Dark Brown",
  "#00FFFF": "Cyan",
  "#FFD700": "Gold",
  "#A52A2A": "Brown",
  "#7FFF00": "Chartreuse Green",
  "#F0E68C": "Khaki",
  "#D2691E": "Chocolate",
  "#8A2BE2": "Blue Violet",
  "#FF6347": "Tomato Red",

  // Hair Colors
  "#4B2A06": "Dark Brown",
  "#8B4513": "Brown",
  "#D2B48C": "Ash Blonde",
  "#E1C16E": "Light Blonde",
  "#B87333": "Copper",
  "#C19A6B": "Honey Brown",
  "#905E26": "Golden Brown",
  "#4A2C2A": "Chocolate Brown",

  // Clothing Colors
  "#00008B": "Navy Blue",
  "#8B0000": "Dark Red",
  "#006400": "Dark Green",
  // "#FFD700" is already defined as Gold (Popular)
  // "#800080" is already defined as Purple (Popular)
  "#708090": "Slate Gray",
  // "#D2B48C" is already defined as Ash Blonde (Hair)
  "#FF69B4": "Hot Pink",
  "#A9A9A9": "Dark Gray",
  "#483D8B": "Dark Indigo",

  // Skin Tones
  "#F5CBA7": "Light Skin",
  "#ECC19C": "Ivory",
  "#D2A679": "Cream",
  "#C68642": "Coffee",
  "#8D5524": "Light Brown",
  "#C58C85": "Light Pinkish",
  "#AB7E50": "Amber",
  "#C3A28D": "Pinkish Beige",
  "#9F6F50": "Medium Tone",
  "#7D4C35": "Warm Dark Brown",
}

export function _parseKey(value: string): string {

  if (/^\d+$/.test(value)) {
    return `${value}`;
  }

  // Regex per verificare se la stringa è un colore esadecimale
  const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

  // Se la stringa è un colore esadecimale, cerca il nome nel dizionario
  if (hexColorRegex.test(value)) {
    const colorName = colorNames[value.toUpperCase()] || "Colore sconosciuto";
    return `${colorName}`;
  }

  // Altrimenti, esegui la formattazione standard
  return value
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2') // Separa lettere da numeri
    .replace(/([0-9])([a-zA-Z])/g, '$1 $2') // Separa numeri da lettere
    .replace(/([a-z])([A-Z])/g, '$1 $2')    // Separa lettere minuscole da maiuscole
    .replace(/^./, (str: string) => str.toUpperCase()); // Prima lettera maiuscola
}
