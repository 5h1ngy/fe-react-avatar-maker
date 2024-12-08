import { createSlice } from '@reduxjs/toolkit';

// import { Options } from '@dicebear/core';
// export interface Options {
//     seed?: string;
//     flip?: boolean;
//     rotate?: number;
//     scale?: number;
//     radius?: number;
//     size?: number;
//     backgroundColor?: string[];
//     backgroundType?: BackgroundType[]; // 'solid' | 'gradientLinear'
//     backgroundRotation?: number[];
//     translateX?: number;
//     translateY?: number;
//     clip?: boolean;
//     randomizeIds?: boolean;
// }

// import { avataaars } from '@dicebear/collection';
// export interface Options {
//     style?: ('circle' | 'default')[];
//     base?: ('default')[];
//     backgroundColor?: string[];
//     hairColor?: string[];
//     skinColor?: string[];
//     facialHairColor?: string[];
//     mouth?: ('concerned' | 'default' | 'disbelief' | 'eating' | 'grimace' | 'sad' | 'screamOpen' | 'serious' | 'smile' | 'tongue' | 'twinkle' | 'vomit')[];
//     nose?: ('default')[];
//     eyes?: ('closed' | 'cry' | 'default' | 'eyeRoll' | 'happy' | 'hearts' | 'side' | 'squint' | 'surprised' | 'winkWacky' | 'wink' | 'xDizzy')[];
//     eyebrows?: ('angryNatural' | 'defaultNatural' | 'flatNatural' | 'frownNatural' | 'raisedExcitedNatural' | 'sadConcernedNatural' | 'unibrowNatural' | 'upDownNatural' | 'angry' | 'default' | 'raisedExcited' | 'sadConcerned' | 'upDown')[];
//     facialHair?: ('beardLight' | 'beardMajestic' | 'beardMedium' | 'moustacheFancy' | 'moustacheMagnum')[];
//     facialHairProbability?: number;
//     clothing?: ('blazerAndShirt' | 'blazerAndSweater' | 'collarAndSweater' | 'graphicShirt' | 'hoodie' | 'overall' | 'shirtCrewNeck' | 'shirtScoopNeck' | 'shirtVNeck')[];
//     top?: ('hat' | 'hijab' | 'turban' | 'winterHat1' | 'winterHat02' | 'winterHat03' | 'winterHat04' | 'bob' | 'bun' | 'curly' | 'curvy' | 'dreads' | 'frida' | 'fro' | 'froBand' | 'longButNotTooLong' | 'miaWallace' | 'shavedSides' | 'straight02' | 'straight01' | 'straightAndStrand' | 'dreads01' | 'dreads02' | 'frizzle' | 'shaggy' | 'shaggyMullet' | 'shortCurly' | 'shortFlat' | 'shortRound' | 'shortWaved' | 'sides' | 'theCaesar' | 'theCaesarAndSidePart' | 'bigHair')[];
//     topProbability?: number;
//     accessories?: ('kurt' | 'prescription01' | 'prescription02' | 'round' | 'sunglasses' | 'wayfarers' | 'eyepatch')[];
//     accessoriesProbability?: number;
//     clothingGraphic?: ('bat' | 'bear' | 'cumbia' | 'deer' | 'diamond' | 'hola' | 'pizza' | 'resist' | 'skull' | 'skullOutline')[];
//     accessoriesColor?: string[];
//     clothesColor?: string[];
//     hatColor?: string[];
// }

export type OptionKeys =
    // Basic Options
    | 'seed'
    | 'flip'
    | 'rotate'
    | 'scale'
    | 'radius'
    | 'size'
    | 'backgroundColor'
    | 'backgroundType'
    | 'backgroundRotation'
    | 'translateX'
    | 'translateY'
    | 'clip'
    | 'randomizeIds'
    // Style Options
    | 'style'
    | 'base'
    | 'backgroundColor'
    // Colors Options
    | 'hairColor'
    | 'skinColor'
    | 'facialHairColor'
    // Face Options
    | 'mouth'
    | 'nose'
    | 'eyes'
    | 'eyebrows'
    | 'facialHair'
    | 'facialHairProbability'
    // Clothes Options
    | 'clothing'
    | 'top'
    | 'topProbability'
    | 'accessories'
    | 'accessoriesProbability'
    | 'clothingGraphic'
    | 'accessoriesColor'
    | 'clothesColor'
    | 'hatColor'

type Options =
    Record<OptionKeys, Array<string>>;

type SelectedOptions =
    Record<OptionKeys, Array<string>>;

export interface State {
    optionsBasic: Partial<Options>,
    optionsStyle: Partial<Options>,
    optionsColors: Partial<Options>,
    optionsFace: Partial<Options>,
    optionsClothes: Partial<Options>,
    selectedOptions: Partial<SelectedOptions>,
}

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
            // backgroundColor?: string[];
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
            // backgroundColor?: string[];
        },
        optionsColors: {
            // hairColor?: string[];
            // skinColor?: string[];
            // facialHairColor?: string[];
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
            // accessoriesColor?: string[];
            // clothesColor?: stri
            // hatColor?: string[];
        },
        selectedOptions: {
        },
    } as State,
    reducers: {
        updateOption: (state, action) => {
            state.selectedOptions[action.payload.id as OptionKeys] = action.payload.values
        }
        // addItem: (state, action) => {
        //     state.occurrences.push(action.payload);
        // },
        // removeItem: (state, action) => {
        //     state.occurrences = state.occurrences.filter(item => item.id !== action.payload.id);
        // },
        // updateItem: (state, action) => {
        //     const index = state.occurrences.findIndex(item => item.id === action.payload.id);
        //     if (index !== -1) {
        //         state.occurrences[index] = action.payload;
        //     }
        // },
        // clearItems: (state) => {
        //     state.occurrences = [];
        // },
    },
});

export const actions = {
    ...slice.actions,
};

export default slice.reducer;
