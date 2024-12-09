import { createSlice } from '@reduxjs/toolkit';
import { OptionKeys, Options, SelectedOptions } from "./containerMaker.types";

export interface State {
    optionsBasic: Partial<Options>,
    optionsStyle: Partial<Options>,
    optionsColors: Partial<Options>,
    optionsFace: Partial<Options>,
    optionsClothes: Partial<Options>,
    selectedOptions: Partial<SelectedOptions>,
}

const popularHexColors: string[] = [
    "#FFFFFF", // Bianco
    "#000000", // Nero
    "#FF0000", // Rosso
    "#00FF00", // Verde
    "#0000FF", // Blu
    "#FFFF00", // Giallo
    "#FFA500", // Arancione
    "#800080", // Viola
    "#FFC0CB", // Rosa
    "#808080", // Grigio
    "#ADD8E6", // Azzurro chiaro
    "#800000", // Marrone scuro
    "#00FFFF", // Ciano
    "#FFD700", // Oro
    "#A52A2A", // Marrone
    "#7FFF00", // Verde Chartreuse
    "#F0E68C", // Khaki
    "#D2691E", // Cioccolato
    "#8A2BE2", // Blu Violetto
    "#FF6347", // Rosso Tomate
];

const slice = createSlice({
    name: 'container/make',
    initialState: {
        optionsBasic: {
            // seed?: string;
            // flip?: boolean;
            // rotate?: number;
            // scale?: number;
            // radius?: number;
            // size?: number;
            backgroundColor: popularHexColors,
            backgroundType: ['solid', 'gradientLinear'],
            // backgroundRotation?: number[];
            // translateX?: number;
            // translateY?: number;
            // clip?: boolean;
            // randomizeIds?: boolean;
        },
        optionsStyle: {
            style: ['circle', 'default'],
            base: ['default'],
            backgroundColor: popularHexColors,
        },
        optionsColors: {
            hairColor: popularHexColors,
            skinColor: popularHexColors,
            facialHairColor: popularHexColors,
        },
        optionsFace: {
            mouth: ['concerned', 'default', 'disbelief', 'eating', 'grimace', 'sad', 'screamOpen', 'serious', 'smile', 'tongue', 'twinkle', 'vomit'],
            nose: ['default'],
            eyes: ['closed', 'cry', 'default', 'eyeRoll', 'happy', 'hearts', 'side', 'squint', 'surprised', 'winkWacky', 'wink', 'xDizzy'],
            eyebrows: ['angryNatural', 'defaultNatural', 'flatNatural', 'frownNatural', 'raisedExcitedNatural', 'sadConcernedNatural', 'unibrowNatural', 'upDownNatural', 'angry', 'default', 'raisedExcited', 'sadConcerned', 'upDown'],
            facialHair: ['beardLight', 'beardMajestic', 'beardMedium', 'moustacheFancy', 'moustacheMagnum'],
            // facialHairProbability?: number;
        },
        optionsClothes: {
            clothing: ['blazerAndShirt', 'blazerAndSweater', 'collarAndSweater', 'graphicShirt', 'hoodie', 'overall', 'shirtCrewNeck', 'shirtScoopNeck', 'shirtVNeck'],
            top: ['hat', 'hijab', 'turban', 'winterHat1', 'winterHat02', 'winterHat03', 'winterHat04', 'bob', 'bun', 'curly', 'curvy', 'dreads', 'frida', 'fro', 'froBand', 'longButNotTooLong', 'miaWallace', 'shavedSides', 'straight02', 'straight01', 'straightAndStrand', 'dreads01', 'dreads02', 'frizzle', 'shaggy', 'shaggyMullet', 'shortCurly', 'shortFlat', 'shortRound', 'shortWaved', 'sides', 'theCaesar', 'theCaesarAndSidePart', 'bigHair'],
            // topProbability?: number;
            accessories: ['kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers', 'eyepatch'],
            // accessoriesProbability?: number;
            clothingGraphic: ['bat', 'bear', 'cumbia', 'deer', 'diamond', 'hola', 'pizza', 'resist', 'skull', 'skullOutline'],
            accessoriesColor: popularHexColors,
            clothesColor: popularHexColors,
            hatColor: popularHexColors,
        },
        selectedOptions: {},
    } as State,
    reducers: {
        updateOption: (state, action) => {
            const value = action.payload.value;

            // Regex per verificare se il valore è un colore esadecimale
            const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

            if (hexColorRegex.test(value)) {
                // Se è un colore esadecimale, rimuovi il primo carattere (#)
                state.selectedOptions[action.payload.id as OptionKeys] = [value.slice(1)];
            } else {
                // Altrimenti, assegna il valore normalmente
                state.selectedOptions[action.payload.id as OptionKeys] = [value];
            }
        },
    },
});

export const actions = {
    ...slice.actions,
};

export default slice.reducer;
